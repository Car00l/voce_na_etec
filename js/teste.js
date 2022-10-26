let tentativas = 6;

let listaDinamica = [];

// Gerar a palavra e a categoria
let palavraSecretaCategoria;
let palavraSecretaSorteada;

// Definir palavras e categorias
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria: "TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria: "TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria: "TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria: "TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria: "TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria: "TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria: "TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria: "TV E CINEMA"
    },
    palavra059 = {
        nome: "BOB ESPONJA",
        categoria: "TV E CINEMA"
    },
    palavra060 = {
        nome: "PANICO NA TV",
        categoria: "TV E CINEMA"
    }
];

// Sortear uma palavra da minha lista 
sortearPalavraSecreta();

function sortearPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    // Depois de sortear busca na lista a palavra e a categoria
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

mostrarPalavra();
// Mostrar na tela a categoria da palavra selecionada 
function mostrarPalavra() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    // Mostrar a palavra na tela 
    const palavraSecreta = document.getElementById("palavra_secreta");
    palavraSecreta.innerHTML = "";

    // Sumir a palavra e aparecer os tracinhos e espaços conforme o acerto

    for (i = 0; i < palavraSecretaSorteada.length; i++) {

        // Se nao tiver nada naquela posição (a letra não for descoberta), adicionar um espaço
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }

        // Se a letra for descoberta, adicionar a letra 
        else {
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

// Verificar tentativas
function verificaLetraEscolhida(letra) {

    // nao deixa selecionar uma letra que ja foi tentadata
    document.getElementById("tecla-" + letra).disabled = true;
    document.getElementById("tecla-" + letra).style.backgroundColor = "red"; // MUDAR COR DEPOIS

    // verificar se ainda tem tentativas
    if (tentativas > 0) {
        comparaListas(letra);
        mostrarPalavra();
    }

}


// Verifica se a letra seleciona esta na palavra e em qual posiçaõ
function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra)

    // se errou a letra diminuir tentativas 
    if (posicao < 0) {
        tentativas--
    }

    // so errou mais de 6 vezes, mensagem de perdeu
    if (tentativas == 0) {
        modalPerdeu();
    }

    // se acertou a letra, a letra aparece na tela na posição da letra
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
                document.getElementById("tecla-" + letra).style.backgroundColor = "blue"; // MUDAR COR DEPOIS
            }
        }
    }

    // verificando se todas as posições estão iguais
    let vitoria = true;

    // se alguma das posições estiverem erradas, transforma em false
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        modalGanhou();
    }

}
function modalPerdeu(){
    $('#modalPerdeu').modal('show');
}

function modalGanhou(){
    $('#modalGanhou').modal('show');
}
