// il faut créer un tableau d'objets

// il faut que je demande à Jordan comment je fais pour importer 
// mesVerbes qui provient du fichier main.js

var mesVerbes = [
    {
      'Verbe Allemand': 'abbeißen',
      'Verbe Francais 1': 'couper avec les dents'
    },
    {
      'Verbe Allemand': 'abbiegen',
      'Verbe Francais 1': 'tourner',
      'Verbe Francais 2': 'obliquer'
    },
    { 'Verbe Allemand': 'abbringen', 'Verbe Francais 1': 'décourager' },
    {
      'Verbe Allemand': 'abfahren',
      'Verbe Francais 1': 'se mettre en route'
    },
    {
      'Verbe Allemand': 'abfärben',
      'Verbe Francais 1': 'faire se déteindre'
    },
    {
      'Verbe Allemand': 'abfinden',
      'Verbe Francais 1': 'indemniser',
      'Verbe Francais 2': 'se résigner'
    },
    {
      'Verbe Allemand': 'abfragen',
      'Verbe Francais 1': 'extraire quelquechose'
    },
    {
      'Verbe Allemand': 'abführen',
      'Verbe Francais 1': 'évacuer',
      'Verbe Francais 2': 'aller à la selle'
    },
    {
      'Verbe Allemand': 'abfüllen',
      'Verbe Francais 1': 'mettre en bouteille'
    },
    {
      'Verbe Allemand': 'abgeben',
      'Verbe Francais 1': 'transmettre',
      'Verbe Francais 2': 'restituer'
    },
    {
      'Verbe Allemand': 'abgewöhnen',
      'Verbe Francais 1': 'se déshabituer'
    },
    { 'Verbe Allemand': 'abgrenzen', 'Verbe Francais 1': 'délimiter' },
    { 'Verbe Allemand': 'abhaken', 'Verbe Francais 1': 'cocher' },
    { 'Verbe Allemand': 'abhalten', 'Verbe Francais 1': 'tenir' }
];


var mesVERBESallemand = [
    {
      'Verbe Allemand': 'abbeißen',
      'Verbe Francais 1': 'couper avec les dents'
    },
    {
      'Verbe Allemand': 'abbiegen',
      'Verbe Francais 1': 'tourner',
      'Verbe Francais 2': 'obliquer'
    },
    { 'Verbe Allemand': 'abbringen', 'Verbe Francais 1': 'décourager' },
    {
      'Verbe Allemand': 'abfahren',
      'Verbe Francais 1': 'se mettre en route'
    },
    {
      'Verbe Allemand': 'abfärben',
      'Verbe Francais 1': 'faire se déteindre'
    },
    {
      'Verbe Allemand': 'abfinden',
      'Verbe Francais 1': 'indemniser',
      'Verbe Francais 2': 'se résigner'
    },
    {
      'Verbe Allemand': 'abfragen',
      'Verbe Francais 1': 'extraire quelquechose'
    },
    {
      'Verbe Allemand': 'abführen',
      'Verbe Francais 1': 'évacuer',
      'Verbe Francais 2': 'aller à la selle'
    },
    {
      'Verbe Allemand': 'abfüllen',
      'Verbe Francais 1': 'mettre en bouteille'
    },
    {
      'Verbe Allemand': 'abgeben',
      'Verbe Francais 1': 'transmettre',
      'Verbe Francais 2': 'restituer'
    },
    {
      'Verbe Allemand': 'abgewöhnen',
      'Verbe Francais 1': 'se déshabituer'
    },
    { 'Verbe Allemand': 'abgrenzen', 'Verbe Francais 1': 'délimiter' },
    { 'Verbe Allemand': 'abhaken', 'Verbe Francais 1': 'cocher' },
    { 'Verbe Allemand': 'abhalten', 'Verbe Francais 1': 'tenir' }
];

console.log(mesVERBESallemand);


var verbeAllemand = document.getElementById("verbAllemand");

// déclaration de la fonction  qui tire au sort un verbe allemand de la liste
function random_item(items)
{
    
    return items[Math.floor(Math.random()*items.length)];
     
}


let verbRandom = [
    {
        'Verbe Allemand': ' ',
        'Verbe Francais 1':' ',
        'Verbe Francais 2':' ',
        'Verbe Francais 3':' ',
        'Verbe Francais 4':' '
    }
];

let leTabReponse = [];

let alorsVraiOuFaux = false;

let tableauVide = false;

let leDernierVerbeReached = false;

// ici addEventListener sur le bouton "un verbe allemand au hasard"

document.getElementById("boutonStart").addEventListener("click", function(){

    // première partie: afficher le verbe allemand
    alorsVraiOuFaux = false;

    if(leDernierVerbeReached === false){
        verbRandom = random_item(mesVERBESallemand);
        verbeAllemand.textContent = verbRandom['Verbe Allemand'];
    
        document.getElementById("traducFra").value = "";
    
        document.getElementById("leDernier").textContent = "";
    
        document.getElementById("result").textContent = "Le résultat";
    }else{
        document.getElementById("leDernier").textContent = "cliquez sur recharger!";
    }
    
});

// ici addEventListener sur le bouton Valider

document.getElementById("quizForm").addEventListener("submit", function(event){

    event.preventDefault();
    
    var laReponse = document.getElementById("traducFra").value;

    console.log(laReponse);

    var leVerbeAffiche = verbeAllemand.textContent;

    console.log(leVerbeAffiche);

    for(let i in mesVERBESallemand){
        if(leVerbeAffiche === mesVERBESallemand[i]['Verbe Allemand']){
            leTabReponse = [
                mesVERBESallemand[i]['Verbe Francais 1'], 
                mesVERBESallemand[i]['Verbe Francais 2'],
                mesVERBESallemand[i]['Verbe Francais 3'],
                mesVERBESallemand[i]['Verbe Francais 4']
            ];

            for(let j in leTabReponse){

                console.log("nous comparons " + laReponse + " avec "+ leTabReponse[j]);
    
                if(laReponse === leTabReponse[j]){
                    alorsVraiOuFaux = true;
                    document.getElementById("result").textContent = "c'est bon!";
                    console.log("il y a égalité");
                    console.log(alorsVraiOuFaux);
                    break;  
                    
                    // demander Jordan si break fait s'achever le 
                    // statement de ligne 82 à 105

                    // faire un console.log et sélectionner le verbe qui est 
                    // premier dans la liste, vérifier si le break fait s'arrêter
                    // le console.log
                
                }else{
                    console.log("c'est faux, pas d'égalité");
                    console.log(alorsVraiOuFaux);
                    document.getElementById("result").textContent = "C'est faux! Essaye encore!";
                }
            }
        }
    }


    if(alorsVraiOuFaux === true){
        for(let k in mesVERBESallemand){
            if(leVerbeAffiche === mesVERBESallemand[k]['Verbe Allemand']){

                console.log(mesVERBESallemand[k]);
                mesVERBESallemand.splice(k, 1);
                console.log(mesVERBESallemand);

                if(mesVERBESallemand.length === 1){
                    document.getElementById("leDernier").textContent = mesVerbes[0]['Verbe Allemand'];
                    
                    leDernierVerbeReached = true; 
                }

            }
        }
    }
    
});






// il faut que je code quand on recharge le tableau de verbe

document.getElementById("rechargeTableau").addEventListener("click", function(){

    mesVERBESallemand = mesVerbes;

    document.getElementById("leDernier").textContent = " ";

    console.log(mesVERBESallemand);

    leDernierVerbeReached = false;
    
});



// il faut utiliser find()

// tableau.find()   on lui donne des critères

// créer une fonction d'import, lecture du fichier excel

// fs file system pour faire de la lecture



