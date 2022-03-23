const h1 = document.querySelector(".hello h1"); // querySelector는 element를 가져올 때 첫 번째 하나만 가져옴.

function handleh1Click() {
    const currentColor = h1.style.color; 
    let newcolor; 
    if(currentColor === "blue"){
        newcolor = "tomato";
    } else{
        newcolor = "blue";
    }
    h1.style.color = newcolor
}


h1.addEventListener("click", handleh1Click); // event가 발생하면 function을 호출 함수()는 생략한다



