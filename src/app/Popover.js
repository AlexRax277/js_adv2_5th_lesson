export default class Popover {
  constructor() {
    this.parent = document.body;
    this.onShow = false;
    this.popEl = document.createElement('h3');
  }

  show(msg) {
    this.popEl.classList = 'popover';
    this.popEl.textContent = 'My Popover';
    this.parent.appendChild(this.popEl);
    const popText = document.createElement('div');
    popText.classList = 'popText';
    popText.textContent = msg;
    this.popEl.appendChild(popText);
    this.popEl.classList.add('popOn');
    this.onShow = true;
    return this.popEl;
  }

  cordDetecting() {
    const btn = document.querySelector('.btn');
    const { left, top } = btn.getBoundingClientRect();
    this.popEl.style.left = `${left + (btn.offsetWidth - this.popEl.offsetWidth) / 2}px`;
    this.popEl.style.bottom = `${top + btn.offsetHeight + 5}px`;
  }

  hide() {
    this.popEl.classList.remove('popOn');
    this.popEl.classList.add('popOff');
    this.onShow = false;
  }
}
