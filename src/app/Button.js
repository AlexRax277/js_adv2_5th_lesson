import Popover from './Popover.js';

export default class Button {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.data = [];
    this.popover = new Popover();
  }

  createButton() {
    const btn = document.createElement('button');
    btn.classList = 'btn';
    btn.textContent = this.name;
    this.parent.appendChild(btn);
    return btn;
  }

  addingPopover(msg) {
    const popEl = this.popover.show(msg);
    this.popover.cordDetecting();
    const id = performance.now();
    this.data.push({
      id,
      element: popEl,
    });
    return id;
  }

  removingPopover(id) {
    const p = this.popover;
    // eslint-disable-next-line no-unused-vars, no-promise-executor-return
    const hide = new Promise((resolve, reject) => resolve(p.hide()));
    const pop = this.data.find((el) => el.id === id);
    const result = () => {
      if (!this.popover.onShow) {
        pop.element.remove();
      }
    };
    hide.then(() => {
      setTimeout(() => {
        result();
      }, 2 * 1000);
    });

    this.data = this.data.filter((el) => el.id !== id);
  }
}
