class  Card {
  constructor(name,rank,value) {
    this.name=  name;
    this.rank = rank;
    this.value = value;
 }    
}

class Player {
    constructor(name,turn,score){
        this.name = name;
        this.turn = turn;
        this.score = score;
    }
}

class Deck{
    constructor(){
        this.cards=[];
        this.turns= ['Hearts','Spades','Diamonds','Clubs']
        this.names= ['Ace','2','3','4','5','6','7','8','9','10','jack','Queen','King']
        this.values= [14,2,3,4,5,6,7,8,9,10,11,12,13]
;    }



  createDeck(){
    console.log("New Deck Deal");
    for (let i=0; i < this.turns.length;i++){
        for (let j=0; j <this.names.length;j++){
            this.cards.push(new Card(this.turns[i],this.names[j],this.values[j]))
        }
    }
   };

shuffleDeck(){
    console.log('Shuffle the Deck');
    const shuff = [];
    for (let i = 0; i < 52; i++){
        let randoPo = Math.floor((this.cards.length-i) * Math.random());
        let ranItem = this.cards.splice(randoPo,1);
        shuff.push(...ranItem);
    }
    return shuff;
}


dealDeck(players,shuffCards){
    console.log("Dealing Cards");
    let DealCa1 = shuffCards.splice(0,26);
    players[0].hand.push(...DealCa1);
    let DealCa2 = shuffCards.splice(0,26);
    players[1].hand.push(...DealCa2);
   }
}

class Players {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.hand =[];
    }
}

class Game{
    constructor(){
        this.players=[];
    }

start(){
    this.players.push(new Players(' Playa Alpha'));
    this.players.push(new Players( 'Playa Beta'));
    console.log('May The War Game begin');

    let deck = new Deck();
    deck.createDeck();
    let shuffDeckt = deck.shuffleDeck();

    deck.dealDeck(this.players,shuffDeckt);

    this.playGame();

    this.endGame();
}




playGame(){

    console.log("War");
    let player1 = this.players[0];
    let player2 = this.players[1];

    let roundWinner = '';
    let turn = 0;


    while (player1.hand.length !==0 && player2.hand.length !==0) {
        let player1Card = player1.hand.pop();
        let player2Card = player2.hand.pop();
        if (player1Card.value > player2Card.value){
            roundWinner = player1.name;
            player1.points += 1;
            console.log('Turn:' , (turn +=1),'\nPlayer 1 card: ', player1Card.rank,'of', player1Card.turn, '\nPlayer 2 card: ', player2Card.rank,'of',player2.turn,"\n"
        )}
        else if ( player2Card.value > player1Card.value){
            roundWinner = player2.name;
            player2.points += 1;
            console.log('Turn:' , turn +=1,'\nPlayer 1 card: ', player1Card.rank,'of', player1Card.turn, '\nPlayer 2 card: ', player2Card.rank,'of',player2.turn,"\n"
        )
        }
        else{
            console.log('Turn:' , (turn +=1),'\nPlayer 1 card: ', player1Card.rank,'of', player1Card.turn, '\nPlayer 2 card: ', player2Card.rank,'of',player2.turn,
        )
        }
    }
}


endGame(){
    let gameWinner= '';
    let player1 = this.players[0];
    let player2 = this.players[1];
    let winPoints = 0;


    if(player1.points > player2.points){
        gameWinner = player1.name;
        winPoints = player1.points;
        alert('Game OVER!  ' + gameWinner + " won the game! \nFinal scores" + player1.name + ": " + player1.points + "\n" + player2.name + ": "+ player2.points + "\n Than you for playing :) ");
    }
    else if (player2.points > player1.points){
        gameWinner = player2.name;
        winPoints = player2.points;
        alert('Game OVER!  ' + gameWinner + " won the game! \nFinal scores" + player1.name+ ": " + player1.points + "\n" + player2.name + ": "+ player2.points + "\n Than you for playing :) ");
    }
    else{
        alert('Game OVER! tied Game' + " \nFinal scores" + player1.name + ": " + player1.name + "\n" + player2.points + ": "+ player2.points + "\n Than you for playing :)");
    
    }
}

}

let game = new Game();
game.start();

