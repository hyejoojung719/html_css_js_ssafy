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


window.onload = function () {
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
