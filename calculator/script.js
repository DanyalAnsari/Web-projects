const input = document.getElementById('input');
const button = document.querySelectorAll('button');
const opreator = document.getElementsByClassName('oprt')

let string="";
let evaluated;
let arr= Array.from(button);
arr.forEach(button => {
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;  
            evaluated=true; 
        }
        else if( e.target.innerHTML =='AC'){
                string= "";
                input.value= string
            }
            else if( e.target.innerHTML=='DEL'){
                string=string.substring(0,string.length-1);
                input.value=string;
            }
        else{
            if(evaluated){
                string="";
                evaluated=!evaluated
            }
        string+= e.target.innerHTML;
        input.value=string
        }
        
    })
})