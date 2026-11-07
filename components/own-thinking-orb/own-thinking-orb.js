/** <own-thinking-orb state="idle|thinking|active" label="..."></own-thinking-orb> */
class OwnThinkingOrb extends HTMLElement {
  static observedAttributes = ["state", "label"];
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.setAttribute("role", "img");
    this.innerHTML = '<span class="orb-core" aria-hidden="true"></span><span class="orb-ring" aria-hidden="true"></span><span class="orb-ring orb-ring--outer" aria-hidden="true"></span><span class="orb-label"></span>';
    this.sync();
  }
  attributeChangedCallback() { if (this.isConnected) this.sync(); }
  sync() {
    const state = ["idle", "thinking", "active"].includes(this.getAttribute("state")) ? this.getAttribute("state") : "idle";
    const label = this.getAttribute("label") || ({idle:"READY",thinking:"THINKING",active:"ACTIVE"}[state]);
    this.setAttribute("aria-label", label);
    const node = this.querySelector(".orb-label");
    if (node) node.textContent = label;
  }
  setState(state, label) {
    if (!["idle", "thinking", "active"].includes(state)) throw new TypeError("Unsupported orb state");
    this.setAttribute("state", state);
    if (label) this.setAttribute("label", label);
    else this.removeAttribute("label");
  }
}
if (!customElements.get("own-thinking-orb")) customElements.define("own-thinking-orb", OwnThinkingOrb);
