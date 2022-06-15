const answerElement = document.querySelector('#answer')
const inputQuestion = document.querySelector('#inputQuestion')
const buttonPerguntar = document.querySelector('#buttonAsk')
const answers = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function askQuestion() {
  if (inputQuestion.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const question = '<div>' + inputQuestion.value + '</div>'

  // gerar numero aleatorio
  const totalAnswers = answers.length
  const aleatoryNumber = Math.floor(Math.random() * totalAnswers)

  answerElement.innerHTML = question + answers[aleatoryNumber]

  answerElement.style.opacity = 1

  // sumir a resposta apos 3 segundos
  setTimeout(function () {
    answerElement.style.opacity = 0
    buttonAsk.removeAttribute('disabled')
  }, 3000)
}
