function calcularTempoDecorrido(dataInicial) {
    const dataAtual = new Date();
    const [anoInicial, mesInicial, diaInicial] = [dataInicial.getFullYear(), dataInicial.getMonth(), dataInicial.getDate()];
    const [anoAtual, mesAtual, diaAtual] = [dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate()];

    let anos = anoAtual - anoInicial;
    let meses = mesAtual - mesInicial;
    let dias = diaAtual - diaInicial;

    if (dias < 0) {
        meses--;
        const ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();
        dias += ultimoDiaDoMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias };
}

function atualizarRelogio() {
    const dataInicial = new Date(2023, 10, 10); // Novembro é o mês 10, pois os meses começam em 0
    const resultado = calcularTempoDecorrido(dataInicial);
    
    const relogioDiv = document.querySelector('.relogio');
    let texto = '';

    if (resultado.anos > 0) {
        texto += `<span class="tempo-anos">${resultado.anos} ${resultado.anos > 1 ? 'anos' : 'ano'}</span>, `;
    }
    texto += `<span class="tempo-meses">${resultado.meses} ${resultado.meses > 1 ? 'meses' : 'mês'}</span> e `;
    texto += `<span class="tempo-dias">${resultado.dias} ${resultado.dias > 1 ? 'dias' : 'dia'}</span>`;
    relogioDiv.innerHTML = texto;
}

atualizarRelogio();
