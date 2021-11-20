const container = document.getElementById('root');
const ajax = new XMLHttpRequest();//XMLHttpRequest을 실행시켜 리턴값을 ajax변수(ajax객체의 참조변수를 저장)에 저장
const content = document.createElement("div");
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL ='https://api.hnpwa.com/v0/item/@id.json';

function getData(url){
  ajax.open('GET', url, false); //initializes a newly-created request, or re-initializes an existing one.요청을 초기화하는 ajax객체의 메서드. 비동기 처리할대는 false넣으면 안됌
  ajax.send();//데이터 가져오는 ajax객체의 메서드//request를 보냅니다. 요청이 비동기인 경우(기본값), 이 메소드는 요청이 보내진 즉시 반환합니다.

  return JSON.parse(ajax.response); //데이터가 들어온곳 ajax.response를 parse를써서 객체로 변환
}



const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange",function(){
  const id = location.hash.substring(1);

  const newsContent = getData(CONTENT_URL.replace('@id',id));
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;

  content.appendChild(title);
});

for (let i=0; i<newsFeed.length; i++) {
  const div = document.createElement('div');
  

  div.innerHTML = `
    <li>
      <a href="#${newsFeed[i].id}">
      ${newsFeed[i].title}(${newsFeed[i].comments_count})
      </a>
    </li>
  `;

  ul.appendChild(div.firstElementChild);
  //root.appendChild("li")//뭐야이게?? 왜이런코드를 쓴거냐 생각을 하고 코딩을하자,,, 엘리먼트를 만들고 append하는 순서도 중요.
}

container.appendChild(ul);
container.appendChild(content);
