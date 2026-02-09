const leteers = 'abcdefghijklmnopqrsduvwxyz';


let leteersArray = Array.from(leteers)


let LetreesContenar = document.querySelector(".letters")

leteersArray.forEach(leteer => {
     // create span
    let span = document.createElement("span")

    // create Letter Text node
let theleter = document.createTextNode(leteer)
span.appendChild(theleter)
span.className='Letter-box'
LetreesContenar.appendChild(span)
})

// object of words

const words = {
    porograming:["Javascript","java","python","rust","c++"],
    sereis:["Game of thrones","the walking dead","preson break","Dexter Morgan"],
    game:["GTA","Grand sanAndres","Red dead redemtion","hollow knight"],
    contres:["Saudi arabic","egy","amarica","palsten","srya"],
    people:["Albert","Nekolas","Nableon","kaysr"]
}


let allkeys = Object.keys(words)

 
let randomNumber = Math.floor(Math.random() * allkeys.length)

let randomName = allkeys[randomNumber]

let randomvalue = words[randomName]

let randomvalueNumber = Math.floor(Math.random() * randomvalue.length)

let randomvaluenames = randomvalue[randomvalueNumber]

// gatgory catgory

document.querySelector(".game-info .category span").innerHTML = randomName


let leteersGuse = document.querySelector(".letters-guess")

let leteersAndSpace = Array.from(randomvaluenames)

leteersAndSpace.forEach(leteer =>{
    let empty = document.createElement("span")
    if(leteer === ' '){
      empty.classList.add('style-leteer') 
    }

    leteersGuse.appendChild(empty)
})

document.addEventListener("click",(e)=>{
    if(e.target.className === 'Letter-box'){
        e.target.classList.add("clicked")
        
    let theletters = e.target.innerHTML.toLowerCase()

    // console.log(leteersAndSpace)
    for(let i =0; i <leteersAndSpace.length;i++){
        let word = leteersAndSpace[i];
        if(theletters === word){

        }
    }

    }
})    

