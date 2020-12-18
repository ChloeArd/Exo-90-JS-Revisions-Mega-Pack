let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;

document.getElementById("demo").innerHTML = "z vaut " + z + ", w vaut " + w + ", le résultat est: " + (z+w);

let d = z + w;

alert("La valeur de d est: " + d);

let prenom = "John", nom = "Doe", age = 35;

alert("10 multiplié par 5 vaut : " + (w * z));

alert("10 divisé par 2 : " + (w / 2));
alert("15 par 9: " + (15 % 9));

let l = 10, k = 5; l += k; // l = 15

function maFonction (){
    alert("Salut tout le monde !");
}
maFonction();

function maFonctionDeRetour() {
    document.getElementById("demoRetour").innerHTML = "Bonjour !";
}
maFonctionDeRetour();

document.getElementById("monBoutton").addEventListener("click", function (){
    alert("Tu as cliqué sur le boutton BRAVO !");
});

document.getElementById("changeSurOver").addEventListener("mouseover", function (){
    document.getElementById("changeSurOver").style.backgroundColor = "red";
});

let txt = "Une longueur phrase", longueur = txt.length;
alert("La longueur de " + txt + " est de " + longueur);

let str1 = "Bonjour", str2 = "le monde !";
alert(str1 + " " + str2);

let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1]; //Volvo
listeVoitures[0] = "Ford"; //Ford, Volvo, Citroen

alert(listeVoitures.length); //3

listeVoitures.pop(); //Ford, Volvo
listeVoitures.push("Ferrari") //Ford, Volvo, Ferrari

let rNumber = Math.floor(Math.random() * 100);
let fNumber = 35.28;
console.log(Math.round(fNumber)); //35

let nombreUn = 10, nombreDeux = 5;
if (nombreUn > nombreDeux) {
    alert("NombreUn est supérieur à nombreDeux");
}

let nombreTrois = 10, nombreQuatre = 10;
if (nombreTrois === nombreQuatre){
    alert("NombreTrois est égal à nombreQuatre");
}

if (nombreUn !== nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}

for (let i = 0; i <= 9; i++){
    console.log(i);
}

let fruits = ["pomme", "banane", "poire"];

for (let i = 0; i < fruits.length; i++){
    console.log(i);
}

let i = 0;
while (i < 10){
    console.log(i)
    i++
}

i = 0;
while (i < 10){
    console.log(i);
    i += 2;
}

for (let i = 0; i <= 10; i++){
    if ( i === 5){
        alert("HOLLAAAA, i est bien égal à " + i);
    }
}
