window.onload = function () {
  //2. 답변항목 추가 버튼 클릭 이벤트 핸들링(poll.js)
    document.getElementById("btn-add").addEventListener("click",function(){
        //1. 삭제 버튼 엘리먼트 만들기
        let buttonEl = document.createElement("button");
        buttonEl.setAttribute("class","button");
        // 텍스트 노드 만들어서 버튼의 자식으로 추가
        buttonEl.appendChild(document.createTextNode("삭제"));
        //삭제 버튼 클릭 이벤트 핸들링
        buttonEl.addEventListener("click",function(){

            //삭제할 엘리먼트의 부모 엘리먼트
            let parentEl = document.getElementById("poll-answer-list");
            // 버튼 엘리먼트의 부모 엘리먼트(삭제될 엘리먼트)
            let removeEl = buttonEl.parentNode;

            // 부모로부터 자식 삭제
            parentEl.removeChild(removeEl);
        })

        //2. 입력 input 엘리먼트 만들기


        //3. div 엘리먼트 만들기

        //4. div 엘리먼트에 자식으로 input과 삭제 버튼 넣어주기

        //5. list에 div를 자식으로 추가하기 
    });

    // 3. 투표 생성 버튼 클릭 이벤트 핸들링(poll.js)
        // 1) 질문, 답변 항목 유효성 검사

        // 2) 질문, 답변 항목 항목을 localstorage에 저장 
            // - 문자열로 저장

        // 3) 투표생성 창 닫고, 부모창 새로고침

        // JSON.stringify({"a" : 123}) '{"a":123}'
};
