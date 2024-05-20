let input_btn = document.getElementById("input-btn")
const input_el=document.getElementById("input-el")
const ul_el=document.getElementById("ul-el")
let lfl=JSON.parse(localStorage.getItem("myleads"))
if (lfl){
    myleads=lfl
    renderleads()
}

input_btn.addEventListener("click",function(){
    myleads.push(input_el.value)
    input_el.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads ()
    
    
})
function renderleads() {
    listitems=""
    for (let i=0;i<=myleads.length;i++){
        listitems+=`
        <li>
        <a target='blank' href='${localStorage.getItem(myleads[i])}'>${localStorage.getItem(myleads[i])}
        </a>
        </li>`
    }
    
    ul_el.innerHTML=listitems
}
