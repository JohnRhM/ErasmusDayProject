const btnEmpadao = document.getElementById("btnEmpadao");
const btnBacalhau = document.getElementById("btnBacalhau");
const btnTripas = document.getElementById("btnTripas");
const btnCaldoVerde = document.getElementById("btnCaldoVerde");
const btnPasteis = document.getElementById("btnPasteis");
const btnFrancesinha = document.getElementById("btnFrancesinha");
const btnAlheira = document.getElementById("btnAlheira");

btnEmpadao.addEventListener("click", () => {
  location.href = "quiz.html?id=empadao";
});

btnBacalhau.addEventListener("click", () => {
  location.href = "quiz.html?id=bacalhau";
});

btnTripas.addEventListener("click", () => {
  location.href = "quiz.html?id=tripas";
});

btnCaldoVerde.addEventListener("click", () => {
  location.href = "quiz.html?id=caldoVerde";
});

btnPasteis.addEventListener("click", () => {
  location.href = "quiz.html?id=pasteis";
});

btnFrancesinha.addEventListener("click", () => {
  location.href = "quiz.html?id=francesinha";
});

btnAlheira.addEventListener("click", () => {
  location.href = "quiz.html?id=alheira";
});

btnCozido.addEventListener("click", () => {
  location.href = "quiz.html?id=cozido";
});
