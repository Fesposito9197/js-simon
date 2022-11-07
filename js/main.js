function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creo un array per i numeri generati casualmente 
let number = []
const cpuNumber = document.getElementById("number")
// creo un array per i numeri inseriti dall'utente 
let userNumber = []
let correctNumber = []
while (number.length < 5 ) {
    // genero i numeri casuali da 1 a 100
    const randomNumber = getRndInteger(1 , 100)
    // controllo che all'interno dell'array non vi siano numeri duplicati
    if(number.includes(randomNumber) == false){
        // pusho i numeri generati all'interno dell'array
        number.push(randomNumber)
    }
    // stampo i numeri dell'array nel mio html
    cpuNumber.innerHTML = number
}
// imposto un timer che dopo 30 secondi fa sparire l'array con i numeri generati nel mio html 
setTimeout(function(){
    cpuNumber.remove();

}, 30000)
// creo un ciclo per l'inserimento dei numeri dell'utente 
setTimeout( function(){
    while(userNumber.length < 5){
        // chiedo con un prompt all'utente di inserire i numeri che ha visto 
        const userChoiceNumber = Number(prompt("inserisci i numeri che hai appena visto "))
        // controllo che l'utente non inserisca 2 volte lo stesso numero 
        if(userNumber.includes(userChoiceNumber) == false){
            userNumber.push(userChoiceNumber)
            if (number.includes(userChoiceNumber)) {
                correctNumber.push(userChoiceNumber)

            }
            console.log(userChoiceNumber)
        }else{
            alert("NON PUOI INSERIRE 2 NUMERI UGUALI")
        }
    }
    if(correctNumber.length > 0 ){
        alert(`Hai indovinato  ${ correctNumber.length} numeri ed i numeri che hai indovinato sono ${correctNumber}`)
    }else{
        alert("NON HAI INDOVINATO NESSUN NUMERO")
    }
    
} , 31000)