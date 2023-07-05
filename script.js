

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
   let sub = a - b;
   document.getElementById("sum1").textContent= "sum: " + sub ;

}
function divide(){
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    let div = a/b;
   document.getElementById("sum1").textContent= "Sum: " + div ;

}

function multiply(){
    let a = Number(document.getElementById("num1-el").value);
    let b = Number(document.getElementById("num2-el").value);
    let mul = a*b;
   document.getElementById("sum1").textContent= "Sum: " + mul ;

}

