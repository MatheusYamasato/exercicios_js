// retornar o número Maior e Menor numa string, separando com a função split() primeiramente
function  maiorEMenor(numbers) {
    var numbersSeparated = numbers.split(" ");
    var numeroMaior = Math.max(...numbersSeparated);
    var numeroMenor = Math.min(...numbersSeparated);
    return `${numeroMaior} ${numeroMenor}`; 
  }