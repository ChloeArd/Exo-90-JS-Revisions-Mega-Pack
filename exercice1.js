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


