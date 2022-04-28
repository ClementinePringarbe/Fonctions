// FONCTIONS 

// 1. Une fonction correspond à un enchaînement d'actions réutilisable dans tout le code.
function maFonction() {
    // l'enchaînement d'actions se fait à l'intérieur des accolades.
    // /!\ ce qu'on utilise dans la fonction n'est utilisable que dans la fonction
}
// -----------------------------------------------------------------------------------------------------------------

// 2. On définit une constante : const ici = "ma constante ici"
function maFonction() {
    const uneVariable;
}
// -----------------------------------------------------------------------------------------------------------------

// 3. Return et console.log
function returnAddition() {
    4 + 3;
    // ici le calcul s'effectue mais rien ne se passe
}
returnAddition();

/* 
- console.log() = on sait ce qu'il se passe dans le code grâce à cela, on logue ce qu'il y a dans la console, c'est un outil pratique pour aider le développeur
- ou var_dump() en php
- return = à utiliser si l'on souhaite que la fonction soit égale à une valeur et qu'elle retourne un résultat, quand on fait un retour on stocke quelque chose
le return est toujours à l'intérieur d'une fonction et nulle part ailleurs 
*/

function returnAddition() {
    return 4 + 3;   
}
const resultat = returnAddition();
console.log(resultat);
// le calcul s'est effectué et en plus cela nous affiche 7 dans la console du navigateur
// -----------------------------------------------------------------------------------------------------------------

// 4. arguments & paramètres
// - arguments & paramètres = même combat c'est la même chose, ils servent à utiliser une valeur externe dans la fonction
function nomUtilisateur() {
    return "Le nom de l'utilisateur est Will Ferrell";
}
const nouvelUtilisateur = nomUtilisateur();


function nomUtilisateur(name) {
    return "Le nom de l'utilisateur est " + name;
    // à la définition de la fonction on construit le mécanisme
}
const nouvelUtilisateur = nomUtilisateur("Will Arnett");
// au moment de l'appel / de l'exécution, on passe la valeur des paramètres, on peut d'ailleurs en mettre autant que l'on veut


function nomUtilisateur (name1, name2, name3) {
}
const nouvelUtilisateur = nomUtilisateur("Titi", "Toto", "Tata");
// les paramètres servent à rendre la fonction dynamique et permettent de faire passer des informations



// CLASS -> création d'objets
// on ne travailel qu'avec des objets en POO (Programmation Orientée Objet)

class Voiture {
    public $peinture = 'rouge';
    public $immatriculation = 'true';
}

public function __construct ($peinture) {
    $this->peinture = $peinture;
}