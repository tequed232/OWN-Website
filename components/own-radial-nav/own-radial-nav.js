class OwnRadialNav extends HTMLElement {
  static get observedAttributes() { return ["items", "paused"]; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._raf = 0;
    this._visible = true;
    this._pointer = { x: 0, y: 0 };
    this._reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    this._items = [];
    this._render();
    this._onVisibility = () => this._sync();
    this._onMotion = () => this._sync();
    this._onPointer = (event) => {
      const rect = this.getBoundingClientRect();
      this._pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      this._pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
  }

  connectedCallback() {
    document.addEventListener("visibilitychange", this._onVisibility);
    this.addEventListener("pointermove", this._onPointer, { passive: true });
    this._observer = new IntersectionObserver(([entry]) => {
      this._visible = entry.isIntersecting;
      this._sync();
    }, { threshold: 0.05 });
    this._observer.observe(this);
    this._reduced.addEventListener?.("change", this._onMotion);
    this._readItems();
    this._sync();
  }

  disconnectedCallback() {
    this._stop();
    document.removeEventListener("visibilitychange", this._onVisibility);
    this.removeEventListener("pointermove", this._onPointer);
    this._observer?.disconnect();
    this._reduced.removeEventListener?.("change", this._onMotion);
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this._readItems();
      this._sync();
    }
  }

  set items(value) { this.setAttribute("items", JSON.stringify(value)); }
  get items() { return this._items; }

  _validHref(href) {
    return typeof href === "string" &&
      !href.startsWith("//") &&
      /^(https?:\/\/|\/|#|\.\.?\/|mailto:)/i.test(href) &&
      !/^javascript:/i.test(href);
  }

  _readItems() {
    const fallback = [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "GitHub", href: "https://github.com/tequed232" },
      { label: "Social", href: "#social" },
      { label: "Writing", href: "#writing" },
      { label: "Contact", href: "#contact" }
    ];
    try {
      const parsed = this.hasAttribute("items") ? JSON.parse(this.getAttribute("items")) : fallback;
      this._items = Array.isArray(parsed)
        ? parsed.filter((item) => item && typeof item.label === "string" && this._validHref(item.href)).slice(0, 10)
        : fallback;
    } catch { this._items = fallback; }
    if (!this._items.length) this._items = fallback;

    const group = this.shadowRoot.querySelector(".endpoints");
    group.replaceChildren();
    this._items.forEach((item, index) => {
      const link = document.createElementNS("http://www.w3.org/2000/svg", "a");
      link.setAttribute("class", "endpoint");
      link.setAttribute("href", item.href);
      link.setAttribute("aria-label", item.label);
      link.dataset.index = String(index);
      if (/^https?:\/\//i.test(item.href)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = item.label;
      const hit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      hit.setAttribute("class", "hit");
      hit.setAttribute("r", "13");
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "dot");
      dot.setAttribute("r", "4.5");
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("class", "label");
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("y", "-15");
      label.textContent = item.label;
      link.append(title, hit, dot, label);
      group.append(link);
    });
  }

  _render() {
    this.shadowRoot.innerHTML = '<style>' +
      ':host{display:block;width:min(100%,34rem);aspect-ratio:1;color:var(--own-radial-ink,#24231f);contain:content}' +
      'svg{width:100%;height:100%;overflow:visible}.rays path{fill:var(--own-radial-fill,#d97757);opacity:.88}' +
      '.rays path:nth-child(3n){opacity:.62}.core{fill:var(--own-radial-core,#24231f)}' +
      '.ring{fill:none;stroke:currentColor;stroke-width:1;opacity:.24}' +
      '.endpoint{cursor:pointer;outline:none}.hit{fill:transparent}.dot{fill:var(--own-radial-node,#24231f);stroke:var(--own-radial-surface,#faf9f5);stroke-width:2.5;transition:r 180ms ease,fill 180ms ease}' +
      '.label{fill:currentColor;font:500 9px system-ui,sans-serif;opacity:0;pointer-events:none;transition:opacity 180ms ease}' +
      '.endpoint:hover .dot,.endpoint:focus-visible .dot{r:7;fill:var(--own-radial-accent,#d97757)}' +
      '.endpoint:hover .label,.endpoint:focus-visible .label{opacity:1}' +
      '.endpoint:focus-visible .hit{stroke:var(--own-radial-accent,#d97757);stroke-width:1.5}' +
      '@media(prefers-reduced-motion:reduce){.dot,.label{transition:none}}' +
      '</style><svg viewBox="0 0 360 360" role="group" aria-label="Radial site navigation">' +
      '<g class="rays"></g><circle class="ring" cx="180" cy="180" r="16"></circle>' +
      '<circle class="core" cx="180" cy="180" r="5"></circle><g class="endpoints"></g></svg>';
    const rays = this.shadowRoot.querySelector(".rays");
    for (let i = 0; i < 10; i++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      rays.append(path);
    }
  }

  _shape(index, time) {
    const angle = Math.PI * 2 * index / 10 + time * 0.000045;
    const phase = time * 0.00042 + index * 1.71;
    const pointer = (this._pointer.x * Math.cos(angle) + this._pointer.y * Math.sin(angle)) * 5;
    const radius = 116 + Math.sin(phase) * 13 + Math.cos(phase * 0.63) * 8 + pointer;
    const width = 7 + (Math.sin(phase * 0.8 + 1) + 1) * 2.2;
    const ux = Math.cos(angle), uy = Math.sin(angle), px = -uy, py = ux;
    const cx = 180, cy = 180, tx = cx + ux * radius, ty = cy + uy * radius;
    const a = [cx + px * width * .35, cy + py * width * .35];
    const b = [cx - px * width * .35, cy - py * width * .35];
    const bend = Math.sin(phase + .7) * 12;
    const c1 = [cx + ux * radius * .34 + px * (width + bend), cy + uy * radius * .34 + py * (width + bend)];
    const c2 = [cx + ux * radius * .78 + px * width * .48, cy + uy * radius * .78 + py * width * .48];
    const c3 = [cx + ux * radius * .78 - px * width * .48, cy + uy * radius * .78 - py * width * .48];
    const c4 = [cx + ux * radius * .34 - px * (width - bend), cy + uy * radius * .34 - py * (width - bend)];
    const d = "M " + a.join(" ") + " C " + c1.join(" ") + ", " + c2.join(" ") + ", " + tx + " " + ty +
      " C " + c3.join(" ") + ", " + c4.join(" ") + ", " + b.join(" ") +
      " Q " + (cx - ux * 5) + " " + (cy - uy * 5) + ", " + a.join(" ") + " Z";
    return { d, x: tx, y: ty };
  }

  _tick = (time) => {
    this.shadowRoot.querySelectorAll(".rays path").forEach((path, i) => {
      path.setAttribute("d", this._shape(i, time - this._started).d);
    });
    this.shadowRoot.querySelectorAll(".endpoint").forEach((link) => {
      const rayIndex = Math.round(Number(link.dataset.index) * 10 / this._items.length);
      const point = this._shape(rayIndex, time - this._started);
      link.setAttribute("transform", "translate(" + point.x + " " + point.y + ")");
    });
    this._raf = requestAnimationFrame(this._tick);
  };

  _drawStill() {
    this.shadowRoot.querySelectorAll(".rays path").forEach((path, i) => path.setAttribute("d", this._shape(i, 0).d));
    this.shadowRoot.querySelectorAll(".endpoint").forEach((link) => {
      const rayIndex = Math.round(Number(link.dataset.index) * 10 / this._items.length);
      const point = this._shape(rayIndex, 0);
      link.setAttribute("transform", "translate(" + point.x + " " + point.y + ")");
    });
  }

  _sync() {
    const run = this.isConnected && this._visible && !document.hidden &&
      !this.hasAttribute("paused") && !this._reduced.matches;
    if (run && !this._raf) {
      this._started = performance.now();
      this._raf = requestAnimationFrame(this._tick);
    } else if (!run) {
      this._stop();
      this._drawStill();
    }
  }

  _stop() {
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
  }
}

if (!customElements.get("own-radial-nav")) customElements.define("own-radial-nav", OwnRadialNav);
