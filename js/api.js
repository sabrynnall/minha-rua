const inputCep = document.querySelector('#cep');
const inputRua = document.querySelector('#rua');
const inputComplemento = document.querySelector('#complemento');
const inputBairro = document.querySelector('#bairro');
const inputUF = document.querySelector('#UF');
const BASE_URL = 'https://brasilapi.com.br/api';

inputCep.onkeyup = async (evento) => {
    if(inputCep.value.length < 8) {
        return;
    }
// fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: 'GET',
    });
// extraindo json
    const conteudoResposta = await resposta.json();
//atribuindo os dados da resposta nos inputs do html
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;

    console.log(conteudoResposta)
    alert('Cep completo: ' + inputCep.value);
};