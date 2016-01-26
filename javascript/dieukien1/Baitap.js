//Bai Tap 1
var soLon = function(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(soLon(1, 2));

//Bai Tap 2
var giaiThua = function(a) {
  if(isNaN(a) || a < 0) {
    return "Loi";
  } else {
    kq = 1;
    for(var i = 1; i <= a; i++) {
      kq *= i;
    }
    return kq;
  }
};
console.log(giaiThua(5));

//Bai Tap 3
var xepChan = function(num_arr) {
  chuoi = [];
  for(var i = 0; i < num_arr.length; i++) {
    if(num_arr[i] % 2 == 0) {
      chuoi.push(num_arr[i]);
    }
  }
  chuoi = chuoi.sort();
  return chuoi.reverse();
};
console.log(xepChan([5, 8, 1, 3, 6]));

//Bai Tap 4
var kiemTra = function(user) {
  if(user["username"].length > 0 && user["username"].length <= 20 && user["password"].length >= 6 && user["password"].length <= 32 && user["confirm"] == user["password"]) {
    return 1;
  } else {
    return 0;
  }
};
console.log(kiemTra({username: "username", password: "secret", confirm: "secret"}));