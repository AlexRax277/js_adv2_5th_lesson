import Button from './Button.js';

export default function MainFoo() {
  const container = document.createElement('div');
  container.classList = 'container';
  document.body.appendChild(container);
  const btn = new Button('Push me', container);
  const button = btn.createButton();
  let currentId;

  button.addEventListener('click', () => {
    if (document.querySelector('.popOn') !== null) {
      btn.removingPopover(currentId);
    } else {
      currentId = btn.addingPopover('some text...');
    }
  });
}
