const loginInput = document.querySelector("#Login-form input");
const loginButton = document.querySelector("#Login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
}

loginButton.addEventListener("click",onLoginBtnClick);