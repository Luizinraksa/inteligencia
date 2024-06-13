
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é melhor para prevenir a dengue?",
        alternativas: [
            {
                texto: "Eliminar focos de água parada?",
                afirmacao: "Boa."
            },
            {
                texto: "Usar repelentes de insetos.?",
                afirmacao: "Aí sim."
            }
        ]
    },
    {
        enunciado: "O que é melhor para tratar a dengue?",
        alternativas: [
            {
                texto: "Beber muitos líquidos e descansar.",
                afirmacao: "boa"
            },
            {
                texto: "Tomar medicamentos anti-inflamatórios.",
                afirmacao: "Simmm "
            }
        ]
    },
    {
        enunciado: "O que é melhor para evitar a proliferação do mosquito Aedes aegypti?",
        alternativas: [
            {
                texto: " Cobrir caixas d'água e piscinas. ?",
                afirmacao: "boa."
            },
            {
                texto: "Aplicar inseticidas regularmente",
                afirmacao: "Simm."
            }
        ]
    },
    {
        enunciado: "O que é melhor para a proteção pessoal contra a dengue?",
        alternativas: [
            {
                texto: "Usar roupas compridas e claras.",
                afirmacao: "boa"
            },
            {
                texto: "Manter janelas e portas fechadas.",
                afirmacao: "Claro né."
            }
        ]
    },
    {
        enunciado: "O que é melhor para conscientizar a população sobre a dengue?",
        alternativas: [
            {
                texto: "Campanhas educativas nas escolas.",
                afirmacao: "sim"
            },
            {
                texto: "Divulgação em mídias sociais e televisão.",
                afirmacao: "Simmm"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();