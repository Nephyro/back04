/* *******************************************************************************
* Objetivo: Arquivo responsável por manipular dados do arquivo estados_cidades.js
* Data: 29/08/2022  
* Autor: Anderson Ribeiro
* ********************************************************************************/

// Importando biblioteca com as informações dos estados
const listaDeEstados = require('./estados_cidades.js')

// Função responsável por mostrar as siglas dos estados e a qtde 
const getListaDeEstados = function(){
    let estados = []        //array vazia responsável por guardar as siglas

    // metódo responsável pela repetição
    // chamando a biblioteca, buscando pelos estados
    // e criando uma variável chamada estado
    listaDeEstados.estados.forEach(function(estado){
        // chamo a array vazia de antes, informo o que quero adicionar (push),
        // nesse cado as siglas de estado que está no outro arquivo
        estados.push(estado.sigla)
    })

    // retorna o array já com as siglas guardadas dentro
    // e retorna também a quantidade (length) de estados
    return {
        uf: estados,
        quantidade: estados.length
    }

}

// Função que buscará as informações pela sigla (uf)
const getDadosEstado = function(uf){
    let resultado

    listaDeEstados.estados.forEach(function(infoEstado){
        // condição para a repetição continuar
        // caso o conteúdo e o valor digitado condizer com alguma sigla 
        // do arquivo então adiciona (push) as informações na variável que se torna um json
        if(infoEstado.sigla === uf){
            resultado = {
                uf: infoEstado.sigla,
                descricao: infoEstado.nome,
                capital: infoEstado.capital,
                regiao: infoEstado.regiao
            }
        }
    })

    return resultado
}

// Função responsável por buscar a capital pela sigla do estado
const getCapitalEstado = function(uf){
    let resultado       //variável que guardará as informações da repetição

    listaDeEstados.estados.forEach(function(infoCapital){
        // caso a sigla digitada esteja condigente com alguma do outro arquivo
        // então fará um json com a variável para adicionar as informações
        if(infoCapital.sigla === uf){
            resultado = {
                uf: infoCapital.sigla, descricao: infoCapital.nome, capital: infoCapital.capital
            }
        }

    })

    return resultado

}

// Função responsável por buscar informações pela região
const getEstadosRegiao = function(regiao){
    let estados = []        // array que guardará as informações

    listaDeEstados.estados.forEach(function(infoRegiao){
        if(infoRegiao.regiao === regiao){
            // Adiciona a sigla e o nome caso seja verdadeiro
            estados.push({
                uf: infoRegiao.sigla,
                descricao: infoRegiao.nome
            })
        }
    })

    // retorna a região separada e os estados dessa região
    return {
        regiao: regiao,
        estados: estados
    }

}

const getCapitalPais = function(){
    let capitais = listaDeEstados.estados
        .filter(estado => estado.capital_pais?.capital === true)
        .map(estado => {
            return{
                capital_atual: estado.capital_pais?.ano_fim === false,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim,
            }
        })

    return { capitais }

}

// Função que buscará e exibirá todas as cidades de um estado
const getCidades = function(uf){
    let resultado

    listaDeEstados.estados.forEach(function(infoCidade){
        if(infoCidade.sigla === uf){
            resultado = {
                uf: infoCidade.sigla,
                descricao: infoCidade.nome,
                quantidade_cidades: infoCidade.cidades.length,
                cidades: infoCidade.cidades.map(cidade => cidade.nome)      //transformará elementos em um novo array
            }
        }
    })

    return resultado

}

// console.log(getListaDeEstados())
// console.log(getDadosEstado('SP'))
// console.log(getCapitalEstado('AC'))
// console.log(getEstadosRegiao('Sul'))
// console.log(getCidades('AC'))
console.log(getCapitalPais())