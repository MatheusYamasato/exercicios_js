let cachorro = {
    nome: "",
    idade: "",
    alergias: [],
    alterarNome: function(nome) {
        this.nome = nome;
    },
    pegarNome: function() {
        return this.nome;
    },
    setarAlergia: function(alergia) {
        this.alergias.push(alergia);
        return this.alergias;
    },
    pegarAlergia: function() {
        return this.alergias;
    }

}

cachorro.alterarNome("Kiko");
cachorro.setarAlergia("Ibuprofeno");
cachorro.setarAlergia("Mel");

console.log(cachorro.nome);
console.log(cachorro.pegarNome());
console.log(cachorro.setarAlergia("UÉ"));
console.log(cachorro.pegarAlergia());