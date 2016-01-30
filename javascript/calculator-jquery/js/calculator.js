var display = function(char) {
  (getResult() == 0 && !isNaN(char)) ? setResult(char) : appendResult(char);
};
var getResult = function() {
  return $('#result').val();
};
var setResult = function(char) {
  $('#result').val(char);
};
var appendResult = function(char) {
  setResult(getResult() + char);
};
var equal = function() {
  return eval(getResult());
};

$(document).ready(function() {
  $('.number').click(function() {
    display($(this).val());
  });
  $('.operator').click(function() {
    display($(this).val());
  });
  $('.dot').click(function() {
    display($(this).val());
  });
  $('.equal').click(function() {
    setResult(equal());
  });
  $('.reset').click(function() {
    setResult('0');
  });
  $('.square').click(function() {
    setResult(equal() * equal());
  });
  $('.square-root').click(function() {
    setResult(Math.sqrt(equal()));
  });
  $('.factorial').click(function() {
    kq = 1;
    for(var i = 1; i <= equal(); i++) {
      kq *= i;
    }
    setResult(kq);
  });
  $('.theme').click(function() {
    if($('table').hasClass('blue')){
      $('table').removeClass('blue');
      $('input[type="button"]').removeClass('red');
    } else {
      $('table').addClass('blue');
      $('input[type="button"]').addClass('red');
    }
  });
});