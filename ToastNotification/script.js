const toastBox=document.getElementById('toast-box');

const successMsg='<img src="./assets/tick.svg">Succesfully submitted';
const errorMsg='<img src="./assets/cross.svg">Error! Please fix the error';
const invalidMsg='<img src="./assets/warning.svg">Invalid Input! check again.';


const showToast=(msg)=>{
   const toast= document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML=msg;
   toastBox.appendChild(toast);
  if(msg.includes('error')){
   toast.style.setProperty('--color', 'red')
  }else if(msg.includes('Invalid')){
   toast.style.setProperty('--color', 'orange')
  }else if(msg.includes('Succesfully')){
   toast.style.setProperty('--color', 'green')
  }
   setTimeout(()=>{
      toast.remove();
   }, 6000);
}