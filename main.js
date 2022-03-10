const questions = document.getElementsByClassName("question"),
  activeQuestion = document.getElementsByClassName("question--active"),
  qShowBtn = document.getElementsByClassName("btn-q-show"),
  stepShowBtn = document.getElementById("btn-steps-show"),
  stepBox = document.getElementById("steps-box"),
  stepBoxContent = document.getElementById("steps-box-content"),
  closeStepBoxBtn = document.getElementById("close-steps-box");

// Steps in 3-block model
const q1Steps = ``,
  q2Steps = `<strong>Đầu vào:</strong> Chọn một trong bốn thành viên trong gia đình gồm Bố, Mẹ, Anh trai và Em gái.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng chọn 1 trong 4 options gồm Bố, Mẹ, Anh trai và Em gái.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, so sánh bằng switch statement để đưa ra kết quả phù hợp.<br>
   <strong>- Bước 3:</strong> Xuất kết quả nhận được từ bước 2 ra giao diện.<br>
  <strong>Đầu ra:</strong> Xuất ra lời chào phù hợp với thành viên trong gia đình được chọn.`,
  q3Steps = "q3",
  q4Steps = "q4";

const qSteps = [q1Steps, q2Steps, q3Steps, q4Steps];

stepShowBtn.onclick = function () {
  stepBox.style.display = "block";
};

closeStepBoxBtn.onclick = function () {
  stepBox.style.display = "none";
};

for (let i = 0; i < qShowBtn.length; ++i) {
  qShowBtn[i].onclick = function () {
    const activeQShowBtn =
      document.getElementsByClassName("btn-q-show--active");
    activeQShowBtn[0]?.classList?.remove("btn-q-show--active");

    qShowBtn[i].classList.add("btn-q-show--active");

    activeQuestion[0]?.classList?.remove("question--active");

    questions[i]?.classList?.add("question--active");

    stepBoxContent.innerHTML = qSteps[i];
  };
}

// QUESTION 1

// QUESTION 2
const familyMembers = document.getElementById("family-members"),
  q1Result = document.getElementById("q1-result");

familyMembers.onchange = function () {
  q1Result.innerHTML = "Processing";
  let counter = 0;
  let myVar = setInterval(function () {
    q1Result.innerHTML += " . ";
    counter++;
    if (counter == 4) {
      clearInterval(myVar);
      switch (familyMembers.value) {
        case "B":
          q1Result.innerHTML = "👨🏻 Hello Bố!";
          break;
        case "M":
          q1Result.innerHTML = "👩🏻 Hello Mẹ!";
          break;
        case "A":
          q1Result.innerHTML = "👦🏻 Hello Anh trai!";
          break;
        case "E":
          q1Result.innerHTML = "👩🏻‍🦱 Hello Em gái!";
          break;
        default:
          break;
      }
    }
  }, 700);
};

// QUESTION 3
const numbers = document.getElementsByClassName("q3-input"),
  q3SubmitBtn = document.getElementById("btn-q3-submit"),
  q3Result = document.getElementById("q3-result");

var odd = 0,
  even = 0;

const oddNums = [],
  evenNums = [];

q3SubmitBtn.onclick = function () {
  for (let i = 0; i < numbers.length; ++i) {
    // If the number is float -> continue
    if (numbers[i].value % 1 !== 0) continue;

    !(numbers[i].value % 2)
      ? ++even && evenNums.push(numbers[i].value)
      : ++odd && oddNums.push(numbers[i].value);
  }

  q3Result.innerHTML = `- There are ${odd} odd number(s) which are ${oddNums.toString()}<br> - There are ${even} even number(s) which are ${evenNums.toString()}`;
};
// QUESTION 4
