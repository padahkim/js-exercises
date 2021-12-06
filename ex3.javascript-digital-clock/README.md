> 🚨과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.

# Digital Clock

주어진 Canola UI라는 모듈을 이용하여 Digital Clock을 구현하는 과제입니다.

> Canola UI는 여러분의 과제를 위해 간단하게 만들어 놓은 UI 라이브러리입니다.

▶︎ [Digital Clock](http://time-time.net/timer/digital-clock.php)

Digital Clock을 구현하는 것만큼이나 Canola UI의 내부 코드를 이해하도록 노력해보시는 것도 중요합니다.

- 반드시 아래 Setup과 Development 부분을 읽어보세요.
- 과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.
- 상세 요구 사항은 아래 TODO 파트를 참고하세요.

## Setup (사전 설치)

Install dependencies

```sh
$ npm install
```

## Development (작업 방법)

```sh
$ npm start
# Visit http://localhost:1234 from your browser (Chrome)
```

## TODO

### 주의 사항

- 기존 코드는 함부로 수정/삭제하지 마세요. 더 큰 문제를 발생시킬 수 있습니다.

### 요구 사항 1

- [ ] `app.js`부터 읽어보신 후, CanolaUI의 버그를 고쳐주세요.

### 요구 사항 2

- [ ] `app.js`에 주어진 `Clock` 컴포넌트를 재사용하여 `app.js` 하단에 Digital Clock을 추가해주세요.
- [ ] Digital Clock은 현재 시, 분, 초를 표기해주어야 합니다.
- [ ] Digital Clock의 시간은 매초마다 새롭게 갱신되어야 합니다.

### Advanced

- [ ] 아래와 같이 CanolaUI 컴포넌트의 "click" 이벤트 처리가 가능하도록 구현해주세요.

```js
const Clock = CanolaUI.create({
  events: {
    ".clock h3": function onTitleClick() {
      // ".clock h3" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click H3!");
    },
    ".clock p": function onTimeClick() {
      // ".clock p" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click P!");
    },
  },
  template: function () {
    return `
      <div class="clock" style="background-color: ${this.backgroundColor};">
        <h3>${this.title}</h3>
        <p>${this.time}</p>
      </div>
    `;
  },
});
```



과제의 흐름에 대해 간단하게 설명하는 자료를 추가해봅니다. (리뷰가 너무 단초로와서...ㅎㅎ)
일단 프로젝트의 가장 상위인 app.js 에서 출발해볼게요.
// in app.js
const Clock = CanolaUI.create({ ... });
Clock 변수에는 CanolaUI.create가 실행되면서 리턴된 값이 할당되어있습니다.
// in /Canola/index.js
const CanolaUI = {
  create(options) {
    ...
    return componentFactory(options.template);
  },
};
이를 확인하기 위해 CanolaUI를 확인해보면,
CanolaUI의 create method는 componentFactory의 리턴값을 다시 리턴합니다.
// in /Canola/Component.js
export default function componentFactory(generateTemplate) {
  function Component(options) { ... }

  Component.prototype.render = function () { ... } // 생성자함수의 prototype 객체에 render라는 method가 추가되었습니다.

  Component.prototype.destroy = function () { ... } // 생성자함수의 prototype 객체에 destroy라는 method가 추가되었습니다.

  return Component;
}
이를 확인하기 위해 componentFactory를 확인해보면,
생성자함수 Component를 리턴하고 있습니다. (생성자 함수는 보통 대문자로 시작합니다.)
돌고 돌았지만 간단히 정리해보면, Clock변수에는 생성자함수 Component가 담겨있다는 것을 알 수 있습니다.\


Clock변수 -> CanolaUI.create 리턴값 -> componentFactory 리턴값 -> 생성자함수 Component

const myClock = new Clock({ ... });

myClock.render();
이제 myClock 변수을 살펴보면,
myClock 변수에는 Clock이라는 생성자함수를 new와 함께 호출한 instance가 할당됩니다.
myClock이라는 instance 안에는 render라는 method가 없지만
myClock.render를 실행할 수 있는 이유는
프로토타입 체인이 동작하여 생성자함수 Component의 prototype 객체에 추가되어있는 render mehod를 사용할 수 있기 때문입니다.
render method에서는 this.$el처럼 this가 등장합니다.
여기서 this는 render가 실행되는 순간 결정되는데,
myClock.render(), 즉 dot notation 방식으로 시행되었으므로, dot(.) 앞의 myClock이 this 입니다.
모든 것을 설명하기엔 복잡해서.. 
기본적인 흐름이라고 생각되는 부분만 말씀드렸습니다.
과제를 이해함에 있어 도움이 되었으면 좋겠습니다.. (더 혼란을 준건 아닐까 걱정되네요.. 😂)












이쪽 부분 코드는 깔끔하게 잘 주셔서 좋습니다.
제 생각에는 여기서 좀 더 개선을 해보자면,
시간 업데이트 하는 부분을 Component의 프로토타입의 메소드로
넣는 것도 괜찮을 것 같아요.
  Component.prototype.updateTime = function (getTimeStamp) {
    setInterval(() => {
      this.time = getTimeStamp();
      this.render();
    }, 1000);
  }
Component.prototype.render 같은 경우는 this를 리턴을 하는데
이게 바로 시계(Component) 객체를 리턴을 해줍니다.
따라서 메소드 체이닝을 이용해서 다시 updateTime을 실행해주고 여기로
인자로 getTimeStamp 시간을 구해주는 함수를 넣어주면 깔끔하게
구현을 할 수 있을 것 같네요.

   digitalClock.render().updateTime(getTimeStamp);


메소드체이닝
https://www.tutorialspoint.com/method-chaining-in-javascript