//Bai Tap 1
var giaiThua = function(n) {
  kq = 1;
  for(var i = 1; i <= n; i++) {
    kq *= i;
  }
  return kq;
};
console.log(giaiThua(5));

//Bai Tap 2
var daoNguoc = function(str) {
  kq = [];
  for(var i = 0; i < str.length; i++) {
    kq.push(str[i]);
  }
  kq.reverse();
  return kq.join('');
};
console.log(daoNguoc("hello"));