// create base html layout //
let mainWrapper = document.createElement('div');
mainWrapper.className = 'main-wrapper';
document.querySelector('body').appendChild(mainWrapper);

mainWrapper = document.querySelector('.main-wrapper');

const title = document.createElement('p');
title.className = 'title';
title.textContent = 'RSS Virtual Keyboard';

const textArea = document.createElement('textarea');
textArea.className = 'body__text-area text-area';
textArea.cols = 120;
textArea.rows = 15;

// keyboard (kb) init //

let keyboard = document.createElement('div');
keyboard.className = ('body__keyboard keyboard');
keyboard.id = 'keyboard';

mainWrapper.append(keyboard);
mainWrapper.prepend(title);
mainWrapper.append(textArea);

keyboard = document.getElementById('keyboard');
