export class Subject {
  constructor() {
    this._observers = new Set();
  }

  subscribe(observer) {
    this._observers.add(observer);
  }

  unsubscribe(observer) {
    this._observers.delete(observer);
  }

  notify(data) {
    this._observers.forEach((observer) => observer(this.data));
  }
}
