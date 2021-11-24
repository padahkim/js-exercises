const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView, searchResultView, tabView}) {
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    // TODO
    //this.deleteViewEvents();
    this.subscribeViewEvents();
    this.render();
  }
/*
  deleteViewEvents() {
    this.searchFormView.on("@delete", (e) => this.search(e.detail.value));
    console.log(this.searchFormView.on)
  }
*/

  subscribeViewEvents() {
    this.searchFormView
    .on("@submit", (event) => this.search(event.detail.value))
    .on("@reset", () => this.reset())
    
    //TODO
    this.tabView.on('@change', event => this.changeTab(event.detail.value))
  }

  search(searchKeyword) {
    console.log(tag, "search", searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  changeTab(tab) {
    console.log(tag, "changeTab", tab);
    this.store.selectedTab = tab;
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);
    this.searchResultView.hide();
  }  
    renderSearchResult(){
      this.tabView.show();
      this.searchResultView.hide();
    }
}

