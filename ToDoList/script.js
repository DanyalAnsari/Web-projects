const input=document.getElementById('inputbox');
const list=document.getElementById('list');

function addtask(){
if(input.value === ''){
    alert("You Must Write Something as a Task");
}
else{
    let li =document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
input.value="";
savedata();
}
list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
const savedata= ()=>{localStorage.setItem("data", list.innerHTML)}
const showTask=()=>{
    list.innerHTML=localStorage.getItem("data")
}
showTask();