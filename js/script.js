/**
 * exo6:  programme qui additionne deux nombres entrés par l'utilisateur  
 */

// nombre saisi par le user et conversion du retourne en string du prompt avec le le parseFloat

let nb1 = parseFloat(prompt("saisir un nb"));

// vérification du type de la variable nb1
console.log(typeof nb1);

// je check ma variable nb1
console.log(nb1);


let nb2 = parseFloat(prompt("saisir un nb"));
console.log(typeof nb1);
console.log(nb2);

/**
 * définition de ma fonction addnumbers() :number 
 * @param {*} nb1
 * @param {*} nb2 
 * @return nb1 + nb2 * 
 */


function addNumbers(nb1, nb2) {
    // stockage du résultat de l'addition dans une variable
    let rs;
    rs = nb1 + nb2;

    // je ne fais pas de console.log(rs) pour éviter d'avoir trop d'infos sur la console.  je peux le faire pour le dbug uniquement ensuite en commentaire 
    return rs;
}

// l'execution de ma fonction se fait en dehors duu bloc de déf de la fonction 
let res = addNumbers(nb1, nb2);
console.log("le résultat de mon ad est:", res);





