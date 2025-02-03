/*function over(obj){
	obj.src="맹구.jpg";
}


function over(obj){
	obj.src="test.jpg";
}



document.write("<h3>AAAAAAAAAAA</h3>");
console.log("123123123")
let ret=prompt("이름","박")
if(ret==null){
	console.log("null case")
}
else if(ret==""){
	alert("입력이 되지 않았습니다")
}
else{
	confirm("확실합니까")
}


let x;  /* let은 전역변수 x선언, var로 선언해도 동일
function f(){ //함수 f정의
	let y; //함수 내 지역변수 y선언, var로 선언해도 동일 
	x=10; //전역변수 x에 10 초기화
	y=20; //지역변수 y의 값 재할당
	z=30; //전역변수 z 선언 및 30 초기화(함수안에 생겼지만, let이나 var가 없으므로 전역변수이다.)
	if(y==20){ //지역변수 y
		let b=40; // 블록변수 b 선언 및 40초기화
		b++; // 블록변수 값 +1처리 
	

	} //1. 여기서는 변수 b뺴고 다 접근 가능

}
 //2. x와 z 접근가능




var x=10; //전역 변수 x선언
function xx(){
	var x; //지역변수 x선언
	x=1; //지역변수 x에 값 할당
	this.x=100; //전역변수 x에 100할당, 전역변수 x가 var로 선언되어 있어서 this로 접근 가능,let으로 선언된 전역변수는 this로 접근불가하다.
}


var global=100;
console.log(this.globalvar);
console.log(window.location);//console.log(this.location); 이거랑 똑같음



//자바스크립트의 객체
//1.코어객체 : Array/Date/String/Math 코어 객체 생성시 new 키워드 사용
let today=new Date();
let msg=new String("안녕하세요"); //-> 객체에 대한 접근은 . 을 찍어서 접근 가능하다.
//객체 프로 퍼티와 메서드가 있음

//자바와 다른 점은 자바스크립트에서는 객체의 소멸 방법이 없다. 가비지컬렉터에 의해 자동 소멸, 자동관리 된다.

//Array객체
let arr=["a","b"];
let n=[4,5,6]; 	
arr[0]="C"; //인덱스로 접근 가능하다.
let a=new Array("1","2","3","4");
let b=new Array(7); // b라는 7개 담을수 있는 배열 만듬
b[0]='1'; //b배열의 0번째는 1이라는 것을 집어 넣겠다.
let c=new Array(); //빈배열 만드는 법

//배열의 length프로퍼티: 배열 오소 수 리턴
//배열에는 여러 타입 데이터가 섞여 저장될 수 있음

//Arra객체의 주요 메소드 
//contact() 배열 이어 붙이기 
//join([separator]) : 배열 요소를 separator로 구분하여 문자열로 반환. 배열의 모든 원소를 연결하여 하나의 문자열로 리턴
//reverse() : 배열의 요소를 뒤집는다
//slice([start[, end]]) : start index(포함)에서 end index(미포함)까지의 요소를 subarray로 리턴
//sort([compareFunction]) : 배열의 요소를 sort()
//splice([start, deleteCount[, item1[,...]]]) : start index(포함)에서 deleteCount 개의 요소를 제거하고 item1, item2,...를 추가
//toString() : 배열을 toString() 문자열로 만들어 리턴
//pop() : 배열의 마지막 요소를 제거하고 제거한 요소를 리턴



//Date 객체
//Date객체는 시간정보를 담는 객체
//new 키워드로 생성
//실제 Date객체 생성된 시간정보(코드가 실행된 시점)
// let d = new Date(2024, 11, 1); //24년도 12월 1일
// let now = new Date(); //현재시간 객체 생성
// let date = now.getDate(); //날짜(1~31)
// let month = now.getMonth() + 1; //달(1~12)
// let year = now.getFullYear(); //년
// let hour = now.getHours(); //시간(0~23)
//getFullYear() : 4자리 년도
//getMonth() : 0~11
//getDate() : 1~31
//getHours() : 0~23
//getMinutes() : 0~59
//getSeconds() : 0~59
//getMilliseconds() : 0~999
//getUTCFullYear() : 4자리 UTC 년도
//getDay() : 0(일요일)~6(토요일)




//Math 객체
//Math 객체는 수학 관련 함수를 제공
//Math.abs() : 절대값
//Math.floor() : x보다 작거나 같은 수 중 가장 큰 정수 리턴
//Math.ceil() : Math.abs()의 ceil()
//Math.round() : x반올림 한 수
//Math.sin(0)
//Math.cos(0)
//Math.tan(0)
//Math.random() : 0~1 사이의 랜덤수
//sqrt() : x의 제곱근
//eval() 함수 : 문자열로 구성된 수식의 연산 결과 리턴
//eval("7 * 7") // 49



//2.DOM객체
document.getElmentByID(); //이렇게 얻을 수도 있고
document.body.style.backgroundColor='red'; // 만약 현재 시간이 짝수 초면 body의 백그라운드 컬러를 빨간색, 홀수 초면 파란색을 한다 할때 이 문장을 자바스크립트에서 if문 쓸때 실행문으로 쓰면 됨. 
//DOM 객체화의 목적:JS코드 내에서 HTML과 CSS를 건들기 위해
//element 라고 표현하는  HTML 개별 태그를 JS에서 객체화 하여
//제어할 수 있도록 한다.

//DOM 트리
//document: entry point 이다(document DOM객체 트리 구조에 진입하기 위한 진입점)
//document 객체는 DOM 객체가 아니다.(문서 노드이다.)
//HTML 구조로 작성한 요소 (element)들은 요소 노드 이고, DOM 객체화 된다.
//DOM 객체의 종류 수 = 태그 종류의 수
//HTML 태그 하나 당 DOM 객체가 하나씩 생성된다.
//DOM 트리는 HTML 태그의 포함 관계에 따라 부모 자식 관계로 구성된다.
//DOM 객체는 특정 HTML태그에 반영되어 있는 TEXT 노드와 ATTRIBUTE 노드를 포함하는 객체
//DOM 객체의 구성 요소 : 프로퍼티/ 메소드/컬렉션/이벤트리스너/CSS스타일


//프로퍼티: DOM 객체의 멤버 변수이고 HTML 태그의 속성(ATTRIBUTE)을 반영.
//DOM객체의 프로퍼티 값으로부터 HTML 태그의 속성을 알아내거나 프로퍼티 값을 바꾸어 HTML 태그에
//변화를 줄 수 있음.


//메서드: DOM 객체의 멤버 함수로 HTML 태그를 제어하는데 사용
//컬렉션: 정보를 집합으로 표현하는 일종의 배열,
//예를들어 children 이라는 컬렉션은 특정 DOM객체의 모든 자식 DOM객체를 표현해줌


//이벤트리스너 :DOM 객체 HTML태그에 작성된 이벤트 리스너를 그대로 가짐.
//JS를 통해 새로운 이벤트 리스너를 등록하거나 기존 이벤트리스너를 삭제하는 것도 가능


//스타일 : DOM 객체는 style 프로퍼티를 통해 html 태그에 적용된 css스타일에 접근할 수 있음.


//DOM 객체간 관계성
//DOM객체들은 DOM트리 구조로 나타나는데 아래 관계성 속성에 따라 타 DOM에 접근 가능능
//parentElement 프로퍼티: 부모 DOM 객체
//children 프로퍼티 : 직계자식들 객체 컬렉션
//firstChild, lastChild : DOM객체의 첫번째, 마지막 자식 DOM
//previousElementSibling, nextElementSibling : DOM 객체의 이전, 다음 형제 DOM


//HTML태그의 ID명을 통한 DOM객체화 방법


//document.getElementById() : id 속성값으로 DOM 객체 가져오기
// var mybox = document.getElementById("zboxcont");
// console.log(mybox);
//w3c 표준 DOM객체의 주요 공통 프로퍼티
//id: 태그 id값
//tagName: HTML 태그 이름
//attributes: HTML 태그의 attribute(속성)들
//childNodes: HTML 태그의 child node(태그, text, comment)들
//parentNode: HTML 태그의 parent node
//style: HTML 태그의 style에 대한 레퍼런스
//title: HTML 태그의 title attribute 속성 값
//innerHTML: HTML 태그의 innerHTML 태그의 컨텐츠
//childElements: HTML 태태그의 child elements(태그) 자식 요소 수 count
//firsyElementChild 첫 자식
//lastElementChild 마지막 자식
//previousElementSibling 왼쪽 형체
//nextElementSibling 다음 형제
//offsetTop, offsetLeft, offsetWidth, offsetHeight 높이 너비 위치
//children 자식 컬렉션


//DOM 객체의 주요 공통 메서드
//addEventListener() : 이벤트 리스너 등록
//appendChild() : 마지막 자식 뒤에 새로운 자식 추가
//removeEventListener() : 이벤트 리스너 제거
//click() : click 이벤트 리스너 액션
//focus() : focus 이벤트 리스너 포커스 지정
//setAttribute() : HTML 태그의 attribute(속성)값 설정 속성 추가
//removeChild() : 자식 삭제제
//innerText : HTML 태그의 innerText
//textContent : HTML 태그의 textContent
//querySelector() : Css 셀렉터와 일치하는 첫번째 자식 리턴
//insertBefore() : 지정된 자식 앞에 새 자식 추가
//replaceChild() : 자식 대체
//getattribute() : 속성 값 조회

var p = document.getElementById("firstP"); //DOM 객체화
console.log(p); //DOM 객체
p.style.color = "red"; //CSS 스타일


document.getElementById("firstP").style.color = "blue"; //DOM 객체
p.style.backgroundColor = "yellow"; //DOM 객체
//background-color라는 css속성은 js에서 쓸 때 하이픈 제거 후 backgroundColor
p.style.cssText = "background-color: yellow; color: blue;"; //cssText로 css속성 설정
var s = document.getElementById("myspan");
s.style.color = "magenta"; //DOM 객체
s.style.fontSize = "50px"; //DOM 객체
s.style.display = "block"; //DOM 객체
s.style.width = "200px"; //DOM 객체
s.style.border = "1px solid black"; //DOM 객체
s.style.margin = "10px"; //DOM 객체


var whatcolor = s.style.color;
console.log(whatcolor);


if (whatcolor === "green") {
  console.log("1");
}


var pp=document.getElmentByID('secondP');
console.log(pp.style.color);//x

var style=window.getComputedStyle(pp);
var value=style.getPropertyValue('color');
console.log(value);//o


//second처럼 셀렉터를 통한 스타일이 부여 된 DOM객체의 경우에는 ComputedStyle을 통해 속성 값을 ㅇ조회 가능
//직접 접근하면 공백 출력


function change()
{
	let span=document.getElmentByID('myspan');
	span.style.color='red';
	span.style..fontSize='100px';
	span.style.width='20em';

}


console.log(p.innerHTML);
function changeinner() //changeinner라는 함수를 자바스크립트에 하나 만들고, HTML에서 p에 함수 적용시킴 
{
	p.innerHTML="<img src='test.jpg'>변경 이미지~~~<ul><li>1</ul>"
}


function change1(obj,size,color)
{
	obj.style.color=color;
	obj.style.fontSize=size;
}
*/
//브라우저는 HTML문서를 로드하기 전에 document 객체를 먼저 만든다.
//그리고 dodcument객체를 뿌리로 하여 DOM트리를 만든다.
//document객체는 HTMLㅜㄴ서 전체를 대변하는 객체이다.
//documnet객체는 많은 프로퍼티를 통해 HTML문서의 전반적인 속성을 나타내고
//여러 메서드를 통해 DOM객체의 검색, DOM객체의 생성 등 HTML문서의 전박적 제어 역할
//documnet객체는 HTML문서에 만들어진 동일 HTML태그들을 배열처럼 접근 할 수 있는 컬렉션을 두고 있음
//예로 images 컬렉션은 document객체를 통해 접근 가능한데, 문서 내 모든 img태그들을 가져올 수 있다.

//document 객체의 주요 프로퍼티
//location: 현재 문서의 URL정보를 가진 location 객체
//domain: 서버 도메인 이름
//readyState : 이 문서의 로딩 상태
//body: 이 문서의 바디
//head: 이 문서의 헤드
//activeElement: 이 문서에서 포커스된 요소 
//URL : 이 문서의 URL
//documentElement : HTML객체에 대한 레퍼런스


//document객체의 주요 컬렉션
//images : 문서 내 모든 img객체들 컬렉션
//links : 문서 내 모든 a객체들 컬렉션
//forms : 문서 내 모든 form 객체들 컬렉션


//documents객체의 주요 메서드 
//getElementById()  id를 통한 DOM객체 리턴
//getElementsByClassName() class명을 통한 DOM객체 리턴
//getElementsBYTagName() 태그명을 통한 DOM객체 리턴
//getElementsByName() name속성 값을 통한 DOM객체 리턴
//close() document객체에 있는 HTML컨텐츠를 브라우저에 출력하고 더 이상 쓰기를 받지 않게 됨.
//createElement() HTML태그의 동적 생성
//open() document에 담긴 모든 컨텐츠를 지우고 새로운 HTML컨텐츠를 쓸 수 있도록 열기
//write() document에 HTML 컨텐츠 삽입, DOM트리에 연결되고 브라우저에 출력됨.



/*
var btn=document.getElementById('addtodo');
var input=document.getElementById('newtodo');
var ul=document.getElementById("todolist");

btn.addEventListener('click',()=>{ //만약 HTML에서 onclick이라는 이벤트를 안 쓰면, addEventListener를 사용해서 이벤트를 추가한다.
	if(newtodoinput.value != '')
	{
		var newli = document.createElement('li'); //var newli라는 변수를 만들어서 li를 동적생성하는걸 담아줌
		newli.innerHTML=input.value;
		ul.appendChild(newli);
		ul.value="";
	}
}); 

ul.addEventListener('click',(event)=>{//매개변수로 마우스이벤트(포인터이벤트객체를 전달받음)
	console.log(event); //이벤트라는 매개변수가 뭔지 console.log로 출력해줌. 이벤트 객체에는 해당 이벤트가 발동된 target외 여러 속성을 가지고 있다.
	if(event.target.tagName=='LI') //tagName속성은 대문자로 리턴해주기때문에 대문자로 비교해야한다.
	{
		todolist.removeChild(event.target); //해당 이벤트가 발생한 타겟을 ul에서 리무브 한다.
	}

});
*/

//이건 button에 onclick이라는 이벤트가 있을때 appendlist라는 함수를 만들어서 이벤트를 적용시킨다.






// 함수 정의
function addli() {
    var input = document.getElementById('newtodo');  // input 요소
    var ul = document.getElementById('todolist');    // ul 요소

    if (input && ul && input.value.trim() !== "") {  // 입력값이 비어있지 않으면
        var newli = document.createElement("li");     // 새로운 <li> 요소 생성
        newli.innerHTML = input.value;                 // <li>에 입력된 값 넣기
        ul.appendChild(newli);                          // <ul>에 추가
        input.value = '';                               // 입력창 비우기
    } else {
        alert("할 일을 입력해주세요!");  // 입력이 없으면 경고 메시지
    }
}






 

// != 와 !== 의 차이는
// !==는 엄격한 비교로 자료형까지 비교한다. !=는 느슨한 비교로 자료형은 따지지않고 값만 비교한다.

 
//주사위 뽑기
//주사위는 처음에 1개가 주어진다.
//주사위 추가 버튼있다.
//처음 게임시작하면 주사위가 랜덤으로 예를들어 5로 깔려있음,
//주사위 숫자는 랜덤이다. 코어객체 math -> random 범위 1~6
//주사위 그림은 이미지를 사용한다.
// 주사위 추가 버튼 누르면 다른 주사위 생성돼서,랜덤으로 수를 갖게됨
//바로 이전 주사위와 다음 주사위의 숫자가 같은 숫자가 나오면 끝나는 게임
//몇개를 추가했는지를 p에다가 추가하고 주사위 뽑은 수 출력
//같은 숫자 주사위가 연속으로 나오면 alert을 통해 게임 종료라는 멘트를 출력한다.
//주사위 추가는 5번만 가능
//주사위 6개 담을수 있는 container가 있어야함






//이벤트와 이벤트 객체
//이벤트란 마우스.키보드 입력, 이미지나 문서의 로딩, 타임아웃 등 사용자의 입력 외
//문서나 브라우저의 상태 변화를 브라우저가 자바스크립트에게 알리는 notification

//이벤트 리스너란
//발생한 이벤트에 대한

//이벤트 객체란
//이벤트가 발생하면 브라우저는 발생한 이벤트에 대한 여러 정보를 담은 이벤트 객체를 만들어서
//이벤트 리스너에게 전달한다. onmousedown 이벤트의 경우 마우스 관련이기 때문에 마우스의 좌표 등 정보를
//담은 마우스 이벤트 객체를 전달하고 onkeydown의 경우 키보드 관련으로 키보드의 어떤키가 눌렸는지
//keycode등의 정보를 담아 전달한다.

//이벤트가 처리되고 나면 이벤트 객체는 소멸한다.
//브라우저는 한 개의 이벤트를 완전히 처리한 후 다음 이벤트를 처리하므로,이벤트 리스너 실행 중에는
//오직 한개의 이벤트 객체만 존재한다.

//마우스 이벤트 객체와 키보드 이벤트 객체를 DOM객체 만들어서 등록해서 발동시켜서 console.log로 출력해보기
function divf(event){
	console.log(event)
}

var yue = document.getElementById('yue');
yue.onclick=divf;

document.body.addEventListener('keydown',divf) //-> html의 body에 이벤트를 적용
document.body.addEventListener('keypress',(event)=>{console.log(event)})


//이벤트 객체의 target프로퍼티
//타겟 프로퍼티는 이벤트의 대상 객체를 가리킴
//이벤트 타겟이란 이벤트를 유발시킨 객체를 의미함.
//target과 유사한 프로퍼티로 currentTarget프로퍼티가 있다.
//currentTarget은 이벤트가 흘러가는 경로 상에 있는 DOM객체 중 현재 이벤트 리스너를 실행하고 있는
//DOM객체를 가리킨다
var ppps=document.getElementById('d11');
ppps.addEventListener('click',fff)

function fff(e) {
	let text="type"+e.type+"<br>"+"target:"+e.target+"<br>"+"currentTarget:"+e.currentTarget+"<br>";
	ppps.innerHTML=text;
}
//type프로퍼티는 현재 발생한 이벤트의 종류
//target프로퍼티는 이벤트가 실제로 발생한 요소
//currentTarget프로퍼티는 이벤트가 바인된 된 요소 
//defaultPrevented프로퍼티는 이벤트의 디폴트 행동이 취소되었는지 여부 t/f로 나타남
//preventDefault() 메서드는 이벤트의 디폴트 행동을 취소시키는 메소드 

//HTML 태그 중 몇몇은 특정 이벤트에 대해 디폴트 행동을 한다.
//a링크를 클릭하면 이동하는 것
//submit 버튼을 클릭하면 폼 데이터를 전송하는 것
//reset을 클릭하면 폼이 초기화 되는 것
//wheel을 굴리면 브라우저 스크롤이 움직이는 것 

//이벤트 객체의 cancelable 프로퍼티가 true인 경우만 preventDefault가 가능하다

//이벤트의 흐름
//이벤트가 발생하면 이벤트는 타겟 객체에 전달된다.
//이벤트가 단번에 타겟 객체로 직접 전달되는 것이 아니라 window객체로부터 DOM트리를 타고 중간 DOM객체들을 거쳐
//타겟 객체로 이벤트가 흘러들어가고, 다시 반대 방향으로 이동하여 window 객체에 도달한 후 이벤트는 소멸한다.
//이과정을 이벤트의 흐름이라고 함.
//이벤트의 흐름은 2가지 단계로 나누어 볼 수 있다. 1.캡쳐단계 2.버블 단계

//캡쳐단계는 window객체에서 카겟 객체까지 전파되는 과정
//버블단계는 타겟 객체에서 거꾸로 window까지 이벤트 객체가 전파되는 과정
//DOM객체들으 동일한 이벤트에 대해 캡쳐 리스너와 버블 리스너를 모두 가질 수 있음.

function cap()
{
	console.log(1)
}
function bub()
{
	console.log(2)
}

var bt1=document.getElementById('bt1');
bt1.addEventListener('click',cap,true); //캡쳐리스너와 버블리스너를 별도로 연결
bt1.addEventListener('click',bub,false);

//캡쳐와 버블 단계 구분 : 이벤트 발동 순서에 대한 관리 / 이벤트 우선 순위 관리 필요할 때

//이벤트 객체의 멤버 중 이벤트 흐름과 관계된 멤버
//cancelable : 디폴트 취소 가능 여부
//stopPropagation(): 객체에 등록된 리스너를 모두 실행 후 이벤트 흐름 중단
//stopImmediatePropagation() : 현재 리스너만 실행하고 이벤트 흐름 즉각 중단


//마우스 핸들링
//마우스 객체 관련 프로퍼티
//x,y : x,y는 타겟 객체의 부모 객체 내에서의 마우스 좌표
//clientX,clientY: 브라우저 윈도우의 문서출력 영역 내에서의 마우스 좌표
//screenX,screenY: 스크린을 기준으로 한 마우스 좌표
//offsetX,offsetY : 타겟 객체 내에서의 마우스 좌표 
//button: 눌러진 마우스 버튼 종류 0: 아무것도 안눌린 상태 1: 왼쪽버튼 2:오른쪽버튼 3:왼쪽, 오른쪽 모두 4:중간버튼
//wheelDelta: 휠이 구른 방향, 양수: 위쪽으로 굴림/ 음수: 아래로 굴림


//키보드 이벤트 객체 프로퍼티 
//code: 눌러진 키의 이름
//key: 눌러진 키의 문자열
//altkey: 알트키 눌린 상태 여부
//ctrlkey: 컨트롤키 눌린 상태 여부 
//shiftkey: 시프트키 눌린 상태 여부
//keycodeL 키코드 값 숫자 

let tds;
let index = 0;

window.onload = function() { //처음 페이지가 로드되고 실행되는 함수
    tds = document.getElementsByTagName("td"); //"td"라는 element를 가져와서 tds라는 변수명 객체로 만든다.//getElementByTagName을 사용하면 tds는 배열 형태가 아닌 컬렉션 형태로 됨. foreach사용 불가능
    //2.tds=document.querySelectorAll('.card'); -> querySelectorAll()을 사용하면 배열객체인 NodeList가 반환되므로 forEach 사용 가능
    



	//1번 방법인 getElementsByTagName()사용 했을 때 방법

    // 모든 td의 이미지 숨기고 배경색 설정
     Array.from(tds).forEach(td => {       //Array.from()함수를 사용하면 ()안에 있는것을 배열로 변환해준다. 그후 forEach()함수를 통해 td배열 안에 요소들을 하나씩 순회한다.
        let img = td.querySelector("img"); //td안에 있는 요소인 img태그를 찾아서 객체로 만듬
        if (img) { //만약 img태그가 존재하면
            //img.style.visibility = "hidden"; // 이미지 숨김
            img.style.width = "100%"; // 부모인td 크기에 100%로맞춤
            img.style.height = "100%"; // 부모인 td크기에 100%비율로 맞춤 
            img.style.objectFit = "cover"; // 비율 유지하며 td 크기에 맞춤
        }
        td.style.backgroundColor = "red"; //td의 background컬러를 red로 설정
    });

   	//if(tds.length > 0){ //만약 
   		tds[index].classList.add("selected"); //tds[index]객체의 classList.add()함수를 사용해서 tds[index]객체에 html에 존재하는 .selected class를 적용한다.
   	}
	
//};

window.onkeydown = function(e) {  //사용자가 키보드를 움직이면 실행되는 함수 
    tds[index].classList.remove("selected"); // tds[index]객체의 classList.remove()함수를 사용해서 키보드 움직이면 기존 tds[index]에 있던 selected효과 제거
    switch (e.key) { //e는 이벤트 객체를 의미, 이벤트 객체는 이벤트가 발생하면 브라우저가 자동 생성하는 객체, e.key는 누른 키의 값을 반환 예를 들어ArrowDown
        case "ArrowDown":
            if (index < 12) index += 4;
            break;
        case "ArrowUp":
            if (index >= 4) index -= 4;
            break;
        case "ArrowLeft":
            if (index % 4 !== 0) index--;
            break;
        case "ArrowRight":
            if (index % 4 !== 3) index++;
            break;
        case "Enter":
            let img = tds[index].querySelector("img");
            if (img) {
                img.style.visibility = "visible"; // 이미지 표시
                setTimeout(() => {
                    img.style.visibility = "hidden"; // 2초 후 이미지 숨김
                }, 2000);
            }
            break;
    }

    tds[index].classList.add("selected"); // 새로운 td 선택 효과 추가
};



//짝 맞추기 게임 만들기
//4X4 테이블 td칸
//각 칸은 키보드 화살표로 이동한다
//엔터를 누르면 뒤집힌다.
//게임시작시 1장이 기본적으로 뒤집혀 있음
//각 칸을 누르면 뒤집힌다.
//뒤집한 칸에는 이미지가 뜬다.
//이미지의 종류는 8개 
//같은 이미지 짝을 찾는데 총 몇번 클릭했는지 체크
//전체이미지를 다 맞춰 뒤집으면 끝나는 게임 

//주요이벤트 리스너 목록
//onkeydown:키보드의 아무 키를 누르는 순간
//onkeypress: 키보드의 알파뉴메릭(알파벳과 숫자만 허용) 키 누르는 순간
//onkeyup: 키보드 누른 키 놓는 순간
//onclick: 좌클릭
//oncontextmenu: 우클릭
//ondbclick:더블 클릭
//onmousedown: 마우스의 물리버튼 누르는 경우
//onmouseseenter: 마우스 커서가 객체 영역 안으로 들어오는 순가
//onmouseseleave: 마우스 커서가 객체 영역 밖으로 나가는 순간
//onmouseover: 마우스 커서가 객체 영역 안으로 들어오는 순간 (자식 객체에게 전파)
//onmouseout: 마아ㅜ스 커서가 객체 영역 밖으로 나가는 순간(자식 객체에게 전파)
//onmouseup: 누른 마우스 버튼 놓는 순간
//onwheel: 마우스 휠 변화 생길떄 
//onabort: 이미지나 문서 로딩이 중단되는 경우
//onerror: 문서나 이미지, 리소스 등의 로딩에서 오류 발생했을 떄
//onload: 문서나 이미지의 로딩이 완료된 후 
//onresize:윈도우,프레임 혹은 객체의 크기가 변경될떄
//onfocus: 객체가 포커스를 가질 때 
//onchange: 체크박스, input등의 내용이 변하는 경우
//onreset: 폼이 reset되는 경우
//onsearch: input type search 창에 엔터입력 시 
//onselect: input영역의 텏스트를 선택할때
//onsumit: 제출버튼 클릭시 발생


//이벤트 리스너 만드는 방법
//1.HTML태그에 직접 작성하는 방법 
//<p id='pp' onclick="">p태그입니다</p> 이런식으 HTML에서 직접 tag에 작성

//2.DOM객체의 이벤트 리스너 프로퍼티에 작성하는 방법 -> 프로퍼티는 객체가 나와서 가능
//var pp = document.getElementById('pp'); -> 이런식으로 pp를 먼저 DOM객체화 시킨다
//function x(){}; -> 함수 x를 만들었다
//pp.onmouseover=x; -> pp객체에 마우스가 올라왔을 때 x라는 함수 실행


//3.DOM객체의 addEventListener() 메서드로 등록하는 방법
//addEventListener(eventName, listener[,useCapture])함수의 매개변수
//eventName:이벤트 타입을 나타내는 문자열 click,load,keydown 등
//listener: 이벤트 리스너로 등록할 함수 이름
//useCapture: true로 놓는 경우 이벤트 흐름 중 캡쳐 단계에서 실행될 리스너로 등록하는 것
//false로 등록하면 버블 단계에서 실행되는 리스너로 등록함. 기본값은 false
//사용방법
//pp.addEventListener("click",x); ->정의 되어있는 함수 등록: 이런식으로 위에있는 pp객체에 click이라는 이벤트는 ""따옴표 안에, clicktl x함수 호출
//pp.addEventListener("click",function (){함수의 실행문}); -> 익명함수 등록
//pp.addEventListener("click", ()=>{})









//3.BOM객체
//4.window객체 


	

/*

let a=new Date();
let x = a.getTime();
if(x%2 != 0){
	document.body.style.backgroundColor='red'
}
else if(x%2 == 0){
	document.body.style.backgroundColor='blue'
}

let b = new Math();
let c=b.random();
let d=b.random();
prompt()
*/









