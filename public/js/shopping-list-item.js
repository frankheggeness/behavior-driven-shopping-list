'use strict';

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  unCheck() {
    this.isDone = false;
  }

  render() {
    return `<input type="checkbox" class="checkbox completed_${this.isDone}"><span>${this.name}</span> <span>${this.description}</span>`;
  }
}
