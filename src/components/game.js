window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
  
	init()
  
	function init() {
	  let welcomeScene = document.createElement('div')
	  let title = document.createElement('h1')
	  let subtitle = document.createElement('h2')
	  let explanation = document.createElement('p')
	  let button = document.createElement('button')
	 
	  welcomeScene.setAttribute("class", 'welcome-scene')
	  title.setAttribute("class", 'textTop')
	  subtitle.setAttribute("class", 'subtitleBegin')
	  explanation.setAttribute("class", 'explanationBegin')
	  button.setAttribute("class", 'buttonBegin')
  
	  title.innerHTML = `Gemeente Rotterdam`
	  subtitle.innerHTML = `TERRAS TALKS`
	  button.innerHTML = `START`
	  explanation.innerHTML = `Let op! Dit dient door minimaal 2 mensen beantwoord te worden.`
  
	  document.body.append(welcomeScene)
	  welcomeScene.append(title)
	  welcomeScene.append(subtitle)
	  welcomeScene.append(button)
	  welcomeScene.append(explanation)
  
	  button.addEventListener('click', function start(e) {
		e.preventDefault()
		welcomeScene.remove()
		console.log("Start");
		layout()
	})
	}
  
	function layout() {
	  const statementScene = document.createElement('div')
  
	  const greenBackground = document.createElement('div')
  
	  const title = document.createElement('h1')
	  const image = document.createElement('img')
	  const button1 = document.createElement('button')
	  const button2 = document.createElement('button')
	  const a = document.createElement('a')
	  const pagination = document.createElement('p')
  
	  statementScene.setAttribute('id', 'statementScene')
	  greenBackground.setAttribute('id', 'greenTop')
	  title.setAttribute("class", 'textTop')
	  image.setAttribute("class", 'image')
	  button1.setAttribute("class", 'positive')
	  button2.setAttribute("class", 'negative')
	  a.setAttribute("class", 'slider-link')
	  pagination.setAttribute("class", 'pagination')
  
	  document.body.append(greenBackground)
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
	  console.log(i);
	  switch (i) {
		case 1:
		  childs[0].innerHTML = `Wat vinden jullie van deze opmerking?`
		  childs[1].setAttribute("src", `./src/storyboards/${i}.png`) 
		  childs[2].innerHTML = `Complimenterend`
		  childs[3].innerHTML = `Intimiderend`
		  childs[4].innerHTML = `Geen keus kunnen maken?`
		  childs[5].innerHTML = `${i}/3`
		break;
		case 2:
		  childs[0].innerHTML = `Zouden jullie dit zeggen tegen de persoon 
		  die nu langs loopt?`
		  childs[1].setAttribute("src", `./src/storyboards/${i}.png`) 
		  childs[2].innerHTML = `Ja`
		  childs[3].innerHTML = `Nee`
		  childs[4].innerHTML = `Deze scenario komt niet voor`
		  childs[5].innerHTML = `${i}/3`
		break;
		case 3:
		  childs[0].innerHTML = `Wat zouden jullie doen als een persoon het volgende zegt?`
		  childs[1].setAttribute("src", `./src/storyboards/${i}.png`) 
		  childs[2].innerHTML = `Helpen`
		  childs[3].innerHTML = `Wegsturen`
		  childs[4].innerHTML = `Geen keus kunnen maken?`
		  childs[5].innerHTML = `${i}/3`
		break;
		case 4:
		  parent.remove()
		  endScreen()
		break;
		default:
		  break;
	  }
  
	  childs[2].addEventListener('click', function nextQuestion(e) {
		e.preventDefault()
		statement(i+1)
	  })
  
	  childs[3].addEventListener('click', function nextQuestion(e) {
		e.preventDefault()
		statement(i+1)
	  })
  
	  childs[4].addEventListener('click', function slideScene(e) {
		e.preventDefault()
		childs[2].remove()
		childs[2].remove()
		childs[2].remove()
		childs[2].remove()
  
		const labels = document.createElement('datalist')
		const range = document.createElement('input')
		const saveButton = document.createElement('button')
		const backlink = document.createElement('a')
  
		range.setAttribute("type", 'range')
		range.setAttribute("list", 'tickmarks')
		range.setAttribute("step", "16.66")
  
		labels.setAttribute("id", 'tickmarks')
		for (let i = 0; i < 6; i++) {
		  const option = document.createElement('option')
		  if (i === 0) {
			option.setAttribute("label", `intimiderend`)
		  } else if (i === 5) {
			option.setAttribute("label", `complimenterend`)
		  }
		  option.setAttribute("value", `${i*1}`)
		  labels.append(option)
		}
		
		saveButton.innerHTML = `opslaan`
		backlink.innerHTML = `Terug naar het thuisscherm`
		
		parent.append(labels)
		parent.append(range)
		parent.append(saveButton)
		parent.append(backlink)
	  })
  
	  function endScreen() {
		let endScreen = document.createElement('div')
		let title = document.createElement('h1')
		let label1 = document.createElement('h2')
		let button1 = document.createElement('button')
		let label2 = document.createElement('h2')
		let button2 = document.createElement('button')
		let link1 = document.createElement("a")
		let link2 = document.createElement("a")
	   
		endScreen.setAttribute("class", 'welcome-scene')
		title.setAttribute("class", 'title')
		label1.setAttribute("class", 'label')
		button1.setAttribute("class", 'button')
		link1.setAttribute("href", 'https://play.google.com/store/apps/details?id=nl.gemeenterotterdam.stopapp&hl=en&gl=US')
		label2.setAttribute("class", 'label')
		button2.setAttribute("class", 'button')
		link2.setAttribute("href", 'https://www.rotterdam.nl/wonen-leven/straatintimidatie/')
	
		title.innerHTML = `Opzoek naar meer informatie?`
		label1.innerHTML = `Download de app`
		link1.innerHTML = `STOPR app`
		label2.innerHTML = `Of ga naar de website`
		link2.innerHTML = `Gemeente Rotterdam`
		
		document.body.append(endScreen)
		endScreen.append(title)
		endScreen.append(label1)
		endScreen.append(button1)
		button1.append(link1)
		endScreen.append(label2)
		endScreen.append(button2)
		button2.append(link2)
	  }
	}
  });