let player1Choice = "";
let playerTurn = "";
let diceChecker = false;
function choseheads(){
        player1Choice = "Heads";
        document.getElementById("showPlayerChoics").innerText = "Player 1 choosed "+player1Choice;
}
function chosetails(){
    player1Choice = "Tails";
    document.getElementById("showPlayerChoics").innerText = "Player 1 choosed "+player1Choice;
}
function coinToss(){
    if(!player1Choice){
        alert("First select the coin's face !")
        return
    }
    if(Math.random()<0.5){
       if(player1Choice==="Heads"){
          document.getElementById("showPlayerTossResult").innerText = "Player 1 won the toss!"
          playerTurn = "Player1"
       }else{
        document.getElementById("showPlayerTossResult").innerText = "Player 2 won the toss!"
        playerTurn = "Player2"
       }
    }else{
        if(player1Choice==="Tails"){
            document.getElementById("showPlayerTossResult").innerText = "Player 1 won the toss!"
            playerTurn = "Player1"
         }else{
          document.getElementById("showPlayerTossResult").innerText = "Player 2 won the toss!"
          playerTurn = "Player2"
         }
    }
    diceChecker =true;
    document.getElementById("diceButton").disabled = false;
}
function rollDice(){
    if(diceChecker === false){
      alert("First toss the coin !")
      return
    }
    let dice1 = Math.floor(Math.random()*7)
    let dice2 = Math.floor(Math.random()*7)
    document.getElementById("playerTurn").innerText = "It is the turn of "+playerTurn;
    document.getElementById("gameStatus").innerText = "Dice1 = "+ dice1+ " , " + " Dice2 = "+ dice2;
    if(dice1===6 && dice2===6){
      document.getElementById("result").innerText = playerTurn + " won the match !"
      document.getElementById("diceButton").disabled = true;
    }
    if(playerTurn==="Player1"){
       playerTurn="Player2"
    }else{
        playerTurn="Player1"
    }
}