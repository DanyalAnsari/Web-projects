const eye=document.getElementById('eye');
const password=document.getElementById('password');

eye.addEventListener('click',()=>{
    if(password.type == 'password'){
        password.type = 'text'
        setTimeout(()=>{
            password.type= 'password'
        }, 2000);
    }else{
        password.type= 'password'
    }
})