//Bai Tap 1
var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();
var season = "";
var between = function(x, min, max) {
  return x >= min && x <= max;
};
if(between(month, 1, 3)) {
  season = "xuan"
} else if(between(month, 4, 6)) {
  season = "ha";
} else if(between(month, 7, 9)) {
  season = "thu";
} else {
  season = "dong";
}
console.log(date + " - " + month + " - " + year + " - " + season);

//Bai Tap 2
var catChuoi = function(str) {
  type = typeof str;
  if(type == "number") {
    str.toString();
  } else if(type == "string") {
    if(str.length <= 10) {
      return str;
    } else {
      return str.substr(0, 10) + "...";
    }
  }
};
console.log(catChuoi("asdasdasdsadsadasd"));

//Bai Tap 3
var chuyenDiem = function(diem) {
  chu = "";
  if(between(diem, 0, 3.9)) {
    chu = "F";
  } else if(between(diem, 4, 5.4)) {
    chu = "D";
  } else if(between(diem, 5.5, 6.9)) {
    chu = "C";
  } else if(between(diem, 7, 8.4)) {
    chu = "B";
  } else if(between(diem, 8.5, 10)) {
    chu = "A";
  }
  return chu;
};
console.log(chuyenDiem(8.1));

//Bai Tap 4
var translate = function(ma_vung) {
  hello = ""
  switch(ma_vung) {
    case "Armenian":
      hello = "Parev";
      break;
    case "Bulgarian":
      hello = "Zdravei";
      break;
    case "Cantonese":
      hello = "Nei Ho";
      break;
    case "Czech":
      hello = "Ahoj";
      break;
    default:
      hello = "Xin chao";
  }
  return hello;
};
console.log(translate("Czech"));

//Bai Tap 5
var viTri = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == true) {
      return i;
    }
  }
};
console.log(viTri([false, false, false, true, false, true, false, true]));