//alert("het werkt"); // "" is string

//document.getElementById("btn");


let button = document.getElementById("btn");

//maak een variabel genaamd count  met als waarde 0
let count = 0; 

//maak een functie genaamd clicker
function clicker(){
    count += 1;
    button.innerText  = count + " keer geklikt";
    
}