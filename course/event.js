const title = document.querySelector(".hello h1"); // querySelector는 element를 가져올 때 첫 번째 하나만 가져옴.

function handleTitleClick() {  
    title.style.color ="blue";
}

function mouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick); // event가 발생하면 function을 호출 함수()는 생략한다
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


console.dir(title);  // dir 명령어를 통해서 event를 찾을 수 있음 앞에 on이 붙어있으면 event