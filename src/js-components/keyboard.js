// defines the main keyboard logic

export function catchPress(event, node) {
  const keyCode = event.code;
  const currentPressed = node.querySelector(`.${keyCode}`);
  if (currentPressed) {
    return currentPressed;
  }
  return null;
}

export function findVisible(node) {
  if (!node) {
    return null;
  }
  let nodeChildren = node.childNodes;
  let currentNode = '';
  let i = 0;
  while (nodeChildren.length > 1) {
    if (!(nodeChildren[i].classList.contains('hidden'))) {
      currentNode = nodeChildren[i];
      nodeChildren = nodeChildren[i].childNodes;
    } else {
      i += 1;
    }
  }
  return currentNode;
}
export function extractValue(from) {
  const value = from.textContent;
  return value;
}

export function removeClassFrom(node, arg) {
  if (node && node.classList.contains(arg)) {
    node.classList.remove(arg);
  }
}

// export function changeLanguage() {

// }