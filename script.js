const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você utiliza IA no seu dia a dia?",
        alternativas: [
            {
                texto: "Não, tive medo pois não entendo nada sobre.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Sim, procurei aprender usar.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "como voçê descobriu a IA e como utiliza-lá?",
        alternativas: [
            {
                texto: "descobri por conhecidos que entendem de tecnologia e me explicaram um pouco sobre.",
                afirmacao: "Aprendeu a usar."
            },
            {
                texto: "eu ouvi falando, mas não sei utilizar.",
                afirmacao: "Descobriu mas teve dificuldade em usar."
            }
        ]
    },
    {
        enunciado: "Você acredita que a IA pode melhorar a eficiência em tarefas domésticas? Como você acha que pode ser? ",
        alternativas: [
            {
                texto: "Não entendo muito, mas acho que não ajuda em nada.",
                afirmacao: "Não acredita que IA pode ser tão avançada."
            },
            {
                texto: "Sim, com o pouco que aprendi acredito que possa fazer várias tarefas tanto domésticas como outras também.",
                afirmacao: "Entende que a tecnologia é avançada."
            }
        ]
    },
    {
        enunciado: "Na sua opnião, quais tarefas do dia a dia poderiam ser facilitadas pela IA? ",
        alternativas: [
            {
                texto: "sim acredito que a IA pode facilitar tarefas como organizar agendas, fazer compras online, entre muitas outras.",
                afirmacao: "Notou também as várias funcionalidades IA"
            },
            {
                texto: "não conheço.",
                afirmacao: "não tem conhecimentos das funcionalidades IA."
            }
        ]
    },
    {
        enunciado: " quais tipos de IA que você conhece?",
        alternativas: [
            {
                texto: "Não conheço muito só sei o básico.",
                afirmacao: "sabe o básico."
            },
            {
                texto: "Não sei explicar.",
                afirmacao: "Pode ter uma noção ou tem medo de errar sobre o assunto. "
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
    caixaPerguntas.textContent = " Conhecimentos revisados...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
