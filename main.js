// Question 2
const familyMembers = document.getElementById("family-members"),
  demo = document.getElementById("demo");

familyMembers.onchange = function () {
  demo.innerHTML = "Processing";
  let counter = 0;
  let myVar = setInterval(function () {
    demo.innerHTML += " . ";
    counter++;
    if (counter == 4) {
      clearInterval(myVar);
      switch (familyMembers.value) {
        case "B":
          demo.innerHTML = "Hello dad!";
          break;
        case "M":
          demo.innerHTML = "Hello mom!";
          break;
        case "A":
          demo.innerHTML = "Hello bro!";
          break;
        case "E":
          demo.innerHTML = "Hello little sis!";
          break;
        default:
          break;
      }
    }
  }, 500);
};
