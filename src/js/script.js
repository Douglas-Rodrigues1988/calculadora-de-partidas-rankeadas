document.getElementById('rankForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obtém os valores de vitórias e derrotas
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    
    // Determina o nível com base nas vitórias
    let nivel;
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
    
    // Exibe o resultado
    document.getElementById('resultado').innerText = `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
});
