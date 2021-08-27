// 변수(let, const), if 구문, 증가연산

let a = 1;
const b = 5;
a = 3;
// b = 3;

console.log(a);
console.log(b);
// if 구문
if (a >= 3) {
  console.log(">=true");
}

if (a < 3) {
  console.log("<true");
} else {
  console.log("<false");
}

// 삼항 연산자 : 위와 동일한 조건문을 단순화
// meaning : if (a<3) is true, 3<ture, else 3<false
let result = a < 3 ? "3<true" : "3<false";
console.log(result);

// 0이면 false, 그 외엔 항상 true
if (a - 1) {
  console.log("-true");
} else {
  console.log("-false");
}

if (!(b > 3)) {
  console.log("!true");
} else {
  console.log("!false");
}

if (1 == "1") {
  console.log("==true");
} else {
  console.log("==false");
}

if (1 === "1") {
  console.log("===true");
} else {
  console.log("===false");
}

console.log((a = a + 1));
console.log((a += 1));
console.log(a++);
console.log(++a);
