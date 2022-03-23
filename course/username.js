const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`; 위에랑 동일 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onLoginSubmit);

 