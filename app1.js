const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username", loginInput.value);
    paintGreeting();

}

function paintGreeting() {
    const username = localStorage.getItem("username");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`;
}

if (localStorage.getItem("username") === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting();
}