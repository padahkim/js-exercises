const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    this.store = store;

    this.searchFormView = searchFormView;

    // TODO
    //this.deleteViewEvents();
    this.subscribeViewEvents();
  }
/*
  deleteViewEvents() {
    this.searchFormView.on("@delete", (e) => this.search(e.detail.value));
    console.log(this.searchFormView.on)
  }
*/

  subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) =>
      this.search(event.detail.value)
      ).on("@reset", () => this.reset())

  }

  search(searchKeyWord) {
    console.log(tag, "search", searchKeyWord);
  }

  reset() {
    console.log(tag, "reset");
  }
}

