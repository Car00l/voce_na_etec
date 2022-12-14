let tentativas = 7;

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
        nome: "ADAMANTINA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "ITAPETININGA",
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
        nome: "ONIBUS",
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
        nome: "BATERIA",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "MONITOR",
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
        nome: "ESPAGUETE",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "ESPINAFRE",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "REPOLHO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "COXINHA",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "PIRULITO",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "FEIJOADA",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "GOIABA",
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
        nome: "COLORIR",
        categoria: "A????ES"
    },
    palavra052 = {
        nome: "ESQUEIRAR",
        categoria: "A????ES"
    },
    palavra053 = {
        nome: "CAMINHAR",
        categoria: "A????ES"
    },
    palavra054 = {
        nome: "ASSISTIR",
        categoria: "A????ES"
    },
    palavra055 = {
        nome: "COZINHAR",
        categoria: "A????ES"
    },
    palavra056 = {
        nome: "ESFREGAR",
        categoria: "A????ES"
    },
    palavra057 = {
        nome: "CHORAMINGAR",
        categoria: "A????ES"
    },
    palavra058 = {
        nome: "EXPLORAR",
        categoria: "A????ES"
    },
    palavra059 = {
        nome: "ESPREITAR",
        categoria: "A????ES"
    },
    palavra060 = {
        nome: "ESPIONAR",
        categoria: "A????ES"
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

    // Sumir a palavra e aparecer os tracinhos e espa??os conforme o acerto

    for (i = 0; i < palavraSecretaSorteada.length; i++) {

        // Se nao tiver nada naquela posi????o (a letra n??o for descoberta), adicionar um espa??o
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
    document.getElementById("tecla-" + letra).style.backgroundColor = "#DD1C1A"; // MUDAR COR DEPOIS

    // verificar se ainda tem tentativas
    if (tentativas > 0) {
        comparaListas(letra);
        mostrarPalavra();
    }

}


// Verifica se a letra seleciona esta na palavra e em qual posi??a??
function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra)

    // se errou a letra diminuir tentativas 
    if (posicao < 0) {
        tentativas--
        if (tentativas == 6) {
            $('#head').show();
        } else if (tentativas == 5) {
            $('#torso').show();
        } else if (tentativas == 4) {
            $('#right-arm').show();
        } else if (tentativas == 3) {
            $('#left-arm').show();
        } else if (tentativas == 2) {
            $('#right-leg').show();
        } else if (tentativas == 1) {
            $('#left-leg').show();
        } else if (tentativas == 0) {
            modalPerdeu();
        }
    }

    // se acertou a letra, a letra aparece na tela na posi????o da letra
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
                document.getElementById("tecla-" + letra).style.backgroundColor = "#086788"; // MUDAR COR DEPOIS
            }
        }
    }

    // verificando se todas as posi????es est??o iguais
    let vitoria = true;

    // se alguma das posi????es estiverem erradas, transforma em false
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        modalGanhou();
    }

}

//Bot??o de recarregar a p??gina
function modalPerdeu() {
    $('#modalPerdeu').modal('show');
    palavra_modal.innerHTML = palavra_modal.innerHTML + "<div class='palavra_modal font-weight-bold'>" + palavraSecretaSorteada + "</div>";
}

function modalGanhou() {
    $('#modalGanhou').modal('show');
    palavra_modal2.innerHTML = palavra_modal2.innerHTML + "<div class='palavra_modal2 font-weight-bold'>" + palavraSecretaSorteada + "</div>";
}

//O que fez funcionar o Refresh
const btn = document.querySelector('#Fechar');

btn.addEventListener('click', () => {
    location.reload();
});

const btn1 = document.querySelector('#close');

btn1.addEventListener('click', () => {
    location.reload();
});


//SCRIPT DA FORCA
//ESCONDER PARTES DA FORCA
$('.hide').hide();