export function qs(selector, scope = document) {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";

  return Array.from(scope.querySelectorAll(selector));
}

export function on(target, eventName, handler) {//target에서 이벤트 발행, 발생시 handler함수 호출
  target.addEventListener(eventName, handler);
}

export function delegate(target, eventName, selector, handler) {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);//타겟 엘리먼트에서 셀릭트로 모든엘리먼트를 찾고,

    for (const potentialElement of potentialElements) {//순회
      if (potentialElement === event.target) {//후보들중 = 이벤트를 발생시킨엘레먼트가 있으면
        return handler.call(event.target, event);//핸들러 함수를 호출
      }
    }
  };

  on(target, eventName, emitEvent); //이벤트 핸들러를 emit으로 랩핑함
}

export function emit(target, eventName, detail) {//
  const event = new CustomEvent(eventName, { detail });//커스텀이벤트생성
  target.dispatchEvent(event);//타겟 엘리먼트가 이용 할 수 있도록 발행
}

export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}

export function createPastDate(date = 1, now = new Date()) {
  if (date < 1) throw "date는 1 이상입니다";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
}

export function createNextId(list = []) {
  return Math.max(...list.map((item) => item.id)) + 1;
}
