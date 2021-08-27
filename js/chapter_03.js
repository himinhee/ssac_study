// 반복문 : for, while

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i < 20; i += 2) {
  console.log(10 / i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}

console.log(sum);

// while 을 이용한 조건부 무한반복
let a = 0;
while (true) {
  a++;
  if (a >= 10) {
    break;
  }
}
console.log(a);
