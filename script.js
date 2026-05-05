function simularSemente() {
    const temp = parseFloat(document.getElementById('temperatura').value);
    const agua = document.getElementById('agua').value;
    const tempo = parseInt(document.getElementById('tempo').value);
    const resultBox = document.getElementById('resultado');
    const sementeTexto = document.getElementById('semente-texto');

    if (isNaN(temp) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos numéricos corretamente.");
        return;
    }

    let semente = "";

    if (temp >= 15 && temp <= 20 && agua === 'media' && tempo <= 60) {
        semente = "<strong>Alface:</strong> Ciclo curto, menor consumo de água por safra e ótimo para climas amenos.";
    } else if (temp > 20 && temp <= 25 && agua === 'baixa' && tempo <= 90) {
        semente = "<strong>Feijão:</strong> Excelente para rotação sustentável. Fixa nitrogênio no solo, reduzindo a necessidade de fertilizantes.";
    } else if (temp > 24 && temp <= 30 && agua === 'alta' && tempo > 90) {
        semente = "<strong>Milho:</strong> Base da alimentação, pode ser usado em rotação de culturas para manter o solo rico e produtivo.";
    } else {
        semente = "Nenhuma semente padrão encontrada para os parâmetros informados. <em>Dica: Tente testar com Temperatura de 22°C, Água Baixa e 75 dias (Feijão) para um resultado positivo.</em>";
    }

    sementeTexto.innerHTML = semente;
    resultBox.style.display = 'block';
}