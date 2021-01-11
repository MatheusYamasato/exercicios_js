// somar os indíces até o numero informado (ex: 8 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 )
var summation = function (num) {
    var soma = 0
    for(var i = 0; i <= num; i++) {
      soma += i;
    }
    return soma;
  }