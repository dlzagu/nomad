const h1 = document.querySelector(".hello h1"); // querySelector는 element를 가져올 때 첫 번째 하나만 가져옴.

function handleh1Click() {  
    h1.style.color ="blue";
}

function mouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleh1Click); // event가 발생하면 function을 호출 함수()는 생략한다
h1.addEventListener("mouseenter", mouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
Window.addEventListener("online", handleWindowOnline)
console.dir(h1);  // dir 명령어를 통해서 event를 찾을 수 있음 앞에 on이 붙어있으면 event