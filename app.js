let btns = document.querySelectorAll('button');
let string = "";

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
            
        }else if(e.target.innerHTML == undefined){
            string = error;
        }
        else{
        
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })
})
