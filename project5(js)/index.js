let count=0
let saveEl=document.getElementById("save-el")
function increment(){
    count++;
    document.getElementById("count").innerText=count;

}
function reset(){
    count=0;
    document.getElementById("count").innerText=count;
}

function save(){
    let countstr = count + "-"
    saveEl.innerText+=countstr

}
