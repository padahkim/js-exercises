> ๐จ๊ณผ์ ๋ฅผ ์์ํ๋ ๋ฐฉ๋ฒ๊ณผ ์ ์ถํ๋ ๋ฐฉ๋ฒ์ ๋ธ์์ ํ๋  ๊ฐ์ด๋ ํ์ด์ง์์ ์ฐพ์ ์ ์์ต๋๋ค.

# Digital Clock

์ฃผ์ด์ง Canola UI๋ผ๋ ๋ชจ๋์ ์ด์ฉํ์ฌ Digital Clock์ ๊ตฌํํ๋ ๊ณผ์ ์๋๋ค.

> Canola UI๋ ์ฌ๋ฌ๋ถ์ ๊ณผ์ ๋ฅผ ์ํด ๊ฐ๋จํ๊ฒ ๋ง๋ค์ด ๋์ UI ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

โถ๏ธ [Digital Clock](http://time-time.net/timer/digital-clock.php)

Digital Clock์ ๊ตฌํํ๋ ๊ฒ๋งํผ์ด๋ Canola UI์ ๋ด๋ถ ์ฝ๋๋ฅผ ์ดํดํ๋๋ก ๋ธ๋ ฅํด๋ณด์๋ ๊ฒ๋ ์ค์ํฉ๋๋ค.

- ๋ฐ๋์ ์๋ Setup๊ณผ Development ๋ถ๋ถ์ ์ฝ์ด๋ณด์ธ์.
- ๊ณผ์ ๋ฅผ ์์ํ๋ ๋ฐฉ๋ฒ๊ณผ ์ ์ถํ๋ ๋ฐฉ๋ฒ์ ๋ธ์์ ํ๋  ๊ฐ์ด๋ ํ์ด์ง์์ ์ฐพ์ ์ ์์ต๋๋ค.
- ์์ธ ์๊ตฌ ์ฌํญ์ ์๋ TODO ํํธ๋ฅผ ์ฐธ๊ณ ํ์ธ์.

## Setup (์ฌ์  ์ค์น)

Install dependencies

```sh
$ npm install
```

## Development (์์ ๋ฐฉ๋ฒ)

```sh
$ npm start
# Visit http://localhost:1234 from your browser (Chrome)
```

## TODO

### ์ฃผ์ ์ฌํญ

- ๊ธฐ์กด ์ฝ๋๋ ํจ๋ถ๋ก ์์ /์ญ์ ํ์ง ๋ง์ธ์. ๋ ํฐ ๋ฌธ์ ๋ฅผ ๋ฐ์์ํฌ ์ ์์ต๋๋ค.

### ์๊ตฌ ์ฌํญ 1

- [ ] `app.js`๋ถํฐ ์ฝ์ด๋ณด์  ํ, CanolaUI์ ๋ฒ๊ทธ๋ฅผ ๊ณ ์ณ์ฃผ์ธ์.

### ์๊ตฌ ์ฌํญ 2

- [ ] `app.js`์ ์ฃผ์ด์ง `Clock` ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฌ์ฉํ์ฌ `app.js` ํ๋จ์ Digital Clock์ ์ถ๊ฐํด์ฃผ์ธ์.
- [ ] Digital Clock์ ํ์ฌ ์, ๋ถ, ์ด๋ฅผ ํ๊ธฐํด์ฃผ์ด์ผ ํฉ๋๋ค.
- [ ] Digital Clock์ ์๊ฐ์ ๋งค์ด๋ง๋ค ์๋กญ๊ฒ ๊ฐฑ์ ๋์ด์ผ ํฉ๋๋ค.

### Advanced

- [ ] ์๋์ ๊ฐ์ด CanolaUI ์ปดํฌ๋ํธ์ "click" ์ด๋ฒคํธ ์ฒ๋ฆฌ๊ฐ ๊ฐ๋ฅํ๋๋ก ๊ตฌํํด์ฃผ์ธ์.

```js
const Clock = CanolaUI.create({
  events: {
    ".clock h3": function onTitleClick() {
      // ".clock h3" ์ ํ์์ ํด๋นํ๋ ์์๋ฅผ ํด๋ฆญํ์ ๊ฒฝ์ฐ, ์คํ๋ฉ๋๋ค.
      console.log("Click H3!");
    },
    ".clock p": function onTimeClick() {
      // ".clock p" ์ ํ์์ ํด๋นํ๋ ์์๋ฅผ ํด๋ฆญํ์ ๊ฒฝ์ฐ, ์คํ๋ฉ๋๋ค.
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



๊ณผ์ ์ ํ๋ฆ์ ๋ํด ๊ฐ๋จํ๊ฒ ์ค๋ชํ๋ ์๋ฃ๋ฅผ ์ถ๊ฐํด๋ด๋๋ค. (๋ฆฌ๋ทฐ๊ฐ ๋๋ฌด ๋จ์ด๋ก์์...ใใ)
์ผ๋จ ํ๋ก์ ํธ์ ๊ฐ์ฅ ์์์ธ app.js ์์ ์ถ๋ฐํด๋ณผ๊ฒ์.
// in app.js
const Clock = CanolaUI.create({ ... });
Clock ๋ณ์์๋ CanolaUI.create๊ฐ ์คํ๋๋ฉด์ ๋ฆฌํด๋ ๊ฐ์ด ํ ๋น๋์ด์์ต๋๋ค.
// in /Canola/index.js
const CanolaUI = {
  create(options) {
    ...
    return componentFactory(options.template);
  },
};
์ด๋ฅผ ํ์ธํ๊ธฐ ์ํด CanolaUI๋ฅผ ํ์ธํด๋ณด๋ฉด,
CanolaUI์ create method๋ componentFactory์ ๋ฆฌํด๊ฐ์ ๋ค์ ๋ฆฌํดํฉ๋๋ค.
// in /Canola/Component.js
export default function componentFactory(generateTemplate) {
  function Component(options) { ... }

  Component.prototype.render = function () { ... } // ์์ฑ์ํจ์์ prototype ๊ฐ์ฒด์ render๋ผ๋ method๊ฐ ์ถ๊ฐ๋์์ต๋๋ค.

  Component.prototype.destroy = function () { ... } // ์์ฑ์ํจ์์ prototype ๊ฐ์ฒด์ destroy๋ผ๋ method๊ฐ ์ถ๊ฐ๋์์ต๋๋ค.

  return Component;
}
์ด๋ฅผ ํ์ธํ๊ธฐ ์ํด componentFactory๋ฅผ ํ์ธํด๋ณด๋ฉด,
์์ฑ์ํจ์ Component๋ฅผ ๋ฆฌํดํ๊ณ  ์์ต๋๋ค. (์์ฑ์ ํจ์๋ ๋ณดํต ๋๋ฌธ์๋ก ์์ํฉ๋๋ค.)
๋๊ณ  ๋์์ง๋ง ๊ฐ๋จํ ์ ๋ฆฌํด๋ณด๋ฉด, Clock๋ณ์์๋ ์์ฑ์ํจ์ Component๊ฐ ๋ด๊ฒจ์๋ค๋ ๊ฒ์ ์ ์ ์์ต๋๋ค.\


Clock๋ณ์ -> CanolaUI.create ๋ฆฌํด๊ฐ -> componentFactory ๋ฆฌํด๊ฐ -> ์์ฑ์ํจ์ Component

const myClock = new Clock({ ... });

myClock.render();
์ด์  myClock ๋ณ์์ ์ดํด๋ณด๋ฉด,
myClock ๋ณ์์๋ Clock์ด๋ผ๋ ์์ฑ์ํจ์๋ฅผ new์ ํจ๊ป ํธ์ถํ instance๊ฐ ํ ๋น๋ฉ๋๋ค.
myClock์ด๋ผ๋ instance ์์๋ render๋ผ๋ method๊ฐ ์์ง๋ง
myClock.render๋ฅผ ์คํํ  ์ ์๋ ์ด์ ๋
ํ๋กํ ํ์ ์ฒด์ธ์ด ๋์ํ์ฌ ์์ฑ์ํจ์ Component์ prototype ๊ฐ์ฒด์ ์ถ๊ฐ๋์ด์๋ render mehod๋ฅผ ์ฌ์ฉํ  ์ ์๊ธฐ ๋๋ฌธ์๋๋ค.
render method์์๋ this.$el์ฒ๋ผ this๊ฐ ๋ฑ์ฅํฉ๋๋ค.
์ฌ๊ธฐ์ this๋ render๊ฐ ์คํ๋๋ ์๊ฐ ๊ฒฐ์ ๋๋๋ฐ,
myClock.render(), ์ฆ dot notation ๋ฐฉ์์ผ๋ก ์ํ๋์์ผ๋ฏ๋ก, dot(.) ์์ myClock์ด this ์๋๋ค.
๋ชจ๋  ๊ฒ์ ์ค๋ชํ๊ธฐ์ ๋ณต์กํด์.. 
๊ธฐ๋ณธ์ ์ธ ํ๋ฆ์ด๋ผ๊ณ  ์๊ฐ๋๋ ๋ถ๋ถ๋ง ๋ง์๋๋ ธ์ต๋๋ค.
๊ณผ์ ๋ฅผ ์ดํดํจ์ ์์ด ๋์์ด ๋์์ผ๋ฉด ์ข๊ฒ ์ต๋๋ค.. (๋ ํผ๋์ ์ค๊ฑด ์๋๊น ๊ฑฑ์ ๋๋ค์.. ๐)












์ด์ชฝ ๋ถ๋ถ ์ฝ๋๋ ๊น๋ํ๊ฒ ์ ์ฃผ์์ ์ข์ต๋๋ค.
์  ์๊ฐ์๋ ์ฌ๊ธฐ์ ์ข ๋ ๊ฐ์ ์ ํด๋ณด์๋ฉด,
์๊ฐ ์๋ฐ์ดํธ ํ๋ ๋ถ๋ถ์ Component์ ํ๋กํ ํ์์ ๋ฉ์๋๋ก
๋ฃ๋ ๊ฒ๋ ๊ด์ฐฎ์ ๊ฒ ๊ฐ์์.
  Component.prototype.updateTime = function (getTimeStamp) {
    setInterval(() => {
      this.time = getTimeStamp();
      this.render();
    }, 1000);
  }
Component.prototype.render ๊ฐ์ ๊ฒฝ์ฐ๋ this๋ฅผ ๋ฆฌํด์ ํ๋๋ฐ
์ด๊ฒ ๋ฐ๋ก ์๊ณ(Component) ๊ฐ์ฒด๋ฅผ ๋ฆฌํด์ ํด์ค๋๋ค.
๋ฐ๋ผ์ ๋ฉ์๋ ์ฒด์ด๋์ ์ด์ฉํด์ ๋ค์ updateTime์ ์คํํด์ฃผ๊ณ  ์ฌ๊ธฐ๋ก
์ธ์๋ก getTimeStamp ์๊ฐ์ ๊ตฌํด์ฃผ๋ ํจ์๋ฅผ ๋ฃ์ด์ฃผ๋ฉด ๊น๋ํ๊ฒ
๊ตฌํ์ ํ  ์ ์์ ๊ฒ ๊ฐ๋ค์.

   digitalClock.render().updateTime(getTimeStamp);


๋ฉ์๋์ฒด์ด๋
https://www.tutorialspoint.com/method-chaining-in-javascript