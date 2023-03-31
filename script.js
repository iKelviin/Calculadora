function AddCaracter(caracter){
    const display = document.querySelector(".display").value;
    
    document.querySelector(".display").value = display + caracter;
    
}

function Clear(){
    document.querySelector(".display").value = '';
}


function Calc(){
    const display = document.querySelector(".display").value;

    document.querySelector(".display").value = eval(display);
}

function Revert(){
    const display = document.querySelector(".display").value;

    document.querySelector(".display").value = display * -1;
}