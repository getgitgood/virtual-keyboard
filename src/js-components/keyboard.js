// defines the main keyboard logic

export function catchPress(event) {
  const keyCode = event.code;
  const currentPressed = document.querySelector(`.${keyCode}`);
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
      i = 0;
    } else {
      i += 1;
    }
  }
  return currentNode;
}
export function addValue(from, addto) {
  const value = from.textContent;
  const addTo = addto;
  if (value.length <= 2) {
    addTo.value += value;
  }
}

export function removeClassFrom(node, arg) {
  if (node && node.classList.contains(arg)) {
    node.classList.remove(arg);
  }
}

export function addClassTo(node, arg) {
  if (node && !(node.classList.contains(arg))) {
    node.classList.add(arg);
  }
}
function checkLanguage(event) {
  if (!catchPress(event)) {
    return null;
  }
  const { childNodes } = catchPress(event);
  let currentLanguage;
  childNodes.forEach((item) => {
    if (!item.classList.contains('hidden')) {
      currentLanguage = item;
    }
  });

  return currentLanguage.className;
}

function isShiftFired(event) {
  return event.getModifierState('Shift');
}

function isCapsFired(event) {
  return event.getModifierState('CapsLock');
}

export function toUpperCase(event) {
  const currentLanguage = checkLanguage(event);
  const letterCases = document.querySelectorAll(`.${currentLanguage} > span`);
  if (isShiftFired(event)) {
    letterCases.forEach((item) => {
      if (!item.classList.contains('caseUp')) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  }
  if (isCapsFired(event)) {
    letterCases.forEach((item) => {
      if (!item.classList.contains('caps')) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  }
}

export function toLowerCase(event) {
  const currentLanguage = checkLanguage(event);
  const letterCases = document.querySelectorAll(`.${currentLanguage} > span`);
  if (!isShiftFired(event) && !isCapsFired(event)) {
    letterCases.forEach((item) => {
      if (item.classList.contains('caseDown')) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  if (isCapsFired(event) && isShiftFired(event)) {
    letterCases.forEach((item) => {
      if (item.classList.contains('shiftCaps')) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
}

export function toCapsCase(event) {
  const currentLanguage = checkLanguage(event);
  const letterCases = document.querySelectorAll(`.${currentLanguage} > span`);
  if (isCapsFired(event) && isShiftFired(event)) {
    letterCases.forEach((item) => {
      if (item.classList.contains('shiftCaps')) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
  if (isCapsFired(event) && !isShiftFired(event)) {
    letterCases.forEach((item) => {
      if (item.classList.contains('caps')) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
}

export function toCapsCaseMouseDown(event, selector) {
  const currentLanguage = event.target.className;
  const letterCases = document.querySelectorAll(`.${currentLanguage} > span`);
  if (currentLanguage) {
    letterCases.forEach((item) => {
      if (item.classList.contains(selector)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
}

export function toCapsCaseMouseUp(event, selector) {
  const currentLanguage = event.target.className;
  const letterCases = document.querySelectorAll(`.${currentLanguage} > span`);
  if (currentLanguage) {
    letterCases.forEach((item) => {
      if (item.classList.contains(selector)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
}

function isBackspacePressed(event) {
  const eventCode = event.code;
  if (eventCode === 'Backspace' || eventCode === 'Delete') {
    return true;
  }
  return false;
}

export function removeCharacter(event, element) {
  const el = element;
  if (isBackspacePressed(event) || event.textContent === 'Backspace' || event.textContent === 'Del') {
    el.value = element.value.slice(0, -1);
  }
}

function isAltFired(event) {
  const evt = event;
  if (evt.altKey) {
    return true;
  }
  return false;
}

function isEnterFired(event) {
  const evt = event;
  if (evt.code === 'Enter' || evt.textContent === 'Enter') {
    return true;
  }
  return false;
}

export function addNewLine(event, element) {
  const el = element;
  if (isEnterFired(event)) {
    el.value += '\r\n';
  }
}
export function switchLanguage(event) {
  const currentLanguage = checkLanguage(event);
  const switchTo = currentLanguage === 'eng' ? 'rus' : 'eng';
  const currentLanguageNodes = document.querySelectorAll(`.${currentLanguage}`);
  const newLanguageNodes = document.querySelectorAll(`.${switchTo}`);
  if (isAltFired(event) && isShiftFired(event)) {
    currentLanguageNodes.forEach((item) => item.classList.add('hidden'));
    newLanguageNodes.forEach((item) => item.classList.remove('hidden'));
  }
}

function isSpaceFired(event) {
  const evt = event;
  if (evt.code === 'Space' || event.textContent === 'Space') {
    return true;
  }
  return false;
}

export function addSpace(event, element) {
  const el = element;
  if (isSpaceFired(event)) {
    el.value += ' ';
  }
}

function isTabFired(event) {
  const evt = event;
  if (evt.code === 'Tab') {
    return true;
  }
  return false;
}

export function addTabulation(event, element) {
  const el = element;
  if (isTabFired(event) || event.textContent === 'Tab') {
    el.value += '    ';
  }
}

export function enableCaps(event) {
  if (isCapsFired(event)) {
    toUpperCase(event);
  }
}
