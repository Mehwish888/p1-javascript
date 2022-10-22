let budget = 100;

let product = prompt("Hoeveel kost het product dat je wilt kopen?");

if (budget > product) {
    title.innerText = "U heeft genoeg geld!";
    title.style.color = "green";
} else {
    title.innerText = "Helaas, te weinig geld";
    title.style.color = "red";
}