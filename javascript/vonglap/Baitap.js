//Bai Tap 1
var giaiThua = function(n) {
  kq = 1;
  for(var i = 1; i <= n; i++) {
    kq *= i;
  }
  return kq;
};
console.log(giaiThua(3));

//Bai Tap 2
var daoNguoc = function(str) {
  kq = [];
  for(var i = 0; i < str.length; i++) {
    kq.push(str[i]);
  }
  kq.reverse();
  return kq.join('');
};
console.log(daoNguoc("quan"));

//Bai Tap 3
var duplicate = function(str) {
  kq = "";
  for(var i = 0; i < 10; i++) {
    kq += str + "-";
  }
  return kq.substring(0, kq.length - 1);
};
console.log(duplicate("123"));

//Bai Tap 4
var sapXep = function(hoc_vien) {
  kq = hoc_vien.sort();
  for(var i = 0; i < hoc_vien.length; i++) {
    console.log(kq[i]);
  }
};
console.log(sapXep(["Nguyen Nam Quan", "Quan Nam Nguyen", "Nam Nguyen Quan"]));

//Bai Tap 5
var gapDoi = function(num_arr) {
  for(var i = 0; i < num_arr.length; i++) {
    num_arr[i] *= 2;
  }
  return num_arr;
}
console.log(gapDoi([1,2,3]));

//Bai Tap 6
var soDu = function(num_arr) {
  kq = [];
  for(var i = 0; i < num_arr.length; i++) {
    kq.push(num_arr[i] % 2);
  }
  return kq;
}
console.log(soDu([10, 3, 4, 5]));