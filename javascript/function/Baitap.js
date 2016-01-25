//Bai Tap 1
var binhPhuong = function(x) {
  return x * x;
};
console.log(binhPhuong(10));

//Bai Tap 2
var binhPhuongTong = function(a, b, c) {
  return Math.sqrt(3 * a + 2 * b - c);
};
console.log(binhPhuongTong(1, 2, 3));

//Bai Tap 3
var catChuoi = function(str) {
  return str.substring(0, 9) + '...';
};
console.log(catChuoi("sadasdasdasdasdasdasdasdsadasdsadasdsadsadsadsadasdasdsadsadsadsdsadsadsad"));

//Bai Tap 4
var vietHoaChuDau = function(str) {
  return str[0].toUpperCase() + str.substring(1);
};
console.log(vietHoaChuDau("quan bi dep trai"));

//Bai Tap 5
var soNhoNhat = function(num_arr) {
  num_arr = num_arr.sort();
  return num_arr[0];
};
console.log(soNhoNhat([3,5,7,1,2]));

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
  age: 30,
  say: function(){
    return("Toi la " + this.firstName + " " + this.lastName + ", " + this.age + " tuoi.");
  }
};
var student = {
  firstName: "Quan",
  lastName: "Nguyen",
  age: 20,
  say: function(){
    return("Toi la " + this.firstName + " " + this.lastName + ", " + this.age + " tuoi.");
  }
};
var parent = {
  firstName: "Bo",
  lastName: "Me",
  age: 100,
  say: function(){
    return("Toi la " + this.firstName + " " + this.lastName + ", " + this.age + " tuoi.");
  }
};
var aboutMe = function() {
  console.log(teacher.say());
  console.log(student.say());
  console.log(parent.say());
};
aboutMe();