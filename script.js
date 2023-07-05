

let sum1 = 0;
function add(){
   
    
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    sum1 = a + b;
   document.getElementById("sum1").textContent= "sum:" + sum1 ;

}

function subtract(){
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    sum1 = a - b;
   document.getElementById("sum1").textContent= "subtraction: " + sum1 ;

}
function divide(){
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    sum1 = a/b;
   document.getElementById("sum1").textContent= "Division: " + sum1 ;

}

function multiply(){
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    sum1 = a*b;
   document.getElementById("sum1").textContent= "Multiplication: " + sum1 ;

}

