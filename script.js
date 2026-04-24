let display = document.getElementById('display');

let first_numb = "";
let opeartor_selected = "";

function appendNumber(num){
   display.value += num;
}
function operator(opr){
    opeartor_selected = opr;
    first_numb = display.value;
    display.value = "";
}
function calculate(){
    let second_numb = display.value;
    let result = 0;
   if (opeartor_selected === "+"){
      result = Number(first_numb) + Number(second_numb)
   }
   else if (opeartor_selected === "-"){
      result = Number(first_numb) - Number(second_numb)
   }
   else if (opeartor_selected === "*"){
      result = Number(first_numb) * Number(second_numb)
   }
   else if (opeartor_selected === "/"){
      result = Number(first_numb) / Number(second_numb)
   }
   display.value = result;
}


//Backspace and AC
function clearAll(){
   display.value = "";
}
function backSpace(){
    display.value = display.value.slice(0, -1);
}
