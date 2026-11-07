/**
 * ChatGPT-style simulated streaming headline.
 * <own-hero-rotator interval="5200">
 *   <span data-phrase>Build with intent.</span>
 *   <span data-phrase>Ideas into reality.</span>
 * </own-hero-rotator>
 *
 * "interval" is the pause after a phrase finishes, not a fixed rotation timer.
 */
class OwnHeroRotator extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.phrases = [...this.querySelectorAll("[data-phrase]")]
      .map((node) => node.textContent.trim())
      .filter(Boolean);
    if (!this.phrases.length) return;

    this.hold = Math.max(800, Number(this.getAttribute("interval")) || 1700);
    this.index = 0;
    this.output = document.createElement("span");
    this.output.className = "own-hero-rotator__text";
    this.output.setAttribute("aria-hidden", "true");
    this.caret = document.createElement("span");
    this.caret.className = "own-hero-rotator__caret";
    this.caret.setAttribute("aria-hidden", "true");
    this.replaceChildren(this.output, this.caret);
    this.setAttribute("role", "text");
    this.setAttribute("aria-label", this.phrases[0]);

    this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.onMotion = () => this.syncMotion();
    this.motionQuery.addEventListener?.("change", this.onMotion);
    this.onVisibility = () => this.syncMotion();
    document.addEventListener("visibilitychange", this.onVisibility);
    this.syncMotion();
  }

  disconnectedCallback() {
    this.stop();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.motionQuery?.removeEventListener?.("change", this.onMotion);
  }

  stop() {
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = null;
  }

  syncMotion() {
    this.stop();
    if (!this.isConnected || document.hidden) return;
    if (this.motionQuery?.matches) {
      this.output.textContent = this.phrases[0];
      this.caret.hidden = true;
      this.setAttribute("aria-label", this.phrases[0]);
      return;
    }
    this.caret.hidden = false;
    this.output.textContent = "";
    this.index = 0;
    this.typePhrase();
  }

  schedule(delay, callback) {
    this.stop();
    this.timer = window.setTimeout(() => {
      this.timer = null;
      if (this.isConnected && !document.hidden && !this.motionQuery?.matches) callback();
    }, delay);
  }

  graphemes(value) {
    if (window.Intl?.Segmenter) {
      return [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(value)]
        .map((part) => part.segment);
    }
    return Array.from(value);
  }

  tokens(value) {
    const chars = this.graphemes(value);
    const chunks = [];
    let cursor = 0;
    while (cursor < chars.length) {
      if (/\s/.test(chars[cursor])) {
        chunks.push(chars[cursor++]);
        continue;
      }
      if (/^[.,!?;:，。！？；：、]$/.test(chars[cursor])) {
        chunks.push(chars[cursor++]);
        continue;
      }
      const size = 1 + ((chunks.length * 7 + cursor * 3) % 3);
      chunks.push(chars.slice(cursor, cursor + size).join(""));
      cursor += size;
    }
    return chunks;
  }

  typePhrase() {
    const phrase = this.phrases[this.index];
    const chunks = this.tokens(phrase);
    let token = 0;
    const emit = () => {
      if (token >= chunks.length) {
        this.setAttribute("aria-label", phrase);
        this.schedule(this.hold, () => this.erasePhrase());
        return;
      }
      const chunk = chunks[token++];
      this.output.textContent += chunk;
      const punctuation = /^[.,!?;:，。！？；：、]$/.test(chunk);
      const whitespace = /^\s+$/.test(chunk);
      const delay = punctuation ? 210 : whitespace ? 42 : 34 + ((token * 13) % 39);
      this.schedule(delay, emit);
    };
    emit();
  }

  erasePhrase() {
    const chars = this.graphemes(this.output.textContent);
    if (!chars.length) {
      this.index = (this.index + 1) % this.phrases.length;
      this.schedule(260, () => this.typePhrase());
      return;
    }
    // Delete in uneven bursts rather than clearing the entire line at once.
    const count = Math.min(chars.length, 1 + (chars.length % 3));
    this.output.textContent = chars.slice(0, -count).join("");
    this.schedule(24 + (chars.length % 3) * 9, () => this.erasePhrase());
  }
}

if (!customElements.get("own-hero-rotator")) {
  customElements.define("own-hero-rotator", OwnHeroRotator);
}
