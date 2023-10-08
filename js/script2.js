const btnFamiglia1 = document.getElementById("btnFamiglia1");
const btnFamiglia2 = document.getElementById("btnFamiglia2");
const btnFamiglia3 = document.getElementById("btnFamiglia3");

btnFamiglia1.addEventListener("click", () => {
  location.href = "quiz.html?id=famiglia1";
});

btnFamiglia2.addEventListener("click", () => {
  location.href = "quiz.html?id=famiglia2";
});

btnFamiglia3.addEventListener("click", () => {
  location.href = "quiz.html?id=famiglia3";
});
