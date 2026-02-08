// SLIDESHOW DE FUNDO
// Slides do fundo
const slides = document.querySelectorAll(".slide");
let current = 0;

// ativa o primeiro slide
slides[current].classList.add("active");

// muda de slide a cada 5 segundos
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);


// LOGIN SIMULADO
function entrarNoLeague() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === "lol" && senha === "lol123") {
    mensagem.style.color = "#c8aa6e";
    mensagem.textContent = "⚔️ Bem-vindo a Summoners Rift!";
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "❌ Login ou senha inválidos.";
  }
}
