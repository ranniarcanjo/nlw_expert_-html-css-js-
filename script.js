
const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },

    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "pop()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
        respostas: [
            "//",
            "/* */",
            "<!-- -->",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para verificar se dois valores são idênticos em JavaScript?",
        respostas: [
            "== ",
            "=== ",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "shift()",
            "pop()",
            "push()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para juntar os elementos de um array em uma string em JavaScript?",
        respostas: [
            "join()",
            "split()",
            "concat()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
        respostas: [
            "round()",
            "floor()",
            "ceil()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para selecionar um elemento HTML por seu ID em JavaScript?",
        respostas: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para denotar uma função em JavaScript?",
        respostas: [
            "=>",
            "#",
            "~",
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)

}