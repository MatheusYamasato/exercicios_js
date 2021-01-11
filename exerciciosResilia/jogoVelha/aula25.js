// Variáveis "globais" que controlam nosso jogo:
// - Jogador atual: "X" ou "O"
var jogador;
// - Array com os valores das marcações
var tabuleiro;
// - Guarda o ganhador atual: "X", "O" ou "" (string vazia => jogo não terminou ou deu velha)
var ganhador;
// - Quantidade de blocos não marcados: usamos para testar se deu velha caso não tenha nenhum ganhador
var blocosRestantes;

// Iniciamos o jogo!
novoJogo();

// Declaração da função que cria um novo jogo
function novoJogo()
{
    // Atribui os valores de início de jogo para as variáveis de controle:
    jogador = "X";
    tabuleiro = [ "", "", "", "", "", "", "", "", "" ];
    ganhador = "";
    blocosRestantes = 9;

    // Aqui utilizamos o DOM! Mas... por qual motivo???
    // É porque precisamos "limpar" o texto de dentro dos nossos quadrados!
    // Como os ids dos quadrados vão de 0 a 8 (olhe no HTML!), nós podemos pegar cada elemento individualmente neste laço!
    for ( var i = 0; i <= 8; i++ )
    {
        // Pegamos o elemento com o id armazenado em `i`
        var quadrado = document.getElementById(i);
        // Limpamos o texto desse elemento
        quadrado.innerText = "";
    }
}

// Função chamada toda vez que clicarmos em um quadrado. Recebemos um valor como parâmetro, nesse
// caso o parâmetro será o id do quadrado (olhe no HTML!). Assim, se por exemplo clicarmos no quadrado do
// meio (cujo id é 4), a função será chamada desta forma: `clicouNoQuadrado(4)` (olhe no HTML!)
function clicouNoQuadrado( id )
{
    // Pedimos para o DOM buscar o elemento que foi clicado.
    // Lembrem-se: esta função retorna um HTMLElement e não uma string ou um number.
    // Caso tenham dúvida de quais atributos desse objeto vocês conseguem acessar,
    // olhem na documentação da MDN!
    var quadradoClicado = document.getElementById( id );
    
    // Se ele ainda não foi marcado, ou seja, seu texto está vazio
    // e se não há um ganhador (jogo ainda não terminou)
    if ( quadradoClicado.innerText == "" && ganhador == "" )
    {
        // Marcamos dentro do array também (para poder checar quem ganhou futuramente)
        // Acessar a posição igual ao id é uma sacada para facilitar a nossa vida:
        // - Nós sabemos que os ids vão de 0 a 8 (olhe no HTML!);
        // - Nós também sabemos que o nosso array tem 9 elementos (índices vão de 0 a 8)
        // - Assim, quando alguém clicar, por exemplo, no quadrado de id 4 (quadrado do meio) ele vai alterar
        //   a posição 4 do array (posição do meio). Já no quadrado de id 0 (quadrado inicial) vai alterar
        //   a posição 0 do array (posição inicial).
        // 
        // Exemplo: Clicamos no quadrado do meio e o jogador atual é o "O". O código abaixo seria equivalente a:
        // tabuleiro[4] = "O";
        //
        tabuleiro[ id ] = jogador;
        // Marcamos o quadrado
        quadradoClicado.innerText = jogador;
        // Diminuímos a quantidade de blocos restantes
        blocosRestantes--;


        // Trocamos o jogador!
        if ( jogador == "X" )
        {
            // Se quem jogou for o "X", agora é a vez do "O"
            jogador = "O";
        }
        else
        {
            // Se quem jogou foi o "O", agora é a vez do "X"
            jogador = "X";
        }

        // Depois de marcar, tentamos descobrir se alguém ganhou
        ganhador = quemGanhou();

        // Se quem ganhou foi o "X"
        if ( ganhador == "X" )
        {
            alert("Jogador 1 ganhou!");
        }
        // Se quem ganhou foi o "O"
        else if ( ganhador == "O" )
        {
            alert("Jogador 2 ganhou!");
        }
        // Se ninguém ganhou
        else
        {
            // Caso não tenha mais quadrados restantes para marcar, ninguém ganhou
            if ( blocosRestantes == 0 )
            {
                alert("Deu velha");
            }

            // Caso ainda tenha blocos restantes, segue o jogo!
        }
    }
}

function quemGanhou()
{
    // Retorna o ganhador.
    // Caso satisfaça alguma das condições abaixo, retorna o valor que está naquelas linhas: "X", "O" ou ""

    // - Horizontal:
    
    // Primeira linha
    //
    // [0]|[1]|[2]
    // ---|---|---
    //  3 | 4 | 5
    // ---|---|---
    //  6 | 7 | 8
    if ( tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2] )
    {
        return tabuleiro[0];
    }
    // Segunda linha
    //
    //  0 | 1 | 2
    // ---|---|---
    // [3]|[4]|[5]
    // ---|---|---
    //  6 | 7 | 8
    if ( tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5] )
    {
        return tabuleiro[3];
    }
    // Terceira linha
    //
    //  0 | 1 | 2
    // ---|---|---
    //  3 | 4 | 5
    // ---|---|---
    // [6]|[7]|[8]
    if ( tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8] )
    {
        return tabuleiro[6];
    }

    // - Vertical:

    // Primeira coluna
    //
    // [0]| 1 | 2
    // ---|---|---
    // [3]| 4 | 5
    // ---|---|---
    // [6]| 7 | 8
    if ( tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6] )
    {
        return tabuleiro[0];
    }
    // Segunda coluna
    //
    //  0 |[1]| 2
    // ---|---|---
    //  3 |[4]| 5
    // ---|---|---
    //  6 |[7]| 8
    if ( tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7] )
    {
        return tabuleiro[1];
    }
    // Terceira coluna
    //
    //  0 | 1 |[2]
    // ---|---|---
    //  3 | 4 |[5]
    // ---|---|---
    //  6 | 7 |[8]
    if ( tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8] )
    {
        return tabuleiro[2];
    }

    // - Diagonal:
    
    // Esquerda
    //
    // [0]| 1 | 2
    // ---|---|---
    //  3 |[4]| 5
    // ---|---|---
    //  6 | 7 |[8]
    if ( tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8] )
    {
        return tabuleiro[0];
    }
    // Direita
    //
    //  0 | 1 |[2]
    // ---|---|---
    //  3 |[4]| 5
    // ---|---|---
    // [6]| 7 | 8
    if ( tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6] )
    {
        return tabuleiro[2];
    }

    return "";
}
