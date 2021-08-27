//함수 선언
function compareOne() {
  if (1 == "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

//함수 사용 -> call
compareOne();

function compareNumber(number) {
  if (number === "1") {
    console.log("===true");
  } else {
    console.log("===false");
  }
}

compareNumber(1);
compareNumber(2);

function sum(number1, number2) {
  console.log(number1 + number2);
}

sum(1, 2);
sum(3, 5);

// 함수를 호출한 뒤 되돌려주는 것 : return
function sumReturn(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

console.log(sumReturn(10, 20));

// 함수 선언 방식들
function hello1() {
  console.log("hello function 1");
}

let hello2 = function () {
  console.log("hello function 2");
};

let hello3 = () => {
  console.log("hello function 3");
};

//함수 내용이 한줄인 경우 {} 생략 가능
let hello4 = () => console.log("hello function 4");

hello1();
hello2();
hello3();
hello4();

let hello5 = (number) => {
  console.log(number);
};

// 함수 내용이 한줄일 경우, parameter의 ()도 생략 가능. 즉 그냥 number로 입력 가능
let hello6 = (number) => console.log(number);

hello5(1);
hello6(2);
