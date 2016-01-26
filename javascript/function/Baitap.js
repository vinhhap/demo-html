//Bai Tap 1
var binhPhuong = function(x) {
  return x * x;
};
console.log(binhPhuong(10));

//Bai Tap 2
var binhPhuongTong = function(a, b, c) {
  return Math.pow(3 * a + 2 * b - c, 2);
};
console.log(binhPhuongTong(1, 2, 3));

//Bai Tap 3
var catChuoi = function(str) {
  return str.substring(0, 10) + '...';
};
console.log(catChuoi("sadasdasdasdasdasdasdasdsadasdsadasdsadsadsadsadasdasdsadsadsadsdsadsadsad"));

//Bai Tap 4
var vietHoaChuDau = function(str) {
  return str[0].toUpperCase() + str.substring(1);
};
console.log(vietHoaChuDau("welcome to Techmaster"));

//Bai Tap 5
var soNhoNhat = function(num_arr) {
  num_arr = num_arr.sort();
  return num_arr[0];
};
console.log(soNhoNhat([100, 20, 8, 1, 1, 0]));

//Bai Tap 6
var xepTen = function(hoc_vien) {
  hoc_vien = hoc_vien.sort();
  return hoc_vien.join("\r\n");
};
console.log(xepTen(["Nguyen Nam Quan", "Quan Nam Nguyen", "Nam Nguyen Quan"]));

//Bai Tap 7
var teacher = {
  firstName: "Kim",
  lastName: "Dung",
  age: 30
};
var student = {
  firstName: "Quan",
  lastName: "Nguyen",
  age: 20
};
var parent = {
  firstName: "Bo",
  lastName: "Me",
  age: 100
};
var aboutMe = function() {
  return("Toi la " + this.firstName + " " + this.lastName + ", " + this.age + " tuoi.");
};
teacher.say = student.say = parent.say = aboutMe;
console.log(teacher.say());
console.log(student.say());
console.log(parent.say());