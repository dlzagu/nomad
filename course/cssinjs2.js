const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   h1.classList.toggle("clicked");
}
// 밑에는 h1.classList.toggle("clicked");와 동일
// const clickedClass = "clicked";
// if (h1.classList(clickedClass)){
//     h1.classList.remove(clickedClass);
// } else {
//     h1.classList.add(clickedClass);
// }

h1.addEventListener("click", handleTitleClick);


