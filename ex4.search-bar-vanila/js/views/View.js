import { emit, on } from "../helpers.js";

const tag = "[View]";

export default class View {
  constructor(element) {
    if (!element) throw "no element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;//여기서의 this는 view 객체
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;//this 리턴 메소드 체이닝 가능
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
