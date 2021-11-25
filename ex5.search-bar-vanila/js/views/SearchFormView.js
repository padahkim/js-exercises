import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view"));
                                                            //여기 나오는 this들 다 lexical context
        this.inputElement = qs("[type=text]", this.element);//super에 의해 view에서 this.element=element에서 만들어진 element값을 부모가 가지고 있고 이걸 인자로보냄
        this.resetElement = qs("[type=reset]", this.element);//this.name과 같음 클래스내부에 resetElement를 저장//this.element는 저장된 #search-form-view

        this.showResetButton(false);
        this.bindEvent();
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvent() {
        on(this.element, "submit", event => this.handleSubmit(event));

        on(this.inputElement, "keyup", () => this.handleKeyUp());
        on(this.resetElement, "click", () => this.handleReset());
        // TODO reset element에서 발생하는 클릭이벤트를 바인딩
    }

    handleKeyUp() {
        const {value} = this.inputElement
        //console.log({value}); 키를 하나씩 이동할때마다 이벤트를 실시간 으로 받음
        this.showResetButton(value.length > 0);
        if (value.length <= 0){
            //this.showResetButton(value.length = 0);
            this.handleReset();
        }
        // TODO 검색어의 길이가 0이면 모든게 삭제된것
    }

    handleSubmit(event) {
        event.preventDefault();
        const {value} = this.inputElement;
        this.emit("@submit", {value});//상속한 View 클래스의 emit
        /*
        console.log(emit());
        console.log(this);
        console.log(this.emit());//this안쓸시 emit is not defined가 나옴. this= 
        */
    }

    handleReset() {
        //this.inputElement = "";
        //const {value} = this.inputElement;
        this.emit("@reset");//수신자 컨트롤러//커스텀 이벤트만 발행
        //this.showResetButton(false);
    }

    show(value = "") {
        this.inputElement.value = value;
        this.showResetButton(this.inputElement.value.length>0);

        super.show()
    }
}