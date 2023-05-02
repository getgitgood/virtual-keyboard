import './index.scss';
import Keys from './js-components/keys-class';
import { createElement, buildRows } from './js-components/make-elements';
import {
  engRow0, engRow1, engRow2, engRow3, engRow4,
  rusRow0, rusRow1, rusRow2, rusRow3, rusRow4,
} from './js-components/keys-data';

import {
  catchPress, findVisible, removeClassFrom, toLowerCase,
  toUpperCase, removeCharacter, switchLanguage, addSpace,
  addTabulation, addClassTo, addValue, enableCaps, toCapsCase,
  toCapsCaseMouseDown, toCapsCaseMouseUp, addNewLine, checkStorage,
} from './js-components/keyboard';

// data sets

const keysDataEng = [
  engRow0,
  engRow1,
  engRow2,
  engRow3,
  engRow4,
];

const keysDataRus = [
  rusRow0,
  rusRow1,
  rusRow2,
  rusRow3,
  rusRow4,
];

// html init

const body = document.querySelector('body');
const centralWrapper = createElement('div', 'main-wrapper');
const title = createElement('p', 'title', 'RSS Virtual Keyboard');
const textArea = createElement('textarea', 'body__text-area text-area');
const hint = createElement('p', 'title hint', 'Created in Windows. To switch language - Shift + Alt');
textArea.cols = 120;
textArea.rows = 15;

const keyboard = createElement('div', 'body__keyboard keyboard');
keyboard.id = 'keyboard';

centralWrapper.appendChild(title);
centralWrapper.appendChild(textArea);
centralWrapper.appendChild(keyboard);
centralWrapper.appendChild(hint);
body.appendChild(centralWrapper);

buildRows();

// fill keyboard rows with values

const rows = document.querySelectorAll('.keyboard__row');

function fillRows(lang1, lang2, ...arr) {
  for (let i = 0; i < rows.length; i += 1) {
    const engArray = arr[0][i];
    const rusArray = arr[1][i];
    for (let j = 0; j < engArray.length; j += 1) {
      const keysEng = new Keys(engArray[j]);
      const keysRus = new Keys(rusArray[j]);
      keysEng.isDigit()
        .assignContainerClass()
        .assignContainer(lang1)
        .assignElements()
        .assignToDiv();
      keysRus.assignContainer(lang2)
        .assignElements();
      keysEng.div.appendChild(keysRus.assignedContainer);
      rows[i].appendChild(keysEng.div);
    }
  }
}

fillRows('rus hidden', 'eng', keysDataEng, keysDataRus);

// check localStorage

checkStorage();

// listen keydown and keyup events
const textarea = document.querySelector('.text-area');

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  const listenKey = catchPress(event);
  const currentValue = findVisible(listenKey);
  if (currentValue) {
    switchLanguage(event);
    toUpperCase(event);
    enableCaps(event);
    toCapsCase(event);
    addNewLine(event, textarea);
    addClassTo(listenKey, 'active');
    addValue(currentValue, textarea);
    addSpace(event, textArea);
    addTabulation(event, textArea);
    removeCharacter(event, textArea);
  }
});

window.addEventListener('keyup', (event) => {
  const listenKey = catchPress(event, document);
  toLowerCase(event);
  toCapsCase(event);
  removeClassFrom(listenKey, 'active');
});

rows.forEach((item) => item.addEventListener('click', (event) => {
  const currentValue = findVisible(event.target);
  addNewLine(currentValue, textArea);
  addValue(currentValue, textarea);
  addSpace(currentValue, textarea);
  addTabulation(currentValue, textArea);
  removeCharacter(currentValue, textArea);
  toCapsCase(event);
}));

const tab = document.querySelector('.CapsLock');
tab.addEventListener('mousedown', (event) => {
  toCapsCaseMouseDown(event, 'caps');
});

tab.addEventListener('mouseup', (event) => {
  toCapsCaseMouseUp(event, 'caseDown');
});

const shift = document.querySelector('.ShiftLeft');

shift.addEventListener('mousedown', (event) => {
  toCapsCaseMouseDown(event, 'caseUp');
});

shift.addEventListener('mouseup', (event) => {
  toCapsCaseMouseUp(event, 'caseDown');
});
