import { delegate, qs, qsAll } from "../helpers.js";
import View from "./View.js";

const tag = "[TabView]";
export const TabType = {
  KEYWORD: 'KEYWORD',
  HISTORY: 'HISTORY'
}

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HISTORY]: '최근 검색어'
}

export default class TabView extends View {
  constructor(){
    console.log(tag, "constructor");

    super(qs('#tab-view'))

    this.template = new Template();

    this.bindEvents();
    //this.emit("@tabClick")
    //TODO constructor에서 이벤트 바인딩 하는 작업 필요//li엘리먼트에서 click이벤트가 발생했을 때 뭔가 처리하도록
  }

  bindEvents() {
    delegate(this.element, "click", "li", event => this.handleClick(event));
  }

  handleClick(event) {
    console.log(tag, event.target);
    const value = event.target.dataset.tab
    this.emit('@change', {value} );
  }

  show(selectedTab) {
    this.element.innerHTML = this.template.getTabList();
    qsAll("li", this.element).forEach(li => {
      li.className = li.dataset.tab === selectedTab ? "active" : "";
    });

    super.show();
  }
}

class Template {
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)//Object를 넣으면 배열을 리턴
          .map((tabType) => ({tabType, tabLabel: TabLabel[tabType] }))
          .map(this._getTab)
          .join("")}
      </ul>
    `;
  }


_getTab({ tabType, tabLabel }) {
  return `
  <li data-tab="${tabType}">
    ${tabLabel}
  </li>
  `;
  }
}