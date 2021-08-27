const hamburger = document.querySelector(".hamburger-menu");
const gnb = document.querySelector(".gnb");

hamburger.addEventListener("click", function () {
  gnb.classList.toggle("active");
});

const tab = document.querySelectorAll(".tab-item");
const group = document.querySelectorAll(".group");

const findIndex = (event) => {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === event.currentTarget) {
      return i;
    }
  }
};

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (event) {
    //먼저 tab과 group을 전부 비활성화(초기화)
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("active");
      group[j].classList.remove("active");
    }
    console.log(findIndex(event));

    //click한 tab과 group을 활성화
    this.classList.add("active");
    let indexNum = findIndex(event);
    group[indexNum].classList.add("active");
  });
}
