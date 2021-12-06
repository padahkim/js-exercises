import storage from './storage.js';

const tag = "[Store]";

class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
/* store가 관리하던 상태변수를 리엑트의 state가 관리하므로 store의 이런 데이터 필요x data를 담고있는 storage객체만 관리
    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
    */
  }

  search(keyword) {
    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }

  addHistory(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) {
      return;
    }

    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );
    if (hasHistory) this.removeHistory(keyword);

    const date = new Date();
    this.storage.historyData.push({ keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }
}

const store = new Store(storage)
export default store