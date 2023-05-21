var button = document.querySelector("button");
var weightInput = document.querySelector("#weight");
var heightInput = document.querySelector("#height");
var resultBMI = document.querySelector(".bmi");
var category = document.querySelector(".category");

button.addEventListener("click", function () {
  var weight = Number(weightInput.value);
  var height = Number(heightInput.value) / 100;
  var bmi = Math.round((weight / (height * height)) * 100) / 100;
  resultBMI.innerHTML = bmi;

  if (bmi < 18.5) {
    category.innerHTML = "Underweight";
    category.style.color = "red";
    resultBMI.style.color = "red";
  } else if (bmi > 18.5 && bmi < 24.9) {
      category.innerHTML = " Healthy Weight";
      category.style.color = "green";
    resultBMI.style.color = "green";
  } else if (bmi > 25 && bmi < 29.9) {
    category.innerHTML = "Overweight";
    category.style.color = "red";
    resultBMI.style.color = "red";
  } else {
    category.innerHTML = "Obese";
    category.style.color = "red";
    resultBMI.style.color = "red";
  }
});
