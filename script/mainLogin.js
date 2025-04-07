const $btnSignIn = document.querySelector(".sign-in-btn"),
  $btnSignUp = document.querySelector(".sign-up-btn"),
  $signUp = document.querySelector(".sign-up"),
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
  }
});

// para registro de usuario

const $btnSignIn2 = document
  .getElementById("registroBlanco")
  .addEventListener("click", functionLogin);

function functionLogin() {
  $signIn.classList.toggle("active");
  $signUp.classList.toggle("active");
}

//   para iniciar sesion
const $btnSignIn3 = document
  .getElementById("inicioBlanco")
  .addEventListener("click", userRegistrer);

function userRegistrer() {
  document.querySelector(".login").style.display = "none";
}
// Crear login y usuario

document.getElementById("InicoSesion").addEventListener("click", loginVisible);

function loginVisible() {
  // quita la propiedad display none del login
  document.querySelector(".login").style.display = "flex";
}
