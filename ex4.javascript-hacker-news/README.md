두개의 화면을 가진 웹앱

화면을 어떻게 전환하는게를 이해하는게 중요
하나의 어플리케이션이 화면을 여러개를 가지고있고, 화면을 전환하는것
URL로 처리하는게 아니라 SPA로 처리하는걸 하는것임
화면전환:라우팅 

웹페이지와는 다름.


## Step 1

입력: ajax 로 JSON 데이터를 가져옴

개발자도구: 
reponse탭 JSON형태로 보여줌
preview탭 객체 형태로 변환된걸 보여줌

출력: 
 1. 가져온 데이터를 JSON을 객체로 바꿔준뒤에 newsFeed에 저장.
 2. 데이터를 확인 타이틀을 뽑아온뒤에 화면에 리스트로 출력(10개)

## Step 2

content url
타이틀을 클릭하면 그 타이블에 해당하는 데이터를 가져오고(댓글수까지 표현) UI에 별도 화면에 그 데이터를 크게 표현.
1. 링크로 만들기+댓글수도 같이 표현
2. 링크를 클릭하면 그 테이블이 해당되는 데이터를 가져옴.
	-클릭을 인지
	   -인지하는 방식으로 각 데이터에 있는 id를 링크의 #에 추가시킴.
	        -링크에 추가된 해쉬값을 가져와서(#제거) ajax로 가져올 URL에 대입하여 URL을가져옴 
-데이터 가져오고 콘솔에 확인
3. 가져온 데이터를 화면에 content란 곳에 출력


## Step 3

1.DOM API를 너무 사용해서 가독성 이 낮다
DOM API 를 줄여보자
2. 
지금까지 없앴던것. 데이터의 중복 제거. 변수를 사용했다.
지금부터 할것. 코드의 중복을 제거 ->코드를 변수에 넣을 순 없다
데이터를 담을 수 있는 그릇->변수
변수 여러개를 담을 수 있는 그릇->객체
코드를 묶을 수 있는 구조->함수->함수가 하는일을 심플하게 알려주는 이름으로 함수를 만들어보자


구조가 보이게끔 innerHTML을 사용해보자

-혼자 해보니- 문제점이 발생. 생각해볼 포인트

<li><a>태그를 만들었지만 for문을 돌면 하나만나옴
나의 해결책->li 엘리먼트를 만들어서 붙이자->실제로 해보니 li가 두개가됨.
생각해볼 포인트. 이걸 만들어서 붙일 DOM api가 필요. ul에 그대로 붙이면 하나만나옴
이 문자열을 실제로 HTML dom으로 바꿔줘야 하는 부분이 필요. 즉 InnerHTML라는 속성을 제공해주는 
DOM이 필요. li와 a를 자식으로 담을 수 있는 dom이 필요. 
-이런 상황에서 일반적으로 쓰고 버릴놈을 div태그 같은걸로 하나 만듬.
appendChild(div)를 해버리면 버릴녀석이 호적에 올라가므로 자식요소만 선택하여 올릴 필요가 있음
->appendChild(div.children[0]) [1]이면 두번째 같은 레벨의 자식이 나옴(children[0]의 하위태그가 나오는게아님)
->appendChild(div.firstElementChild)둘중 하나 선택

## Step 4 

라우터 만들기(화면처리기)-구조 구축
현재 우리가 만든것. 목록화면과 타이틀이 같은 화면에 나옴+ 내용이 계속 버그도 있음

1. 내용화면으로 진행할 때 기존의 목록화면을 없애보자 
+ DOMAPI를 아직도 사용많이 하고있다 줄여보자 왜??
현재는 타이틀만 표현하고 있지만 내용도 표현하게 바뀔것이다. 즉 복잡한 화면이 될것이다 미리 바꾸어보자

2. 클릭을 할 시 기존화면을 없에고, 간단한 컨텐츠를 보여준뒤 돌아갈 화면을 만들어주자
간단하게 삭제하는 방법 innerHTML=""를 넣는다.

3. 목록 화면도 큰틀에서는 똑같은 구조로 만들어야 함
 -목록화면 ->container,appendchild하고 글내용 ui ->container.innerHTML로 덮어쓰는 구조
기본적으로는 목록화면도 똑같은 구조but 여전히 DOMAPI를 많이 사용하고 있다. 이를 한번더 줄여보자
    <ul>
        <li>
            <a></a>
        </li>
        <li>
            <a></a>
        </li>
        <li>
            <a></a>
        </li>
        
    </ul>
이런 식으로 반복되는 구조이므로 ->ul을하나 만든 후->li a태그를 반복해서 만들고->ul태그로 닫아야한다
어떻게 할까? 배열->많이 사용하는 테크닉. 빈 배열에 요소로 하나씩 쌓은 다음에 마지막에 합쳐서 하나의 문자열로 만드는방식

4.라우터 작성 (화면 중계기 어떤상황에선 A 어떤상황에서 B를 보여주는것)
라우터가 하는일 화면을 전환시키는 것

글내용화면 hashchange라는 이벤트 핸들러에 연결된함수로 구성->이 경우 함수 호출이 불가하므로 빼는 작업이 필요 newsDetail
글 목록화면 함수로 묶여져 있지 않음->호출하면 보여 줄 수 있게 함수로 묶어주는 작업이 필요 newFeed란 함수로 묶어보자

두개의 함수를 호출할 수 있는 형태로 만든 후 라우터함수를 만들자
현재 hashchange에 newsDetail이 걸려있음-> 즉 해쉬가 바뀌면 무조건 뉴스를 보여준다. 
해쉬에 변경에 따라 여러가지를 보여줄 수 있게끔 구조변경 필요
location.hash에 #만 들어 있을 경우에는 빈 값을 반환한다.

## Step 5

페이징 구현하기
현재 페이지가 몇번 째 인지 기억 + 변화

2페이지에서 보고 돌아왔을 때 2페이지를 유지하고 있는게 좋음
페이지는 여러곳 에서 사용. 공유되는 자원을 묶어주자->객체 store

이전페이지,다음페이지 태그 추가.
페이지 로직설정/ 라우터가 글내용 해쉬인지 페이징 해쉬인지 제대로 구분을 못함->해결방안필요->라우터가 구분가능하게 
show/page추가


페이지 버튼을 뉴스피드에 추가

indexOf메서드

## Step 6

마크업이 복잡해질것인데 반복되는 구조가 있다.
확장성이 좋지 않다. 이런 상황에선 템플릿을  이용할 수 있다.
