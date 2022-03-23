const toBuy = ["portato", "tomato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";   // 인덱스[2]를 바꿈
console.log(toBuy);
toBuy.push("meat");  // meat을 ㅣist에 추가
console.log(toBuy);

function minusFive(potato) {
	console.log(potato - 5)
}

minusFive(5, 10, 12); // 많은 인수를 입력해도 첫 번째 인수를 계산함

const calculator = {
	add: function (a, b) {
		console.log(a + b);
	},
	minus: function (a, b) {
		console.log(a - b);
	},
	div: function (a, b) {
		console.log(a / b);
	},
}

calculator.add(1, 3);
calculator.minus(1, 3);
calculator.div(1, 3);