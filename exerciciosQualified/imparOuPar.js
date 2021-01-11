// função para separar números par e ímpares
function pickIt(arr){
    var impares=[], pares=[];
      for(var i = 0; i < arr.length; i++) {
         if (arr[i] % 2 == 0) {
           pares.push(arr[i]);
         } else {
          impares.push(arr[i]);
         }
      }
      return [impares,pares];
  }