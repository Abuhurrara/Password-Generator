const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("passwordOne")
let passwordElTwo = document.getElementById("passwordTwo")
// let copyPasswordElOne = document.getElementById("passwordOne")
// let copyPasswordElTwo = document.getElementById("passwordTwo")
function randomPassword() {
    let number = Math.floor(Math.random() * characters.length)
    return characters[number]
}

function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 15; i++) {
        passwordOne += randomPassword()
        passwordTwo += randomPassword()
    }
    
    let generatedPasswordOne = passwordOne
    let generatedPasswordTwo = passwordTwo
    
    passwordElOne.value = generatedPasswordOne
    passwordElTwo.value = generatedPasswordTwo
}

function reset() {
    let reset = ""
    passwordElOne.value = reset
    passwordElTwo.value = reset
    
}
function copyPasswordOne() {
    passwordElOne.select()
    document.execCommand("copy");
}
function copyPasswordTwo() {
    passwordElTwo.select()
    document.execCommand("copy");
}







