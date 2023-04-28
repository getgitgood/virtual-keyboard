// helper functions //

export function createElement(elem, elemClass, str) {
  const newElement = document.createElement(elem);
  newElement.className = elemClass;
  if (str) {
    newElement.textContent = str;
  }
  return newElement;
}

export function buildRows() {
  const centralWrapper = document.querySelector('.keyboard');
  for (let i = 0; i < 5; i += 1) {
    const kbRow = createElement('div', 'keyboard__row row');
    centralWrapper.appendChild(kbRow);
  }
}
