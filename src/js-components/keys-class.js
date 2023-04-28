export default class Keys {
  constructor(value) {
    this.digit = false;
    this.div = document.createElement('div');
    [this.caseDown, this.caseUp, this.caps, this.shiftCaps] = value;
    this.elementsClasses = Object.keys(this).slice(2);
    this.elementsValues = Object.values(this).slice(2);
    this.assignedContainer = '';
  }

  isDigit() {
    if (Number.isInteger(this.caseDown) || parseInt(this.caseDown, 10)) {
      this.digit = true;
    }
    return this;
  }

  assignContainerClass() {
    const allias = {
      '`': 'Backquote',
      '-': 'Minus',
      '+': 'Plus',
      '=': 'Equal',
      '[': 'BracketLeft',
      ']': 'BracketRight',
      '\\': 'Backslash',
      ';': 'Semicolon',
      '\'': 'Quote',
      ',': 'Comma',
      '.': 'Period',
      '/': 'Slash',
    };

    this.div.className = `keyboard--key key Key${this.caseDown.toUpperCase()}`;
    if (this.caseDown.length > 1) {
      this.div.className = `keyboard--key key ${this.caseDown}`;
    }
    if (this.digit) {
      this.div.className = `keyboard--key key Digit${this.caseDown}`;
    }
    if (Object.hasOwn(allias, this.elementsValues[0])) {
      this.div.className = `keyboard--key key ${allias[this.elementsValues[0]]}`;
    }
    return this;
  }

  assignContainer(lang, extraClasses) {
    const outterSpan = document.createElement('span');
    outterSpan.className = lang;
    if (extraClasses) {
      outterSpan.classList.add(extraClasses);
    }
    this.assignedContainer = outterSpan;
    return this;
  }

  assignElements() {
    for (let i = 0; i < this.elementsClasses.length; i += 1) {
      const span = document.createElement('span');
      span.className = this.elementsClasses[i];
      span.textContent = this.elementsValues[i];
      if (this.elementsClasses[i] !== 'caseDown') {
        span.classList.add('hidden');
      }
      try {
        this.assignedContainer.appendChild(span);
      } catch (e) {
        throw new Error('container not assign!');
      }
    }
    return this;
  }

  assignToDiv() {
    this.div.appendChild(this.assignedContainer);
    return this;
  }
}
