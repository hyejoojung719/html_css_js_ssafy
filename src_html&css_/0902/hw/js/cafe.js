/*
1. 로그인 기능
- prompt 사용
- 로그인 성공 시 변경 사항
    - 오른쪽 상단 메뉴 변경
    - 프로필 사진 변경
2.로그아웃 기능
- 오른쪽 상단 메뉴와 프로필 사진 변경
3. 왼쪽 사이즈에 지역 선택 시 펼쳐지고 접기 기능
4. 투표 만들기 기능
- 관리자 버튼 클릭 시 투표 창 띄움
- 질문 내용, 답변 항목이 비어있는 경우 체크 -> alert 창
- 비어 있지 않은 경우 투표 생성 alert창 띄우고 투표 만들기 창 종료
5. 투표하기 기능
- 투표하기 버튼 클릭 시 radio에서 선택된 값을 alert 띄우기
*/

// localStorage에서 정보 얻어오기
// let question = localStorage.getItem("question");
// let pollBtnDiv = document.querySelector(".content-left-poll-btn");
// let pollViewDiv = document.querySelector(".content-left-poll");

window.onload = function () {
  // localStorage에서 poll이름의 data 얻기.
var poll = localStorage.getItem("poll");
// 투표가 보여질 div
var pollDiv = document.querySelector("#vote");
if (poll) {
  // localStorage에서 얻은 문자열을 JSON객체로 변환.
  var vote = JSON.parse(poll);
  var sdate = vote.start_date; // 시작일.
  var edate = vote.end_date; // 종료일.
  var question = vote.question; // 질문.
  var answers = vote.answers; // 답변항목.
  // 투표 화면 구성.
  var pollContent = '<div class="vote_title">[ 당신의 선택 ]</div>';
  pollContent += '<div class="vote_question">' + question + "</div>";
  pollContent += '<div class="vote_answer">';
  pollContent += "  <ul>";
  for (var i = 0; i < answers.length; i++) {
    pollContent += "<li>";
    pollContent += "    <label>";
    pollContent += '      <input type="radio" name="vote_answer" value="' + answers[i] + '" />' + answers[i];
    pollContent += "    </label>";
    pollContent += "  </li >";
  }
  pollContent += "</ul>";
  pollContent += "</div>";
  pollContent += '<div class="vote_button">';
  pollContent += '  <button class="button btn_primary" onclick="javascript:poll();">투표하기</button>';
  pollContent += '  <button class="button">결과보기</button>';
  pollContent += "</div>";
  pollContent += '<div class="vote_date">투표기간 : ' + dateFormat(sdate) + " ~ " + dateFormat(edate) + "</div>";
  // 투표 화면에 투표양식 추가.
  pollDiv.innerHTML = pollContent;
} else {
  // 진행중인 투표가 없을 경우 화면 추가.
  pollDiv.innerHTML = '<div class="vote_title">진행중인 투표가 없습니다.</div>';
}


  // 프로필 사진 익명으로
  document.getElementsByClassName("profile_img")[1].style.display = "none";
  // 로그아웃 버튼 안보이게
  document.getElementsByClassName("nav_link")[2].style.display = "none";
  document.getElementsByClassName("nav_link")[3].style.display = "none";
  
  // 로그인 기능
  document.getElementsByClassName("nav_link")[0].addEventListener("click", function () {
    
    id = prompt("아이디 입력");

    // console.log(result);
    if (id == "hyejoo") {
      pw = prompt("비밀번호 입력");
    } else {
      alert("아이디를 잘 못 입력함");
    }

    if (pw == "1234") {
      alert("로그인 성공!!");

      // 로그인 성공 시 -> 메뉴바, 프로필 사진 변경
      document.getElementsByClassName("nav_link")[0].style.display = "none";
      document.getElementsByClassName("nav_link")[1].style.display = "none";
      document.getElementsByClassName("nav_link")[2].style.display = "block";
      document.getElementsByClassName("nav_link")[3].style.display = "block";

      // 프로필 사진 변경
      document.getElementsByClassName("profile_img")[0].style.display = "none";
      document.getElementsByClassName("profile_img")[1].style.display = "block";

      // 투표 생성 버튼 띄우기
      document.getElementsByClassName("content-left-poll-msg")[0].style.display = "none";
      document.getElementsByClassName("content-left-poll-btn")[0].style.display = "block";

    } else {
      alert("비밀번호를 잘 못 입력함")
    }
  })

  // 로그아웃 기능
  document.getElementsByClassName("nav_link")[2].addEventListener("click", function () {
    // 프로필 사진 변경
    document.getElementsByClassName("profile_img")[0].style.display = "block";
    document.getElementsByClassName("profile_img")[1].style.display = "none";
    // 메뉴바 변경
    document.getElementsByClassName("nav_link")[0].style.display = "block";
    document.getElementsByClassName("nav_link")[1].style.display = "block";
    document.getElementsByClassName("nav_link")[2].style.display = "none";
    document.getElementsByClassName("nav_link")[3].style.display = "none";
  })

  // 지역 선택시 펼쳐지고 접어지는 기능
  var store_area = document.getElementsByClassName("store_area");
  var store_item_sub = document.getElementsByClassName("store_item_sub");

  // 일괄 버튼
  var store_display = document.getElementsByClassName("store_display");
  store_display[0].addEventListener("click", function () {
    store_display[1].style.display = "block";
    store_display[0].style.display = "none";

    for (var i = 0; i < store_item_sub.length; i++){
      store_item_sub[i].style.display = "block";
    }
  })
  store_display[1].addEventListener("click", function () { 
    store_display[1].style.display = "none";
    store_display[0].style.display = "block";

    for (var i = 0; i < store_item_sub.length; i++){
      store_item_sub[i].style.display = "none";
    }
  })

  // for (var i = 0; i < store_area.length;){
  //   store_area[i].addEventListener("click", function () {
  //     if (store_item_sub[i].style.display != "none") {
  //       store_item_sub[i].style.display = "none";
  //     } else {
  //       store_item_sub[i].style.display = "block";
  //     }
  //     i++;
  //   })
  // }

  // 서울
  store_area[0].addEventListener("click", function () {
    if (store_item_sub[0].style.display != "none") {
      store_item_sub[0].style.display = "none";
    } else {
      store_item_sub[0].style.display = "block";
    }
  })

  // 대전
  store_area[1].addEventListener("click", function () {
    if (store_item_sub[1].style.display != "none") {
      store_item_sub[1].style.display = "none";
    } else {
      store_item_sub[1].style.display = "block";
    }
  })

  // 구미
  store_area[2].addEventListener("click", function () {
    if (store_item_sub[2].style.display != "none") {
      store_item_sub[2].style.display = "none";
    } else {
      store_item_sub[2].style.display = "block";
    }
  })

  // 광주
  store_area[3].addEventListener("click", function () {
    if (store_item_sub[3].style.display != "none") {
      store_item_sub[3].style.display = "none";
    } else {
      store_item_sub[3].style.display = "block";
    }
  })

  // 투표 만들기
  document.getElementsByClassName("nav_link")[4].addEventListener("click", function () {
    window.open("pollmake.html", "cafe", "width=500, height=300, top=300, left=300");
  })

  // 투표하기 버튼 클릭 시 radio에서 선택된 값을 alert 띄우기
  document.getElementsByClassName("btn_primary")[0].addEventListener("click", function () {
    var selectValue = document.querySelector('input[type=radio][name=vote_answer]:checked');
    console.log(selectValue.value);
    alert(selectValue.value);
  })

}

function dateFormat(date){
  var yymmdd = date.split("-");
  return yymmdd[0].substr(2,2) + "." + yymmdd[1] + "." + yymmdd[2];
}

function remove(e) {
  let removeEl = e.parentNode;
  let parentEl = document.querySelector("#poll-answer-list");

  parentEl.removeChild(removeEl);
}

function makePoll(){
  document.getElementById("btn-make").addEventListener("click", function () {
    var sdate = document.querySelector("#start_date").value; // 시작일.
    var edate = document.querySelector("#end_date").value; // 종료일.
    if (!sdate || !edate) {
      // 시작, 종료일 유효성검사.
      alert("설문 기간 입력!!!");
      return;
    }
    var quest = document.querySelector("#question").value; // 질문.
    if (!quest) {
      // 질문 유효성검사.
      alert("질문 내용 입력!!!");
      return;
    }
  
    var answerInput = document.querySelectorAll('input[name="answer"]'); // 답변 항목.
    for (var i = 0; i < answerInput.length; i++) {
      // 답변항목 유효성검사.
      if (!answerInput[i].value) {
        alert("답변 항목 입력!!!");
        return;
      }
    }

    var answers = [];
    for (var i = 0; i < answerInput.length; i++) {
      answers.push(answerInput[i].value); // 답변 배열에 입력 data 넣기.
    }

     // 입력 data를 이용하여 JSON객체 생성.
    var poll = {
      start_date: sdate,
      end_date: edate,
      question: quest,
      answers: answers
    };

    var poll_json = JSON.stringify(poll); // JSON객체를 문자열 변환.

    localStorage.setItem("poll", poll_json); // localStorage에 넣기.

    alert("투표를 생성합니다.");
    opener.document.location.reload(); // 부모창 새로고침.
    self.close();
  })

  document.getElementById("btn-add").addEventListener("click", function () {
    let pollAnswerListDiv = document.querySelector("#poll-answer-list");

    pollAnswerListDiv.innerHTML += `
    <div class="poll-answer-item">
        <input type="text" name="answer" />
        <button type="button" id="btn-delete" class="button" onclick="remove(this)">삭제</button>
    </div>
    `
  })
}