let cards=[]
let sum=0
let msg=document.getElementById("pa")
let alive=false
let hasblackjack=false
let player={
    name:"Ajay",
    score:0
}
function rand(){
    r=Math.floor(Math.random()*13)+1
    if (r===1){
        return 11
    }
    else if(r>10){
        return 10
    }
    else{
        return r
    }
}
function startgame(){
    document.getElementById("player").innerText=player.name+"  score:"+player.score
    cards=[]
    sum=0
    hasblackjack=false
    document.getElementById("card").textContent=" "
    document.getElementById("sum").textContent=" "
    alive=true
    cards.push(rand())
    cards.push(rand())
    sum=cards[0]+cards[1]
    rendergame()
}
function rendergame(){
    document.getElementById("card").innerText="card: "
    for(let i=0;i<cards.length;i++){
        document.getElementById("card").textContent+=cards[i]+" "
    }
    document.getElementById("sum").innerText="sum: "+sum
    if(sum<21){
        msg.innerText="Select Another card😉"
        alive=true

    }
    else if(sum===21){
        msg.innerText="You Won!😎🎉"
        hasblackjack=true
        player.score+=1
        document.getElementById("player").innerText=player.name+"  score:"+player.score
    }
    else if(sum>21){
        msg.innerText="You lose😢"
        alive=false
    }
}
function newcard(){
    if (alive===true && hasblackjack===false){
        let card=rand()
        sum+=card
        cards.push(card)
        rendergame()

    }
    
}
