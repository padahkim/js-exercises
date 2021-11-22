const ajax = new XMLHttpRequest();//XMLHttpRequest을 실행시켜 리턴값을 ajax변수(ajax객체의 참조변수를 저장)에 저장
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL ='https://api.hnpwa.com/v0/item/@id.json';
const container = document.getElementById('root');

function getData(url) {
  ajax.open('GET', url, false); //initializes a newly-created request, or re-initializes an existing one.
  ajax.send();//request를 보냅니다. 요청이 비동기인 경우(기본값), 이 메소드는 요청이 보내진 즉시 반환합니다.
  
  return JSON.parse(ajax.response); //ajax.response를 parse를써서 객체로 변환
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsLists = [];

  newsLists.push("<ul>")

  for (let i=0; i<10; i++) {
    newsLists.push(`
    <li>
      <a href="#${newsFeed[i].id}">
      ${newsFeed[i].title}(${newsFeed[i].comments_count})
      </a>
    </li>
  `);
  }

  newsLists.push("</ul>");

  container.innerHTML = newsLists.join("");
}

function newsDetail() {
  const id = location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace('@id',id));

  container.innerHTML=`
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">목록으로</a>
    </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange",router);

router();