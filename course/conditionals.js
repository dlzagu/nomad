const age = parseInt(prompt("How old are you?")); //promt는 사용자 입력 명령어 오래된방식이라 잘 사용하지 않음


if (isNaN(age) || age < 0) {
	console.log("plaese write a number");
} else if (age < 18) {
	console.log("You are too young.");
} else if (age >= 18 && age <= 50) {        // && = and || = or
	console.log("You can dirnk");
} else if (age > 50 && age <= 80) {
	console.log("You should exercise");
} else if (age > 80) {
	console.log("You can do whatever you want.");
}



parseInt("15")          		 //문자열을 정수형으로 바꿔주는 함수 
isNaN()   				// 숫자인지 아닌지 판별해줌 숫자이면 false 숫자가 아니면 true