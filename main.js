const content1 = document.querySelector(".content");
const content2 = document.querySelector(".content2");
const btnCookie = document.querySelector(".fortuneCookie");
const btnAgain = document.querySelector(".btnAgain");
const messageParagraph = document.querySelector(".message p");
const contentParagraph = document.querySelector(".contentParagraph")
const reloadParagraph = document.querySelector(".reloadParagraph")
const reload = document.querySelector(".reload")

let messages = [
  "A sorte favorece os ousados.",
  "A paciência é uma virtude recompensadora.",
  "O sucesso vem para aqueles que persistem.",
  "Sua determinação te levará longe.",
  "A felicidade está nas pequenas coisas.",
  "Você é mais forte do que pensa.",
  "Grandes surpresas estão a caminho.",
  "A gratidão transforma o que temos em suficiente."
];

function showRandomMessage() {
  if (messages.length > 0) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    messageParagraph.textContent = randomMessage;
    
    messages.splice(randomIndex, 1);
    
    content1.classList.add("hide");
    content2.classList.remove("hide");
  } else {
    reloadParagraph.classList.toggle("hide")
    reloadParagraph.style.color = "red"
    contentParagraph.style.color = "red";
    contentParagraph.textContent = "Você já viu todas as suas sortes de hoje!";
    reload.classList.toggle("hide")
  }
}

function resetFortuneCookie() {
  content1.classList.remove("hide");
  content2.classList.add("hide");
}

function reloadPage() {
  location.reload()
  alert("Recarregado!")
}

btnCookie.addEventListener("click", showRandomMessage);
btnAgain.addEventListener("click", resetFortuneCookie);
reload.addEventListener("click", reloadPage)