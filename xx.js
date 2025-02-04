






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


//마우스 핸들링  // 아디다스 페이지의 마우스가 사진위로 올라오면 마우스 좌표에 따라 신발이 어디 보여지는지 효과를 주기 위해서는 x,y 좌표 사용
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
    //tds = document.getElementsByTagName("td"); //"td"라는 element를 가져와서 tds라는 변수명 객체로 만든다.//getElementByTagName을 사용하면 tds는 배열 형태가 아닌 컬렉션 형태로 됨. foreach사용 불가능
    tds=document.querySelectorAll('.card'); //-> querySelectorAll()을 사용하면 배열객체인 NodeList가 반환되므로 forEach 사용 가능
    



	//1번 방법인 getElementsByTagName()사용 했을 때 방법

    // 모든 td의 이미지 숨기고 배경색 설정
   document.querySelectorAll('.card').forEach(td => {       //Array.from()함수를 사용하면 ()안에 있는것을 배열로 변환해준다. 그후 forEach()함수를 통해 td배열 안에 요소들을 하나씩 순회한다.
        let img = td.querySelector("img"); //td안에 있는 요소인 img태그를 찾아서 객체로 만듬
        if (img) { //만약 img태그가 존재하면
            //img.style.visibility = "hidden"; // 이미지 숨김
            img.style.width = "100%"
            ; // 부모인td 크기에 100%로맞춤
            img.style.height = "100%"; // 부모인 td크기에 100%비율로 맞춤 
            img.style.objectFit = "cover"; // 비율 유지하며 td 크기에 맞춤
        }
        td.style.backgroundColor = "white"; //td의 background컬러를 red로 설정
    });

	  
   		tds[index].classList.add("selected"); //tds[index]객체의 classList.add()함수를 사용해서 tds[index]객체에 html에 존재하는 .selected class를 적용한다.
	   	
	
};

window.onkeydown = function(e) {  //사용자가 키보드를 움직이면 실행되는 함수 
    tds[index].classList.remove("selected"); // tds[index]객체의 classList.remove()함수를 사용해서 키보드 움직이면 기존 tds[index]에 있던 selected효과 제거
    switch (e.key) { //e는 이벤트 객체를 의미, 이벤트 객체는 이벤트가 발생하면 브라우저가 자동 생성하는 객체, e.key는 누른 키의 값을 반환 예를 들어ArrowDown
        case "ArrowDown":
            if (index < 12) index += 4;
            tds[index].classList.add("selected");
            break;
        case "ArrowUp":
            if (index >= 4) index -= 4;
            tds[index].classList.add("selected");
            break;
        case "ArrowLeft":
            if (index % 4 !== 0) index--;
            tds[index].classList.add("selected");
            break;
        case "ArrowRight":
            if (index % 4 !== 3) index++;
            tds[index].classList.add("selected");
            break;
        case "Enter":
            let img = tds[index].querySelector("img");
            if (img) {
                img.style.visibility = "visible"; // 이미지 표시
                setTimeout(
                () => { //setTImeout함수는 
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








//20250204 시작
//3.BOM객체
//BOM객체란 browser object model 객체 
//DOM객체들은 HTML 태그들을 객체화 한 것이고, BOM은 윈도우와 윈도우에 로드된 문서의 url, 브라우저가 출력된 스크린장치. 브라우저의 종류와 기능 등
//브라우저와 브라우저가 실행하고 있는 환경을 자바스크립트 코드로 접근하기 위해 객체화 하는 것 
//BOM에 속한 객체들은 HTML 페이지의 내용과 관계 ㅇ벗는 순수 브라우저 관련 객체들이다. 


//BOM의 종류
//1.window //alert, open, close, onload 이런게 윈도우 객체의 프로퍼티와 메소드이다. 
//2.location
//3.history
//4.screen

//window 객체는 열려 있는 브라우저 윈도우나 탭 윈도우를 나타내는 객체로 윈도우마다 하나의 window객체가 생성
//wicdow 객체가 생성되는 경우는 다음 3가지
//1.브라우저가 새로운 웹 페이지를 로드 할 때
//2.iframe하나당 하나의 window객체이다. //iframe이 태그 쓴 적 있음 웹페이지하나에 조그만 웹페이지(주니어네이버)창 뜨게 했던 것 처럼 
//3.개발자가 js코드를 통해 직접 window객체를 임의로 생성하는 경우 ex? window.open("url", '윈도우명','thrtjd')


//BOM은 w3c의 규격이 아니다. 
//window 객체의 프로퍼티와 컬렉션, 메서드 목록
//프로퍼티와 컬렉션 
//window: 현재 윈도우 객체에 대한 ref 
//document: 윈도우에 담긴 document 객체에 대한 ref
//history : 히스토리 객체
//menubar: 메뉴바 객체
//locationbar : 위치바 객체
//length : 윈도우에 존재하는 iframe 수 
//frames : 윈도우에 존재하는 iframe 객체들의 컬렉션
//innerWidth : 수직 스크롤바를 포함한 브라우저 내 HTML문서가 출력되는 영역의 폭
//outerWidth : 윈도우 전체의 폭
//outerHeight : 윈도우 전체 높이 
//screenX : 스크린상 윈도우 x좌표
//screenY : 스크린상 윈도우 y좌표
//scrollX : 현재 문서의 스크롤 x 값
//scrollY : 현재 문서의 스크롤 y 값


//메소드 
//open() : 새 윈도우 오픈
//close() : 윈도우 닫기
//focus() : 윈도우에 포커스를 줘서 키보드 입력 가능 상태로 만듬
//blur() : 윈도우가 포커스 잃음 
//stop() : HTML 페이지 로딩 중단 (브라우저의 stop버튼 누른 것 동일)
//alert() : 경고 다이얼로그 출력
//confirm() : 확인 다이얼로그 
//prompt() : 입력 다이얼로그 
//setInterval() : 타임아웃 코드가 반복 호출되도록 타이머 설정
//clearInterval(): 설정된 타이머 제거 
//setTimeout() : 타임아웃 단발성 타이머 설정
//clearTimeout() : 단발성 타임아웃 해체
//moveBy() : 지정된 픽셀만큼 윈도우 이동
//moveTo() : 지정된 위치로 윈도우 이동
//resizeBy() : 지정된 크기만큼 윈도우 크기 조절
//resizeTo() : 지정된 크기로 윈도우 크기 조절
//scrollBy() : 주어진 픽셀만큼 상화좌우 스크롤한다.
//scrollTo() : 특정 좌표로 스크롤 한다.


//window 객체에도 이벤트리스너를 등록 할 수 있다.
/*window.open("url", '윈도우명','속성');*/
//url : 페이지 주소, 이 매개변수는 필수 , null 허용 않는다.
//윈도우명 : 새로 여는 윈도우의 이름 전달 매개변수
//			_blank : 이름 없는 새 윈도우 
//			_parent : 새 윈도우를 열지 않고 현재 윈도우의 부모 윈도우에 웹 페이지 출력 
//			_self : 현재 윈도우에 페이지 출력
//			_top : 브라우저 윈도우에 웹 페이지 출력

//속성(생략가능) : 윈도우의 모양이나 크기 등 속성을 설정하는 부분 ex) "resizable=yes" or "resizable=1" -> 크기 변경이 가능한 윈도우로 열림(크기 변경 불가능하게 하려면 no나 0으로 함)
//		 width/height/left/top/location/menubar/scrollbars/status

/*window.open("https://www.naver.com", "_blank","resizable=yes"); 
let newWindow=window.open("https://www.naver.com", "_blank","width=300,height=500"); //이런식으로 윈도우 창 자체를 newWindow라는 변수에 담아서 객체화 시킬 수 있다. 



let newWin = null;
function load(URL)
{
	newWin=window.open(URL,"_blank","left=300,top=300,width=300,height=300");
} 
function closeNewWindow()
{
	if(newWin==null||newWin.closed) //
	{
		return;
	}
	else
	{
		newWin.close();
	}
}
*/


//window의 타이머 활용
//window에는 타이머 작동 메서드가 있어 이를 활용하여 시간에 따라 웹 페이지에 동적인 효과 줄 수 있음.


//단발성 -> setTimeout() : 메서드에 밀리초 단위 타임아웃 지연 시간과 타임아웃 코드를 작성한다 
/*function myAlert(t)
{
	alert(t+"초 지남")
}
let timerID=setTimeout("myAlert(3)",3000); //setTimeout은 3초후에 함수 한번 실행하고 없어짐.
clearTimeout(timerID); //단발성 setTimeout은 단발성이기때문에 clearTimeout() 함수를 사용해서 강제로 끌 일이 없다.


//반복성 -> setInterval()
let timerID2=setInterval('myAlert(3)',3000);
clearInterval(timerID2); //interval은 무한 반복이기떄문에 clearinterval 함수로 꺼줘야 함. 

*/


//setTimeout()을 통해서 5초간 div 박스에 마우스를 올려놓으면 새로운 윈도우가 하나 열리도록 해보기 
let five=document.getElementById('five');
let timeID3 =null;
function fivetime()
{
	timeID3=setTimeout("open()",5000);
}

function outtime()
{
	clearTimeout(timeID3);
}
five.onmouseover=fivetime;
five.onmouseout=outtime;



//setInterval 예제
function f() //2초마다 호출할 함수의 정의 
{

}
let timerID = setInterval('f()',2000); //on

clearInterval(timerID); //off


//p태그에 어떤 문장의 쓰여있고, p태그의 기본 배경색은 red색상이다. p태그의 우측에는 2개의 div로 만들어진 버튼이 있고, 첫번째 버튼은 on버튼 
//두번째 버튼은 off 버튼임, on버튼을 누르면 2초마다 반복적으로 배경색상이 R->G->B->R->G... 형태로 변경되는 작동이 켜지고 off누르면 작동 꺼짐


let secondOn = document.getElementById('secondOn');
let secondOff = document.getElementById('secondOff');
let pp = document.getElementById('pp');
let timerID4 ;


function changeBack()
{
	timerID4=setInterval('backG()',1000)
}
function backG()
{
	if(pp.style.backgroundColor=="red")
	{
		pp.style.backgroundColor="green";
	}
	else if(pp.style.backgroundColor=="green")
	{
		pp.style.backgroundColor="blue";
	}
	else
		pp.style.backgroundColor="red";
}
function secondOut()
{
	clearInterval(timerID4);
}
secondOn.onclick = changeBack;
secondOff.onclick = secondOut;



//window.scrollBy(0,10); //마우스 스크롤이 얼마큼 이동하는가이고
//window.scrollBy(10,-15);
window.scrollTo(0,200); //얘는 마우스 스크롤이 0에서 200으로 바로 이동함 


//location 객체 
//window.location
//location 객체는 윈도우에 로드된 웹페이지 url 정보 나타내는 객체
//윈도우가 열릴 때 자동 생성됨
//window.은 생략 가능하다. 

//http://www.example.com:8080/content/ABC.html#lable1
//위 주소 하나씩 뜯어서 살펴보기 

//https: 프로토콜
//www.example.com : 호스트 네임
//8080 : 포트번호 
//content/ABC.html : path(경로)
//#label1 : 해시(#을 포함하는 앵커 이름 문자)




//history객체
//히스토리 객체는 사용자가 방문한 웹 페이지의 리스트 정보를 담고 있는 객체
//window.history 혹은 history로 접근

//history관련 프로퍼티와 메소드 
//length : 히스토리 리스트에 있는 엔트리 수 
//back() : 히스토리에 있는 이전 웹 페이지로 이동하는 메서드 브라우저의 뒤로 버튼과 동일
//forward() : 히스토리에 있는 다음 웹 페이지로 이동하는 메서드 부라우저의 앞으로 버튼과 동일
//go(n) : 히스토리에서 현재 웹페이지에서 n만큼 상대적인 위치에 있는 웹 페이지로 이동


//캔버스에 대한 객체화
/*let canvas = document.getElementById('cv1');
let context = canvas.getContext("2d");*/
//getContext('2d')가 리턴한 context객체는 2차원 그래픽에 사용되는 프로퍼티와 메서드 제공
//let context변수에 할당 된 객체는 CanvasRenderingContext2D  타입의 객체임
//HTML5의 캔버스는 비트맵 렌더링 엔진을 장착하여 브라우저에 즉시 그려내는 구조 
//속도가 빠르다. 

//canvas객체의 프로퍼티와 메서드 
//width
//heigt
//style
//getContext() : 캔번스에 그림을 그리는 컨텍스트 객체 만들어주는 메소드(함수)


/*context.beginPath(); //그리기 시작
context.strokeStyle='blue' //색상
context.rect(60,60,50,50); //60,60좌표에 50X50사이즈 사각형(reat)
context.stroke(); //그리기 
*/
//context 객체 프로퍼티 메서드
//strokeStyle : 선 색상
//fillStyle : 채우기 색상
//lineWidth : 선 두께
//font : 텍스트 폰트 설정
//textAlign : 텍스트 정렬 방식


//beginPath() : 이전 경로 모두 지우고 새로운 경로 시작
//closePath : 경로의 끝 점과 시작점을 연결하는 선을 추가하고 경로 닫음
//moveTo() : 경로에 새 점을 만듦
//lineTo() : 경로에 끝 점과 연결하는 선을 추가 한다.
//rect() : 사각형 그리기
//arc() : 원호 그리기
//fill() : 경로에 만들어진 도형을 외곽선 없이 내부 색을 채워 그린다.
//stroke() : 경로에 담겨진 모든 도형을 외곽선만 캔버스에 그린다.
//clearRect() : 캔버스에서 사각형 영역을 지운다.
//fillRect() : 캔버스에 외곽선 없이 사각형 영역을 색으로 바로 칠한다.
//strokeRect() : 사각형을 경로에 추가하지 않고 캔버스에 바로 그림
//strokeText() : 텍스트를 캔버스에 바로 그린다.
//drawImage() : 이미지를 캔버스에 바로 그린다.


/*let canvas=document.getElementById('cv1');
let context = canvas.getContext('2d');

context.beginPath(); //빈경로 만들기
context.strokeStyle='blue'; //선 색상 설정
context.rect(30,30,50,50); //30,30에 50X50짜리 사각형을 경로에 넣는다.
context.stroke(); //경로에 있는 모든 도형의 외곽선 그리기

context.beginPath();
context.fillStyle='violet'; //채우기 색상 설정
context.rect(60,60,50,50); //경로에 사각형 넣음
context.fill(); //경로에 있는 모든 도형을 내부 색상 채워 그리기

context.font='20px Gothic';
context.fillStyle="green";
context.fillText('text123123123',100,50);

*/
//도형그리기
//1.Path만들기
//2.캔버스에 담긴 경로를 그려내기

//경로path란 캔버스위에 펜이 지나가는 길 
//경로 만들기는 캔ㅂ서ㅡ에 그리고자 하는 도형들을 먼저 컨텍스트 내의 경로에 담는 과정이다. 
//moveTo() lineTo() rect() arc() 등 메서드는 캔버스에 직접 그리지 않고 도형을 경로에 추가하는 메서드이다.
//stroke이나 fill메서드가 호출될때 실질적으로 경로에서 그림으로 캔버스에 올라옴
//closePath : 경로 종료

//삼각형 그리기
/*context.beginPath();
context.moveTo(120,20); //경로에 담긴 도형은 그대로 두고, 점 x,y를 새 시작점으로 삽입
context.lineTo(20,50);  //경로의 끝점에서 x,y까지 직선을 경로에 추가 
context.lineTo(150,120);
context.lineTo(120,20);
context.strokeStyle='blue';
context.stroke();
*/

//원그리기 arc()
//acr(x,y,radius,starAngle,endAngle,antoclockwise)
//x,y 원호의 중심
//radius 반지름
//starAngle : 시작 각도 3시가 기준점 (시계방향)
//endAngle : 종료각도 
//anticlockwise : 시계방향은 true 반시계방향은 false로 설정

//각도법에서는 360도로 표현 -> 호도법으로 표현하면 라디안 단위로 표현
//360도 = 2파이 
//1도 = 파이/180


//arc() 메서드에서 startangle과 endangle은 원주율로 지정한다.
//각도는 3시에서 기준점 시작
//math클래스에 있는 PI상수를 이용해서 각도 설정
//270도 => Math.PI * 1.5
//360도 => Math.PI * 2


/*let canvas=document.getElementById('cv1');
let context = canvas.getContext('2d');
context.beginPath();
context.strokeStyle='blue';
context.arc(50,50,10,0,1.5*Math.PI,false)
context.stroke();

context.beginPath();
context.strokeStyle='red';
context.arc(100,70,50,Math.PI/2,Math.PI,true);
context.stroke();
*/

/*let canvas=document.getElementById('cv1');
let context = canvas.getContext('2d');

context.fillStyle='violet';
context.fillRect(20,20,100,100);

context.beginPath();
context.rect(20,150,100,100);
context.fillStyle='violet';
context.fill();

context.strokeStyle='gray';
context.lineWidth=10;
context.stroke();

context.beginPath();
context.moveTo(80,340);
context.arc(80,340,50,0,1.5*Math.PI);
context.closePath();

context.fillStyle='yellowgreen';
context.lineWidth=20;
context.stroke();
*/



//이미지 그리기
//이미지 객체의 생성
//캔버스에 이미지를 그리기 위해서는 이미지를 담을 이미지 객체가 필요함.
//이미지 객체는 JS 코드로 new키워드 사용해서 만듬
//let img=new Image(); 이미지 객체를 만드는 방법, 어떤 이미지가 들어갈지 설정은 안됨.

//이미지의 로딩과 onload -> 이미지 객체에 어떤 이미지가 들어갈지 
//이미지 파일로부터 이미지를 로딩 시키기 위해서는 Image객체의 src프로퍼티 이용

/*img.onload=function(){  //이미지객체가 로드 완료되면 함수 실행한다.
	~~~ //img 객체에 로드된 이미지를 그리는 코드 
}
img.src="test.jpg";*/ //이미지가 로드가 된 다음 src설정 해준다 , img 객체에 ~~~파일로부터 이미지 로딩 시작

//img.src='test.jpg' 라인은 이미지 로딩을 시작시키는 코드
//이미지 로딩이 완료되어야 이미지를 그릴 수 있기 때문에, 이미지 로딩을 지시하기 전 
//img.onload 리스너에 이미지가 로딩 되었을 때 이미지를 그리는 JS코드를 쓴다.


//이미지 그리기
//이미지 로딩이 완료되면 컨텍스트 객체의 drawImage() 메서드를 이용하여 이미지를 그린다.
//drawImage(img,dx,dy)
//img : 이미지 객체 
//dx : 이미지 그릴 캔버스 좌표 x
//dy : 이미지 그릴 캔버스 좌표 y
//width : 이미지 폭 
//height: 이미지 높이 

let canvas=document.getElementById('cv1'); //canvas객체도 DOM객체화 시켰기 때문에 eventlistener쓸수 있다. onmousedown같은것
let context=canvas.getContext('2d');

/*let img=new Image();
img.onload=function(){
	context.drawImage(img,50,50,canvas.width,canvas.height); //canvas에 딱 맞게 설정하려면 canvas.width, canvas.height를 설정해준다
}
img.src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150401_71%2Fljs_orange_1427850519270YI1a6_JPEG%2Fshutterstock_108331763.jpg&type=sc960_832"
*/

canvas.addEventListener('mousemove',function(e){down(e)},false);
function down(e) //마우스가 움직이면 그림 그려지게
{
	startX=e.offsetX;
	startY=e.offsetY;
	console.log(startX); //그림 그리기가 가능한 상태 
}
function up() //마우스가 움직여도 그림 안그려지게 한다
{

}
function out() //캔버스 영역으로 밖으로 나간 상태 
{

}
function draw()//마우스 좌표 움직임에 따라 캔버스에 그림그리는 함수 




//pp.addEventListener("click",function (){함수의 실행문}); -> 익명함수 등록
//pp.addEventListener("click", ()=>{})




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









