<?php
// CLASS -> création d'objets
// on ne travaille qu'avec des objets en POO (Programmation Orientée Objet)

class Voiture {
    public $peinture = 'rouge';
    public $immatriculation = 'true';
    // ce qu'il y a dans la classe hors du constructeur, on va dire que c'est notre objet voiture 'par défaut'

    // on rajoute un constructeur pour changer dynamiquement nos propriétés
    public function __construct($peinture) {
        $this->peinture = $peinture;
    }
}

// au moment de la création du nouvel objet voiture, on passe le paramètre
$maVoiture1 = new Voiture("verte");

// la class ici est assimilée à une usine de voitures, c'est une structure, un modèle de fabrication d'objets






