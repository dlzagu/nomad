function sayHello(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 23);
sayHello("dal", 24);
sayHello("lynn", 29);
// 문자열은 항상 " "안에 쓰기

function plus(a, b) {
	console.log(a + b);
}

plus(3, 5);

const player = {
	name: "nico",
	sayHello: function (otherPersonName) {
		console.log("hello " + otherPersonName + " nice to meet you")
	},
}
// 객체 안에서는 함수를 선언하는 방법이 약간 다름 
console.log(player.name);
player.sayHello("lynn");
