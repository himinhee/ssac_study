// Array, class, object

const arr = ["a", "b", "c", "d", "e"];
const arr1 = new Array("가", "나", "다");

//index 번호를 이용해 배열에 access
console.log(arr[0]);
console.log(arr1[0]);

arr[2] = "z";
console.log(arr[2]);

for (let i = 0; i < 3; i++) {
  console.log(arr[i]);
}

// 배열 데이터는 배열 객체 데이터 형태
// 배열 개수 확인 : 배열객체이름.length

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(window);

// 상단 alert 박스 생성
window.alert("hello world");

// car 라는 object 생성
const car = {
  name: "fiat",
  model: "500",
  color: "white",
  print: function () {
    console.log(this.name + " " + this.model + " " + this.color);
  }
};

car.name = "kia";
car["color"] = "red";

console.log(car.name);
console.log(car["color"]);

car.print();

// class 정의
class PersonClass {
  // property 정의
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // methode 정의
  print() {
    console.log(this.name, this.year);
  }
}

// PersonClass 를 이용해서 객체 생성
let tom = new PersonClass("Tom", "10");
let jane = new PersonClass("Jane", "10");

console.log(tom);
console.log(jane);

console.log(tom.name, tom.year);
console.log(jane.name, jane.year);

tom.print();
jane.print();
