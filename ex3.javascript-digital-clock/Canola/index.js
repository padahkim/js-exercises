/*
 *
 * ๐ผCanola์ ์ธ๊ณ์ ์ค์  ๊ฒ์ ํ์ํฉ๋๋ค.
 * ์ด ๊ณณ์ Canola์ Root Module์ผ๋ก์ Canola์ create ๋ฉ์๋๋ฅผ ๋ธ์ถ์ํค๊ณ  ์์ต๋๋ค.
 *
 * > Canola๋ ์ ์ด๋ฆ์ด Canola์ผ๊น์?
 * Ken: ๋จ์ง ์์ ์ด๋ฆ์ ์ํ์ ๋ฟ์๋๋ค.. ์ด๋ฆ ์์์ง ์๋์?
 *
 * > ์ด๋ ๊ณณ์ ๋จผ์  ๋ณด๋ฉด ์ข์๊น์?
 * Ken: ์๋์ create ๋ฉ์๋๋ฅผ ์ดํด๋ณด์ธ์.
 *
 */
import componentFactory from "./Component";
import CanolaError from "./CanolaError";

function validateOptions({ template }) {
  //console.log({template})  console.log(template)์ด๊ฑฐ์ ์ฐจ์ด์ ์ด ์ ๋ํ๋๋๊ฐ{template}์ด๊ฑธ๋ก ์ธ์๋ฅผ ๋ฐ๋๊ฑด ๋ฌด์จ ์๋ฆฌ์ธ๊ฐ
  if (!template) {
    throw new CanolaError("'template'์ ํ์ ์ต์์๋๋ค.");
  }

  if (typeof template !== "function") {
    throw new CanolaError(
      "'template' ์ต์์ ํด๋น ์ปดํฌ๋ํธ์ HTML ๋งํฌ์์ ๋ฌธ์์ด๋ก ๋ฐํํ๋ ํจ์์ฌ์ผ ํฉ๋๋ค."
    );
  }
}

const CanolaUI = {
  /*
   * ๐๐ป create ๋ฉ์๋์๋๋ค.
   * CanolaError์ ๋ํด์ ์ดํด๋ณด์  ํ, componentFactory๋ก ์ด๋ํ์ธ์.
   */
  create(options) {
    validateOptions(options);
    //console.log(options) ์ด๋์์ options.template์ ์ ํํ ์ฐจ์ด์ ? ์ด๋์์ ๊ฐ์ฒด ์์ฒด
    //console.log(options.template) ์ด๋์์ ๊ฐ์ฒด์์ ๋ฉ์๋
    //console.log(options.template()) ์ด๋์์ ๊ฐ์ฒด ์์ ๋งค์๋ ์คํ๊ฐ(๋ฆฌํด๊ฐ) ๊ฒฐ๊ณผ
    return componentFactory(options.template);
  },
};


export default CanolaUI;
