let Tool = function (toolType) {
    this.toolType = toolType;
}

let rock = new Tool("rock 💎");
let paper = new Tool("paper 🧻");
let scissors = new Tool("scissors ✂");

let pickNum;

let myToolbox = [];
myToolbox.push(rock, paper, scissors);

/*function losuj() {
    let losowyindex = Math.floor(Math.random() * myToolbox.length)

    let p = document.querySelector("#losowanie")
    p.innerHTML=(myToolbox[losowyindex].toString());
}*/

function pick(pickNum){
    let losowyindex = Math.floor(Math.random() * myToolbox.length)
    let p = document.querySelector("#losowanie")
    
    //console.log(myToolbox[pickNum]);

    let wynik = pickNum-losowyindex;
    let wp = "";
    if(wynik == -1 || wynik == 2){
        wp = "Przegrałeś! 😭";
    }else if(wynik == 0){
        wp="Remis! 😒";
    }else if(wynik == 1 || wynik == -2){
        wp = "Wygrałeś! 🎉";
    }else{
        wp = "Silly Billy";
    }
    p.innerHTML = `Wybrałeś ${myToolbox[pickNum].toolType} <br><br> Przeciwnik wybrał ${myToolbox[losowyindex].toolType} <br><br> ${wp} `;
}