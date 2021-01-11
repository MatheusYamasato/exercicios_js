// somar dois arrays distintos
function arrayPlusArray(arr1, arr2) {
    var arrayOne = 0;
    var arrayTwo = 0;
    for(var i = 0; i < arr1.length; i++) {
      arrayOne = arrayOne + arr1[i];
    }
    
    for(var i = 0; i < arr2.length; i++) {
      arrayTwo = arrayTwo + arr2[i];
    }
    return arrayOne + arrayTwo;
}