// if & switch

let dayInfo;
dayInfo = new Date().getDay();

console.log(dayInfo);

let day;
switch (dayInfo) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
  default:
}

console.log(day);

let day2;
if (dayInfo === 0) {
  day2 = "일요일";
} else if (dayInfo === 1) {
  day2 = "월요일";
} else if (dayInfo === 2) {
  day2 = "화요일";
} else {
  day2 = "수요일";
}

console.log(day2);
