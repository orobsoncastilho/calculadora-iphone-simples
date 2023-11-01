const dislpay = document.getElementById('display');

const botoes = document.querySelectorAll('button');

let expressao = '';

botoes.forEach(function(botao){
    botao.addEventListener('click', function() {
        const valor = botao.textContent;

        if (valor === '=') {
            try {
                expressao = eval(expressao);
                dislpay.value = expressao;
            } catch (error) {
                dislpay.value = 'Erro';
            }
        } else if (valor === 'C') {
            expressao = '';
            dislpay.value = '';
        } else {
            expressao += valor;
            dislpay.value = expressao;
        }
    });
});