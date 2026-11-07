/** <own-hero-rotator interval="5200"><span>...</span>...</own-hero-rotator> */
class OwnHeroRotator extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.items = [...this.querySelectorAll("[data-phrase]")];
    if (this.items.length < 2) return;
    this.index = Math.max(0, this.items.findIndex((item) => item.classList.contains("is-current")));
    if (this.index < 0) this.index = 0;
    this.items.forEach((item, i) => {
      item.classList.toggle("is-current", i === this.index);
      item.setAttribute("aria-hidden", String(i !== this.index));
    });
    this.interval = Math.max(3000, Number(this.getAttribute("interval")) || 5200);
    this.paused = false;
    this.onVisibility = () => this.syncTimer();
    this.onFocus = () => { this.paused = true; this.syncTimer(); };
    this.onBlur = (event) => { if (!this.contains(event.relatedTarget)) { this.paused = false; this.syncTimer(); } };
    this.onPointerEnter = () => { this.paused = true; this.syncTimer(); };
    this.onPointerLeave = () => { this.paused = false; this.syncTimer(); };
    this.addEventListener("focusin", this.onFocus);
    this.addEventListener("focusout", this.onBlur);
    this.addEventListener("pointerenter", this.onPointerEnter);
    this.addEventListener("pointerleave", this.onPointerLeave);
    document.addEventListener("visibilitychange", this.onVisibility);
    this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.onMotion = () => this.syncTimer();
    this.motionQuery.addEventListener?.("change", this.onMotion);
    this.syncTimer();
  }
  disconnectedCallback() {
    this.stopTimer();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.motionQuery?.removeEventListener?.("change", this.onMotion);
    this.removeEventListener("focusin", this.onFocus);
    this.removeEventListener("focusout", this.onBlur);
    this.removeEventListener("pointerenter", this.onPointerEnter);
    this.removeEventListener("pointerleave", this.onPointerLeave);
  }
  stopTimer() { if (this.timer) window.clearInterval(this.timer); this.timer = null; }
  syncTimer() {
    this.stopTimer();
    if (!this.isConnected || this.paused || document.hidden || this.motionQuery?.matches) return;
    this.timer = window.setInterval(() => this.show((this.index + 1) % this.items.length), this.interval);
  }
  show(next) {
    this.items[this.index].classList.remove("is-current");
    this.items[this.index].setAttribute("aria-hidden", "true");
    this.index = next;
    this.items[this.index].classList.add("is-current");
    this.items[this.index].setAttribute("aria-hidden", "false");
  }
}
if (!customElements.get("own-hero-rotator")) customElements.define("own-hero-rotator", OwnHeroRotator);
