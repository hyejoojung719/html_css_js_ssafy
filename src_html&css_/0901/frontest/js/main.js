// js가 없는 객체를 참조하는 것을 방지하기 위해 사용
// html은 위에서부터 해석하기 때문에
// 객체가 생겨나기 전에 실행하면 안되므로,,
window.onload = function(){

    // 1. 투표 만들기 버튼 클릭 이벤트 핸들링(main.js)
    document.getElementById("btn-marketpoll")
    .addEventListener("click", function(){

        window.open("makepoll.html","poll","width=400, height=200");

    });

    // 4. index.html에선 로컬 스토리지에 질문이 있을 경우
    // 투표 화면을 출력하도록 함(main.js)
    // 문자열로 html 문서를 작성해서 innerHTML로 넣어줌
    // 투표만들기 버튼, 투표 엘리먼트 display 변경

};