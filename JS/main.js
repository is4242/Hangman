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