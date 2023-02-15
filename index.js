console.log("Welcome again");

let screenValue = '';
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonTxt = e.target.innerText;
        console.log(buttonTxt);
        if(buttonTxt =='C'){
            screenValue="";
            screen.value = screenValue;
        }
        else if(buttonTxt == '='){
            try{
                screen.value=eval(screenValue);
            }
            catch{
                screen.value='Error';
            }

        }
        else{
            screenValue+=buttonTxt;
            screen.value = screenValue;
        }
    })
}