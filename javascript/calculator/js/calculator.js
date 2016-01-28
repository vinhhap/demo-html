var display = function(char) {
  if(document.getElementById("result").value == 0 && !isNaN(char)) {
    document.getElementById("result").value = char;
  } else {
    document.getElementById("result").value += char;
  }
};
var getInput = function(event) {
  char = null;
  if(event.target.className == "number" || event.target.className == "operator" || event.target.className == "dot") {
    char = event.target.value;
    display(char);
  } else if(event.target.className == "reset") {
    reset();
  } else if(event.target.className == "factorial") {
    current = factorial();
    specialDisplay(current);
  } else if(event.target.className == "square-root"){
    current = equal();
    specialDisplay(Math.sqrt(current));
  } else if(event.target.className == "square") {
    current = square();
    specialDisplay(current);
  } else if(event.target.className == "equal") {
    current = equal();
    specialDisplay(current);
  }
};
var specialDisplay = function(current) {
  document.getElementById("result").value = current;
}
var equal = function() {
  return eval(document.getElementById("result").value);
};
var reset = function() {
  document.getElementById("result").value = 0;
};
var square = function() {
  return equal() * equal();
}
var factorial = function() {
  kq = 1;
  for(var i = 1; i <= equal(); i++) {
    kq *= i;
  }
  return kq;
};