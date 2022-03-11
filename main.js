const questions = document.getElementsByClassName("question"),
  activeQuestion = document.getElementsByClassName("question--active"),
  qShowBtn = document.getElementsByClassName("btn-q-show"),
  stepShowBtn = document.getElementById("btn-steps-show"),
  stepBox = document.getElementById("steps-box"),
  stepBoxContent = document.getElementById("steps-box-content"),
  closeStepBoxBtn = document.getElementById("close-steps-box");

// Steps in 3-block model
const q1Steps = ``,
  q2Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E).<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Chọn một trong bốn thành viên trong gia đình gồm Bố, Mẹ, Anh trai và Em gái.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng chọn 1 trong 4 options gồm Bố, Mẹ, Anh trai và Em gái.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, so sánh bằng switch statement để đưa ra kết quả phù hợp.<br>
   <strong>- Bước 3:</strong> Xuất kết quả nhận được từ bước 2 ra giao diện.<br>
  <strong>Đầu ra:</strong> Xuất ra lời chào phù hợp với thành viên trong gia đình được chọn.`,
  q3Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị vào 3 ô input từ giao diện.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị vào trong 3 inputs.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, lọc ra xem có phải các giá trị nhận được là số nguyên hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là số nguyên thì xét số tiếp theo.<br>
   <strong>- Bước 4:</strong> Nếu là số nguyên thì xét xem là số chẵn hay số lẻ, sau đó tăng biến đếm số lượng số chẵn, số lẻ lên, đồng thời đưa vào mảng chứa các số chẵn, số lẻ tương ứng.<br>
   <strong>- Bước 5:</strong> Xuất kết quả nhận được từ bước 4 ra giao diện sau khi đã xét xong cả 3 số.<br>
  <strong>Đầu ra:</strong> Xuất ra số lượng số lẻ, là những số nào, tương tự đối với số chẵn.`,
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

// ------- QUESTION 1 -------

// ------- QUESTION 2 -------
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

// ------- QUESTION 3 -------
const numbers = document.getElementsByClassName("q3-input"),
  q3SubmitBtn = document.getElementById("btn-q3-submit"),
  q3Result = document.getElementById("q3-result");

q3SubmitBtn.onclick = function () {
  var odd = 0,
    even = 0;

  const oddNums = [],
    evenNums = [];

  for (let i = 0; i < numbers.length; ++i) {
    // Cases:
    // numbers[i].value is a string
    // +numbers[i].value convert string to Number
    //     while return NaN if cannot convert

    // If the +numbers[i].valuer is not an integer -> continue
    if (!Number.isInteger(+numbers[i].value)) continue;

    !(numbers[i].value % 2)
      ? ++even && evenNums.push(numbers[i].value)
      : ++odd && oddNums.push(numbers[i].value);
  }

  q3Result.innerHTML = `- There are <strong>${odd} odd</strong> number(s) which are <strong>${oddNums.toString()}</strong><br> - There are <strong>${even} even</strong> number(s) which are <strong>${evenNums.toString()}</strong>`;
};
// ------- QUESTION 4 -------
const edges = document.getElementsByClassName("q4-input"),
  q4SubmitBtn = document.getElementById("btn-q4-submit"),
  q4Result = document.getElementById("q4-result");

q4SubmitBtn.onclick = function () {
  q4Result.innerHTML = "";

  const edge1 = +edges[0].value,
    edge2 = +edges[1].value,
    edge3 = +edges[2].value;

  if (
    !(edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1)
  ) {
    q4Result.innerHTML = `These 3 edges cannot form a triangle🚫`;
    return;
  }

  // Tam giac can
  if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>isosceles triangle</strong><br>`;

  // Tam giac deu
  if (edge1 === edge2 && edge1 === edge3 && edge1 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>equilateral triangle</strong><br>`;

  // Tam giac vuong
  if (
    edge1 ** 2 + edge2 ** 2 === edge3 ** 2 ||
    edge1 ** 2 + edge3 ** 2 === edge2 ** 2 ||
    edge2 ** 2 + edge3 ** 3 === edge1 ** 2
  )
    q4Result.innerHTML += `- These 3 edges form a <strong>right-angled  triangle</strong><br>`;
};
