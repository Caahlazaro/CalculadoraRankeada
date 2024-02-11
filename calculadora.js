//usei readline para interagir com o usuário no terminal Node.js.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //Define que a entrada para esta interface de leitura do processo
    output: process.stdout //Define que a saida para esta interface de leitura do processo
});
//Criando a função principal que realiza o cálculo do nível do jogador com base nas vitórias e derrotas. 
function calcularRanked(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

//A função recebe dois parâmetros (vitorias e derrotas), calcula o saldo subtraindo as derrotas das vitórias 
//sendo assim, determina o nível do jogador

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Construção da Mensagem Informativa sobre o saldo e o nivel do Usuario
    const mensagem = `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`;
    return mensagem;
}

//Mensagem de Interação com o Usuario, onde ele coloca as informações a serem Calculadas
rl.question('Digite a quantidade de vitórias: ', (vit) => {
    rl.question('Digite a quantidade de derrotas: ', (der) => {


        // Conversão das entradas para números inteiros
        const vitorias = parseInt(vit);
        const derrotas = parseInt(der);

        // Verificação se as entradas são números válidos
        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.error('Por favor, insira números válidos para vitórias e derrotas.');
        } else {
            
            // Chamada da função para calcular o nível e exibição do resultado
            const resultado = calcularRanked(vitorias, derrotas);
            console.log(resultado);
        }

         // Fechamento da interface de leitura
         rl.close();
    });
});
