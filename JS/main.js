const leteers = 'abcdefghijklmnopqrstuvwxyz';


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
// const words = {
//     programming: ["Javascript", "Java", "Python", "Rust", "Cplusplus", "PHP", "Swift"],
//     series: ["Game of Thrones", "The Walking Dead", "Prison Break", "Breaking Bad", "Dark"],
//     games: ["Grand Theft Auto", "Red Dead Redemption", "Minecraft", "Elden Ring", "Resident Evil"],
//     countries: ["Saudi Arabia", "Egypt", "America", "Palestine", "Syria", "Japan"],
//     people: ["Alexander", "Einstein", "Napoleon", "Newton", "Messi", "Elon Musk"]
// }
let randomvaluenames;

fetch("words.json").then((respone)=>{
    return respone.json()
}).then((Date)=>{
let allkeys = Object.keys(Date)

 
let randomNumber = Math.floor(Math.random() * allkeys.length)

let randomName = allkeys[randomNumber]

let randomvalue = Date[randomName]

let randomvalueNumber = Math.floor(Math.random() * randomvalue.length)

 randomvaluenames = randomvalue[randomvalueNumber]
document.querySelector(".game-info .category span").innerHTML = randomName
let leteersGuse = document.querySelector(".letters-guess")
let leteersAndSpace = Array.from(randomvaluenames.toLowerCase())

leteersAndSpace.forEach(leteer =>{
    let empty = document.createElement("span")
    if(leteer === ' '){
      empty.classList.add('style-leteer') 
  
    }

    leteersGuse.appendChild(empty)
})
})

// gatgory catgory






// add indexhtml to world

let wrong = 0;

let thedraw = document.querySelector(".hangman-draw")



document.addEventListener("click",(e)=>{
    let guessspan = document.querySelectorAll(".letters-guess span")
           let thestatus = false;
 if(e.target.className === 'Letter-box'){
        e.target.classList.add("clicked")
    let theletters = e.target.innerHTML.toLowerCase()
let thechooesword = Array.from(randomvaluenames.toLowerCase())
    // console.log(leteersAndSpace)
thechooesword.forEach((wordLetter, wordindex)=>{
    if(theletters === wordLetter){
        thestatus = true;
        guessspan.forEach((span,spanindex)=>{
            if(wordindex === spanindex){
                span.innerHTML = theletters
            }
        })
    }
})
// outside Loop
if(thestatus !== true){
    wrong++
thedraw.classList.add(`wrong-${wrong}`)
    document.querySelector(".fail").play()

if(wrong === 9){
    endgame()

    LetreesContenar.classList.add("finshed")
}

}
// داخل الـ click، بعد ما تنتهي Loop الحروف
if (thestatus === true) {
    document.querySelector(".trul").play();

    // فحص الفوز: هل كل المربعات امتلأت؟
    let allSpans = document.querySelectorAll(".letters-guess span");
    let isWon = Array.from(allSpans).every(span => span.innerHTML !== "" || span.classList.contains('style-leteer'));

    if (isWon) {
        winGame(); // استدعاء دالة الفوز
        LetreesContenar.classList.add("finshed");
    }
}
}
})  

function endgame(){
    let div = document.createElement("div")

    let textdiv = document.createTextNode(`Game Over, the word is ${randomvaluenames}`)
     div.appendChild(textdiv)

     div.className='popup'
     document.body.appendChild(div)
}

function winGame() {
    let div = document.createElement("div");
    let textdiv = document.createTextNode(`Good your Winner:${randomvaluenames}`);
    div.appendChild(textdiv);
    div.className = 'popup success'; // أضفنا class جديد اسمه success
    document.body.appendChild(div);
}
