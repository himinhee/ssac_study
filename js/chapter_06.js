//Scope

//Global Scope (전역 범위)
let name = "Tom";
function sumPrint() {
  //Function scope
  let sum = 50;
  for (let i = 0; i < 3; i++) {
    //Block scope
    let msg = "Hello world";
  }
  console.log(name);
  console.log(sum);
  //하기 명령은 error : msg는 block scope의 변수이기 때문
  // console.log(msg);
}

// Global scope에 입력
console.log(name);

//하기 명령은 error : sum는 function scope의 변수이기 때문
// console.log(sum);

//하기 명령은 error : msg는 block scope의 변수이기 때문
// console.log(msg);

// var의 경우 global scope 과 function scope 만 가능
// var은 block scope은 불가

//this
let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);

//Global 'this' = window
console.log(this);

let x = this;
x.alert("Msg");
this.alert("Msg2");

//function scope 에서의 this = window
function type() {
  console.log(this);
}

type();
