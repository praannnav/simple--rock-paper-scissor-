const buttons=document.querySelectorAll('.btn')
const userChoiceDisplay=document.querySelector('#player1-choice')
const playerChoiceDisplay=document.querySelector('#player2-choice')
const player2Choices=['Rock','Paper','Scissor']

function printing(event){
    let userSelection=event.target.value
    console.log(event.target.value)
    userChoiceDisplay.textContent=userSelection
    
    let player2ChoiceFinal=player2Choices[Math.floor(Math.random()*3)]
    playerChoiceDisplay.textContent=player2ChoiceFinal
    //control statemet
    if (userSelection==player2ChoiceFinal){
        alert("Draw")
        // userChoiceDisplay.style.color='white'
        // playerChoiceDisplay.style.color=''

    }
    else if (userSelection==="Rock" && player2ChoiceFinal==="Scissor" ){
        alert("You Win")
        userChoiceDisplay.style.color='green'
        playerChoiceDisplay.style.color='red'

    }
    else if(userSelection==="Scissor" && player2ChoiceFinal==="Paper"){
        alert("You Win")
        userChoiceDisplay.style.color='green'
        playerChoiceDisplay.style.color='red'
    }
    else if(userSelection==="Paper" && player2ChoiceFinal==="Rock"){
        alert("You Win")
        userChoiceDisplay.style.color='green'
        playerChoiceDisplay.style.color='red'
    }
    else{
        alert("You loose")
        userChoiceDisplay.style.color='red'
        playerChoiceDisplay.style.color='green'
    }
}
for(let btn of buttons){ 
    let userSelection=btn.addEventListener('click',printing)
}


