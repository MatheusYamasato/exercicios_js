// filtrar apenas tipos == número do array informado
function filterList(arr) {
    var arrayNumero = [];
    for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") {
          arrayNumero.push(arr[i])
        }
    }
  return arrayNumero;
}