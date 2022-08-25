let display=document.getElementById('display')
 buttons=document.querySelectorAll('button')
 let screenValue='';

for(items of buttons){
    // console.log(items)
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            display.value=screenValue;
        }
        else if(buttonText=="AC"){
            screenValue='';
            display.value=screenValue;


           
        }
        else if(buttonText=='='){
            display.value=eval(screenValue)
        }
        else{
            screenValue+=buttonText;
            display.value=screenValue
        }
       
    })
}