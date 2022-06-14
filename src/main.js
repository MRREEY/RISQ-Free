window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  init()

  function init() {
    let scene1 = document.createElement('div')
    let title = document.createElement('h1')
    let subtitle = document.createElement('h2')
    let explanation = document.createElement('p')
    let button = document.createElement('button')
    button.innerHTML = `Start!`

    document.body.append(scene1)
    scene1.append(title)
    scene1.append(subtitle)
    scene1.append(explanation)
    scene1.append(button)

    button.addEventListener('click', function start(e) {
      e.preventDefault()
      scene1.remove()
      console.log("Start");
      layout()
  })
  }

  function layout() {
    const statementScene = document.createElement('div')
    statementScene.setAttribute('id', 'statementScene')
    const title = document.createElement('h1')
    const image = document.createElement('img')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const a = document.createElement('a')
    const pagination = document.createElement('p')

    document.body.append(statementScene)
    statementScene.append(title)
    statementScene.append(image)
    statementScene.append(button1)
    statementScene.append(button2)
    statementScene.append(a)
    statementScene.append(pagination)

    statement(1)
  }

  function statement(i) {
    const parent = document.getElementById('statementScene')
    let childs = parent.childNodes;

    childs[0].innerHTML = `Zou jij dit zeggen tegen de persoon die nu langs loopt?`
    childs[1].setAttribute("src", `./src/storyboards/${i}.png`) 
    childs[2].innerHTML = `Complimenteren`
    childs[3].innerHTML = `Intimideren`
    childs[4].innerHTML = `Geen keus kunnen maken?`
    childs[5].innerHTML = `${i}/3`

    let form = document.createElement('form')
    document.body.append(form)
    
    childs[2].addEventListener('click', function nextQuestion(e) {
      e.preventDefault()
      parent.remove()
      statement(i++)
    })

    childs[3].addEventListener('click', function nextQuestion(e) {
      e.preventDefault()
      parent.remove()
      statement(i++)
    })

    childs[4].addEventListener('click', function slideScene(e) {
      e.preventDefault()
      alternativeScene()
    })
  }
});