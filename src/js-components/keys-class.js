export default class Key {
  constructor(en, ru, classAlias) {
    this.isDigit = false;
    this.en = en;
    this.ru = ru;
    this.classAlias = classAlias;
  }

  isDigit() {
    const value = this.en;
    if (Number.isInteger(value)) {
      this.isDigit = true;
    }
  }

  setClass() {
    if (this.classAlias && !this.isDigit) {
      return this.classAlias;
    }
    if (this.isDigit) {
      return `digit${this.en}`;
    }
    return `Key${this.en}`;
  }
}
