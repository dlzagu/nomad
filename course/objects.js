const player = {
    name: "nico",
    points: 10,
    far: true,
};
console.log(player);
console.log(player.name);
// console.log(player.["name"]); 위에랑 같은 의미 

player.fat = false;
console.log(player);
player.lastName = "potato";
console.log(player);
// 객체 안의 property를 업데이트도 할 수 있고 새롭게 만들 수 도 있다.