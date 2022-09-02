
function remove(e) {
  let removeEl = e.parentNode;
  let parentEl = document.querySelector("#poll-answer-list");

  parentEl.removeChild(removeEl);
}

window.onload = function () {

  document.getElementById("btn-make").addEventListener("click", function () {
    var q = document.getElementById("question").value;  
    if (q=="") {
      alert("질문을 입력하세요!");
    }
    var a = document.getElementsByName("answer")[0].value;
    if (a == "") {
      alert("답변을 입력하세요!");
    }

    if (q != "" && a != "") {
      alert("투표가 생성되었습니다.");
      window.close();
    }
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