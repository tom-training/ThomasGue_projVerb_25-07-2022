// il faut créer un tableau d'objets

// il faut que je demande à Jordan comment je fais pour importer 
// mesVerbes qui provient du fichier main.js

var mesVERBESallemand = mesVerbes;

console.log(mesVERBESallemand);


var verbeAllemand = document.getElementById("verbAllemand");

// déclaration de la fonction  qui tire au sort un verbe allemand de la liste
function random_item(items)
{
    
    return items[Math.floor(Math.random()*items.length)];
     
}


let verbRandom = [
    {
        id:0,
        aufDeutsch:' ',
        traduction: [' ']
    }
];

let leTabReponse = [];

let alorsVraiOuFaux = false;

let tableauVide = false;

// ici addEventListener sur le bouton "un verbe allemand au hasard"

document.getElementById("boutonStart").addEventListener("click", function(){

    // première partie: afficher le verbe allemand
    alorsVraiOuFaux = false;
    verbRandom = random_item(mesVERBESallemand);
    verbeAllemand.textContent = verbRandom.aufDeutsch;

    document.getElementById("traducFra").value = "";

    document.getElementById("leDernier").textContent = "";
});

// ici addEventListener sur le bouton Valider

document.getElementById("quizForm").addEventListener("submit", function(event){

    event.preventDefault();
    
    var laReponse = document.getElementById("traducFra").value;

    console.log(laReponse);

    var leVerbeAffiche = verbeAllemand.textContent;

    console.log(leVerbeAffiche);

    for(let i in mesVERBESallemand){
        if(leVerbeAffiche === mesVERBESallemand[i].aufDeutsch){
            leTabReponse = mesVERBESallemand[i].traduction;

            for(let j in leTabReponse){

                console.log("nous comparons " + laReponse + " avec "+ leTabReponse[j]);
    
                if(laReponse === leTabReponse[j]){
                    alorsVraiOuFaux = true;
                    document.getElementById("result").textContent = "c'est bon!";
                    console.log("il y a égalité");
                    console.log(alorsVraiOuFaux);
                    break;  // demander Jordan si break fait s'achever le 
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
            if(leVerbeAffiche === mesVERBESallemand[k].aufDeutsch){

                console.log(mesVERBESallemand[k]);
                mesVERBESallemand.splice(k, 1);
                console.log(mesVERBESallemand);

                if(mesVERBESallemand.length === 1){
                    document.getElementById("leDernier").textContent = mesVerbes[0].aufDeutsch;
                    
                    mesVERBESallemand = mesVerbes;
                    
                }

                break;
            }
        }
    }
    
});






// il faut que je code quand on recharge le tableau de verbe

document.getElementById("rechargeTableau").addEventListener("click", function(){

    mesVERBESallemand = mesVerbes;

    document.getElementById("leDernier").textContent = "";

    console.log(mesVERBESallemand);
    
});



// il faut utiliser find()

// tableau.find()   on lui donne des critères

// créer une fonction d'import, lecture du fichier excel

// fs file system pour faire de la lecture



