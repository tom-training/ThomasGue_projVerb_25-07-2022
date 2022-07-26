
/* A METTRE SUR UNE BRANCHE

var myJson = import ('verb.json',{
assert: {type: 'json'}
});

var mesVerbesImport = {};
var mesVERBESallemand = {};


// revoir the syntax of then function dans P5
myJson.then(

  mesVerbesImport = JSON.parse(myJson);

  mesVERBESallemand = mesVerbesImport;

  console.log(mesVERBESallemand);
);

*/

var mesVerbes = [
    {
      'Verbe Allemand': 'verüben',
      'Verbe Francais 1': 'commettre',
      'Verbe Francais 2': 'perpétrer',
      'Verbe Francais 3': 'commettre des actes',       
      'Verbe Francais 4': 'commettre des infractions'  
    },
    {
      'Verbe Allemand': 'verunglücken',
      'Verbe Francais 1': "être victime d'un accident",
      'Verbe Francais 2': 'avoir un accident'
    },
    {
      'Verbe Allemand': 'verunsichern',
      'Verbe Francais 1': 'déstabiliser'
    },
    {
      'Verbe Allemand': 'verunstalten',
      'Verbe Francais 1': 'défigurer',
      'Verbe Francais 2': 'déformer'
    },
    {
      'Verbe Allemand': 'verursachen',
      'Verbe Francais 1': 'provoquer',
      'Verbe Francais 2': 'causer',
      'Verbe Francais 3': 'créer',
      'Verbe Francais 4': 'provoquer'
    },
    {
      'Verbe Allemand': 'verurteilen',
      'Verbe Francais 1': 'condamner',
      'Verbe Francais 2': 'juger'
    },
    { 'Verbe Allemand': 'verwechseln', 'Verbe Francais 1': 'confondre' },
    { 'Verbe Allemand': 'verweigern', 'Verbe Francais 1': 'refuser' },
    {
      'Verbe Allemand': 'verwelken',
      'Verbe Francais 1': 'se flétrir',
      'Verbe Francais 2': 'se faner',
      'Verbe Francais 3': 'faner'
    },
    { 'Verbe Allemand': 'verwenden', 'Verbe Francais 1': 'utiliser' },
    { 'Verbe Allemand': 'verwirklichen', 'Verbe Francais 1': 'réaliser' },
    {
      'Verbe Allemand': 'verwirren',
      'Verbe Francais 1': 'confondre',
      'Verbe Francais 2': 'dérouter',
      'Verbe Francais 3': 'désorienter'
    },
    {
      'Verbe Allemand': 'verwischen',
      'Verbe Francais 1': 'flouter',
      'Verbe Francais 2': 'estomper',
      'Verbe Francais 3': 'brouiller',
      'Verbe Francais 4': 'brouiller les pistes'
    },
    {
      'Verbe Allemand': 'verwöhnen',
      'Verbe Francais 1': 'choyer',
      'Verbe Francais 2': 'gâter',
      'Verbe Francais 3': 'chouchouter',
      'Verbe Francais 4': 'dorloter'
    },
    { 'Verbe Allemand': 'verwunden', 'Verbe Francais 1': 'blesser' },
    {
      'Verbe Allemand': 'verzaubern',
      'Verbe Francais 1': 'enchanter',
      'Verbe Francais 2': 'charmer',
      'Verbe Francais 3': 'envoûter',
      'Verbe Francais 4': 'ensorceler'
    },
    { 'Verbe Allemand': 'verzehren', 'Verbe Francais 1': 'consommer' },
    {
      'Verbe Allemand': 'verzeichnen',
      'Verbe Francais 1': 'enregistrer',
      'Verbe Francais 2': 'répertorier'
    },
    { 'Verbe Allemand': 'verzeihen', 'Verbe Francais 1': 'pardonner' },
    {
      'Verbe Allemand': 'verzerren',
      'Verbe Francais 1': 'déformer',
      'Verbe Francais 2': 'distordre',
      'Verbe Francais 3': 'biaiser'
    },
    { 'Verbe Allemand': 'verzichten', 'Verbe Francais 1': 'renoncer' },
    { 'Verbe Allemand': 'verzieren', 'Verbe Francais 1': 'décorer' },
    {
      'Verbe Allemand': 'verzögern',
      'Verbe Francais 1': 'retarder',
      'Verbe Francais 2': 'temporiser',
      'Verbe Francais 3': 'ralentir'
    },
    { 'Verbe Allemand': 'verzweifeln', 'Verbe Francais 1': 'désespérer' },
    {
      'Verbe Allemand': 'voraussagen',
      'Verbe Francais 1': 'anticiper',
      'Verbe Francais 2': 'prévoir'
    },
    {
      'Verbe Allemand': 'vorbeifahren',
      'Verbe Francais 1': 'passer',
      'Verbe Francais 2': 'passer devant',
      'Verbe Francais 3': 'passer à côté'
    },
    {
      'Verbe Allemand': 'vorbereiten',
      'Verbe Francais 1': 'se préparer',
      'Verbe Francais 2': 'préparer'
    },
    {
      'Verbe Allemand': 'vorbeugen',
      'Verbe Francais 1': 'prévenir',
      'Verbe Francais 2': 'faire de la prévention'
    },
    {
      'Verbe Allemand': 'vordrängeln',
      'Verbe Francais 1': 'couper la file',
      'Verbe Francais 2': 'prendre les devants',
      'Verbe Francais 3': 'prendre la priorité'
    },
    { 'Verbe Allemand': 'vorenthalten', 'Verbe Francais 1': 'retenir' },
    {
      'Verbe Allemand': 'vorfallen',
      'Verbe Francais 1': 'se faire remarquer',
      'Verbe Francais 2': 'se présenter',
      'Verbe Francais 3': 'se manifester',
      'Verbe Francais 4': 'se montrer à la hauteur'
    },
    { 'Verbe Allemand': 'vorfinden', 'Verbe Francais 1': 'trouver' },
    {
      'Verbe Allemand': 'vorgeben',
      'Verbe Francais 1': 'faire semblant',
      'Verbe Francais 2': 'prétendre'
    },
    {
      'Verbe Allemand': 'vorhaben',
      'Verbe Francais 1': 'avoir des projets',
      'Verbe Francais 2': 'prévoir',
      'Verbe Francais 3': "avoir l'intention de"
    },
    {
      'Verbe Allemand': 'vorhersehen',
      'Verbe Francais 1': 'prévoir',
      'Verbe Francais 2': 'anticiper'
    },
    {
      'Verbe Allemand': 'vorkommen',
      'Verbe Francais 1': 'se présenter',
      'Verbe Francais 2': 'être présent',
      'Verbe Francais 3': 'arriver',
      'Verbe Francais 4': 'se produire'
    },
    {
      'Verbe Allemand': 'vorlesen',
      'Verbe Francais 1': 'lire à haute voix'
    },
    {
      'Verbe Allemand': 'vormachen',
      'Verbe Francais 1': 'faire semblant',
      'Verbe Francais 2': "montrer l'exemple"
    },
    {
      'Verbe Allemand': 'vornehmen',
      'Verbe Francais 1': 'procéder',
      'Verbe Francais 2': 'faire',
      'Verbe Francais 3': 'faire des efforts'
    },
    { 'Verbe Allemand': 'vorschlagen', 'Verbe Francais 1': 'proposer' },
    {
      'Verbe Allemand': 'vorschreiben',
      'Verbe Francais 1': 'imposer',
      'Verbe Francais 2': 'prescrire'
    },
    {
      'Verbe Allemand': 'vorsorgen',
      'Verbe Francais 1': 'prendre des précautions',
      'Verbe Francais 2': 'prendre des dispositions'
    },
    {
      'Verbe Allemand': 'vorstellen',
      'Verbe Francais 1': 'présenter',
      'Verbe Francais 2': 'se présenter'
    },
    {
      'Verbe Allemand': 'vortäuschen',
      'Verbe Francais 1': 'feindre',
      'Verbe Francais 2': 'faire semblant',
      'Verbe Francais 3': 'simuler'
    },
    {
      'Verbe Allemand': 'vortragen',
      'Verbe Francais 1': 'réciter',
      'Verbe Francais 2': 'présenter',
      'Verbe Francais 3': 'faire une présentation',
      'Verbe Francais 4': 'faire un exposé'
    },
    { 'Verbe Allemand': 'vorübergehen', 'Verbe Francais 1': 'passer' },
    {
      'Verbe Allemand': 'vorweisen',
      'Verbe Francais 1': 'présenter',
      'Verbe Francais 2': 'montrer'
    },
    {
      'Verbe Allemand': 'vorwerfen',
      'Verbe Francais 1': 'reprocher',
      'Verbe Francais 2': 'accuser'
    },
    {
      'Verbe Allemand': 'vorzeigen',
      'Verbe Francais 1': 'montrer',
      'Verbe Francais 2': 'présenter'
    },
    {
      'Verbe Allemand': 'vorziehen',
      'Verbe Francais 1': 'préférer',
      'Verbe Francais 2': 'avancer',
      'Verbe Francais 3': 'anticiper',
      'Verbe Francais 4': 'privilégier'
    },
    {
      'Verbe Allemand': 'wachsen',
      'Verbe Francais 1': 'grandir',
      'Verbe Francais 2': 'croître'
    },
    {
      'Verbe Allemand': 'wackeln',
      'Verbe Francais 1': 'se déhancher',
      'Verbe Francais 2': 'se trémousser',
      'Verbe Francais 3': 'se tortiller',
      'Verbe Francais 4': 'se secouer'
    },
    { 'Verbe Allemand': 'wagen', 'Verbe Francais 1': 'oser' },
    { 'Verbe Allemand': 'wählen', 'Verbe Francais 1': 'choisir' },
    {
      'Verbe Allemand': 'wahrnehmen',
      'Verbe Francais 1': 'percevoir',
      'Verbe Francais 2': 'prendre conscience'
    },
    {
      'Verbe Allemand': 'wandern',
      'Verbe Francais 1': 'se promener',
      'Verbe Francais 2': 'se balader',
      'Verbe Francais 3': 'marcher',
      'Verbe Francais 4': 'se déplacer'
    },
    {
      'Verbe Allemand': 'warnen',
      'Verbe Francais 1': 'prévenir',
      'Verbe Francais 2': 'avertir',
      'Verbe Francais 3': 'mettre en garde'
    },
    { 'Verbe Allemand': 'warten', 'Verbe Francais 1': 'attendre' },
    { 'Verbe Allemand': 'waschen', 'Verbe Francais 1': 'laver' },
    { 'Verbe Allemand': 'wechseln', 'Verbe Francais 1': 'changer' },
    {
      'Verbe Allemand': 'wecken',
      'Verbe Francais 1': 'réveiller',
      'Verbe Francais 2': 'éveiller'
    },
    {
      'Verbe Allemand': 'wegfahren',
      'Verbe Francais 1': 'partir',
      'Verbe Francais 2': "s'éloigner",
      'Verbe Francais 3': "s'en aller"
    },
    {
      'Verbe Allemand': 'wegfallen',
      'Verbe Francais 1': 'tomber',
      'Verbe Francais 2': 'se passe de'
    },
    {
      'Verbe Allemand': 'weggehen',
      'Verbe Francais 1': 'partir',
      'Verbe Francais 2': "s'éloigner",
      'Verbe Francais 3': "s'en aller",
      'Verbe Francais 4': "s'enfuir"
    },
    {
      'Verbe Allemand': 'weglassen',
      'Verbe Francais 1': 'omettre',
      'Verbe Francais 2': 'laisser de côté'
    },
    {
      'Verbe Allemand': 'wegnehmen',
      'Verbe Francais 1': 'enlever',
      'Verbe Francais 2': 'prendre',
      'Verbe Francais 3': 'retirer'
    },
    {
      'Verbe Allemand': 'wegrennen',
      'Verbe Francais 1': "s'enfuir",
      'Verbe Francais 2': 'courir',
      'Verbe Francais 3': 'se sauver',
      'Verbe Francais 4': 'fuir'
    },
    {
      'Verbe Allemand': 'wegschicken',
      'Verbe Francais 1': 'renvoyer',
      'Verbe Francais 2': 'envoyer',
      'Verbe Francais 3': 'éloigner'
    },
    { 'Verbe Allemand': 'wegschmeißen', 'Verbe Francais 1': 'jeter' },
    {
      'Verbe Allemand': 'wehren',
      'Verbe Francais 1': 'se défendre',
      'Verbe Francais 2': 'se battre',
      'Verbe Francais 3': 'résister',
      'Verbe Francais 4': 'lutter'
    },
    { 'Verbe Allemand': 'weigern', 'Verbe Francais 1': 'refuser' },
    { 'Verbe Allemand': 'weinen', 'Verbe Francais 1': 'pleurer' },
    {
      'Verbe Allemand': 'welken',
      'Verbe Francais 1': 'se faner',
      'Verbe Francais 2': 'se flétrir'
    },
    {
      'Verbe Allemand': 'wellen',
      'Verbe Francais 1': 'onduler',
      'Verbe Francais 2': 'faire des vagues'
    },
    {
      'Verbe Allemand': 'wenden',
      'Verbe Francais 1': 'tourner',
      'Verbe Francais 2': 'faire demi-tour',
      'Verbe Francais 3': 'virer'
    },
    { 'Verbe Allemand': 'werden', 'Verbe Francais 1': 'devenir' },
    {
      'Verbe Allemand': 'werfen',
      'Verbe Francais 1': 'lancer',
      'Verbe Francais 2': 'jeter'
    },
    {
      'Verbe Allemand': 'wetten',
      'Verbe Francais 1': 'parier',
      'Verbe Francais 2': 'miser'
    },
    {
      'Verbe Allemand': 'wickeln',
      'Verbe Francais 1': 'changer de couches',
      'Verbe Francais 2': 'langer'
    },
    { 'Verbe Allemand': 'widerlegen', 'Verbe Francais 1': 'réfuter' },
    {
      'Verbe Allemand': 'widersetzen',
      'Verbe Francais 1': "s'opposer",
      'Verbe Francais 2': 'résister'
    },
    { 'Verbe Allemand': 'widerspiegeln', 'Verbe Francais 1': 'refléter' },
    { 'Verbe Allemand': 'widerstehen', 'Verbe Francais 1': 'résister' },
    {
      'Verbe Allemand': 'widmen',
      'Verbe Francais 1': 'dédier',
      'Verbe Francais 2': 'consacrer'
    },
    {
      'Verbe Allemand': 'wiedergeben',
      'Verbe Francais 1': 'restituer',
      'Verbe Francais 2': 'rendre',
      'Verbe Francais 3': 'reproduire',
      'Verbe Francais 4': 'rendre compte'
    },
    { 'Verbe Allemand': 'wiederholen', 'Verbe Francais 1': 'répéter' },
    { 'Verbe Allemand': 'wiederkehren', 'Verbe Francais 1': 'revenir' },
    { 'Verbe Allemand': 'wiederkommen', 'Verbe Francais 1': 'revenir' },
    { 'Verbe Allemand': 'wiedersehen', 'Verbe Francais 1': 'se revoir' },
    { 'Verbe Allemand': 'wiegen', 'Verbe Francais 1': 'peser' },
    { 'Verbe Allemand': 'wiehern', 'Verbe Francais 1': 'hennir' },
    {
      'Verbe Allemand': 'wimmeln',
      'Verbe Francais 1': 'pulluler',
      'Verbe Francais 2': 'fourmiller',
      'Verbe Francais 3': 'grouiller'
    },
    {
      'Verbe Allemand': 'wimmern',
      'Verbe Francais 1': 'gémir',
      'Verbe Francais 2': 'geindre',
      'Verbe Francais 3': 'pleurnicher',
      'Verbe Francais 4': 'se plaindre'
    },
    {
      'Verbe Allemand': 'winden',
      'Verbe Francais 1': 'se tortiller',
      'Verbe Francais 2': 'se tordre'
    },
    {
      'Verbe Allemand': 'winken',
      'Verbe Francais 1': 'faire un signe',
      'Verbe Francais 2': 'saluer',
      'Verbe Francais 3': 'faire un signe de la main'
    },
    {
      'Verbe Allemand': 'winseln',
      'Verbe Francais 1': 'gémir',
      'Verbe Francais 2': 'geindre',
      'Verbe Francais 3': 'pleurnicher'
    },
    {
      'Verbe Allemand': 'wippen',
      'Verbe Francais 1': 'se balancer',
      'Verbe Francais 2': 'se déhancher',
      'Verbe Francais 3': 'se trémousser'
    },
    {
      'Verbe Allemand': 'wirken',
      'Verbe Francais 1': 'agir',
      'Verbe Francais 2': 'faire des effets'
    },
    {
      'Verbe Allemand': 'wischen',
      'Verbe Francais 1': 'essuyer',
      'Verbe Francais 2': 'balayer',
      'Verbe Francais 3': 'passer la serpillère'
    },
    {
      'Verbe Allemand': 'wispern',
      'Verbe Francais 1': 'murmurer',
      'Verbe Francais 2': 'chuchoter'
    }
  ];

var mesVERBESallemand = [
    {
      'Verbe Allemand': 'verüben',
      'Verbe Francais 1': 'commettre',
      'Verbe Francais 2': 'perpétrer',
      'Verbe Francais 3': 'commettre des actes',       
      'Verbe Francais 4': 'commettre des infractions'  
    },
    {
      'Verbe Allemand': 'verunglücken',
      'Verbe Francais 1': "être victime d'un accident",
      'Verbe Francais 2': 'avoir un accident'
    },
    {
      'Verbe Allemand': 'verunsichern',
      'Verbe Francais 1': 'déstabiliser'
    },
    {
      'Verbe Allemand': 'verunstalten',
      'Verbe Francais 1': 'défigurer',
      'Verbe Francais 2': 'déformer'
    },
    {
      'Verbe Allemand': 'verursachen',
      'Verbe Francais 1': 'provoquer',
      'Verbe Francais 2': 'causer',
      'Verbe Francais 3': 'créer',
      'Verbe Francais 4': 'provoquer'
    },
    {
      'Verbe Allemand': 'verurteilen',
      'Verbe Francais 1': 'condamner',
      'Verbe Francais 2': 'juger'
    },
    { 'Verbe Allemand': 'verwechseln', 'Verbe Francais 1': 'confondre' },
    { 'Verbe Allemand': 'verweigern', 'Verbe Francais 1': 'refuser' },
    {
      'Verbe Allemand': 'verwelken',
      'Verbe Francais 1': 'se flétrir',
      'Verbe Francais 2': 'se faner',
      'Verbe Francais 3': 'faner'
    },
    { 'Verbe Allemand': 'verwenden', 'Verbe Francais 1': 'utiliser' },
    { 'Verbe Allemand': 'verwirklichen', 'Verbe Francais 1': 'réaliser' },
    {
      'Verbe Allemand': 'verwirren',
      'Verbe Francais 1': 'confondre',
      'Verbe Francais 2': 'dérouter',
      'Verbe Francais 3': 'désorienter'
    },
    {
      'Verbe Allemand': 'verwischen',
      'Verbe Francais 1': 'flouter',
      'Verbe Francais 2': 'estomper',
      'Verbe Francais 3': 'brouiller',
      'Verbe Francais 4': 'brouiller les pistes'
    },
    {
      'Verbe Allemand': 'verwöhnen',
      'Verbe Francais 1': 'choyer',
      'Verbe Francais 2': 'gâter',
      'Verbe Francais 3': 'chouchouter',
      'Verbe Francais 4': 'dorloter'
    },
    { 'Verbe Allemand': 'verwunden', 'Verbe Francais 1': 'blesser' },
    {
      'Verbe Allemand': 'verzaubern',
      'Verbe Francais 1': 'enchanter',
      'Verbe Francais 2': 'charmer',
      'Verbe Francais 3': 'envoûter',
      'Verbe Francais 4': 'ensorceler'
    },
    { 'Verbe Allemand': 'verzehren', 'Verbe Francais 1': 'consommer' },
    {
      'Verbe Allemand': 'verzeichnen',
      'Verbe Francais 1': 'enregistrer',
      'Verbe Francais 2': 'répertorier'
    },
    { 'Verbe Allemand': 'verzeihen', 'Verbe Francais 1': 'pardonner' },
    {
      'Verbe Allemand': 'verzerren',
      'Verbe Francais 1': 'déformer',
      'Verbe Francais 2': 'distordre',
      'Verbe Francais 3': 'biaiser'
    },
    { 'Verbe Allemand': 'verzichten', 'Verbe Francais 1': 'renoncer' },
    { 'Verbe Allemand': 'verzieren', 'Verbe Francais 1': 'décorer' },
    {
      'Verbe Allemand': 'verzögern',
      'Verbe Francais 1': 'retarder',
      'Verbe Francais 2': 'temporiser',
      'Verbe Francais 3': 'ralentir'
    },
    { 'Verbe Allemand': 'verzweifeln', 'Verbe Francais 1': 'désespérer' },
    {
      'Verbe Allemand': 'voraussagen',
      'Verbe Francais 1': 'anticiper',
      'Verbe Francais 2': 'prévoir'
    },
    {
      'Verbe Allemand': 'vorbeifahren',
      'Verbe Francais 1': 'passer',
      'Verbe Francais 2': 'passer devant',
      'Verbe Francais 3': 'passer à côté'
    },
    {
      'Verbe Allemand': 'vorbereiten',
      'Verbe Francais 1': 'se préparer',
      'Verbe Francais 2': 'préparer'
    },
    {
      'Verbe Allemand': 'vorbeugen',
      'Verbe Francais 1': 'prévenir',
      'Verbe Francais 2': 'faire de la prévention'
    },
    {
      'Verbe Allemand': 'vordrängeln',
      'Verbe Francais 1': 'couper la file',
      'Verbe Francais 2': 'prendre les devants',
      'Verbe Francais 3': 'prendre la priorité'
    },
    { 'Verbe Allemand': 'vorenthalten', 'Verbe Francais 1': 'retenir' },
    {
      'Verbe Allemand': 'vorfallen',
      'Verbe Francais 1': 'se faire remarquer',
      'Verbe Francais 2': 'se présenter',
      'Verbe Francais 3': 'se manifester',
      'Verbe Francais 4': 'se montrer à la hauteur'
    },
    { 'Verbe Allemand': 'vorfinden', 'Verbe Francais 1': 'trouver' },
    {
      'Verbe Allemand': 'vorgeben',
      'Verbe Francais 1': 'faire semblant',
      'Verbe Francais 2': 'prétendre'
    },
    {
      'Verbe Allemand': 'vorhaben',
      'Verbe Francais 1': 'avoir des projets',
      'Verbe Francais 2': 'prévoir',
      'Verbe Francais 3': "avoir l'intention de"
    },
    {
      'Verbe Allemand': 'vorhersehen',
      'Verbe Francais 1': 'prévoir',
      'Verbe Francais 2': 'anticiper'
    },
    {
      'Verbe Allemand': 'vorkommen',
      'Verbe Francais 1': 'se présenter',
      'Verbe Francais 2': 'être présent',
      'Verbe Francais 3': 'arriver',
      'Verbe Francais 4': 'se produire'
    },
    {
      'Verbe Allemand': 'vorlesen',
      'Verbe Francais 1': 'lire à haute voix'
    },
    {
      'Verbe Allemand': 'vormachen',
      'Verbe Francais 1': 'faire semblant',
      'Verbe Francais 2': "montrer l'exemple"
    },
    {
      'Verbe Allemand': 'vornehmen',
      'Verbe Francais 1': 'procéder',
      'Verbe Francais 2': 'faire',
      'Verbe Francais 3': 'faire des efforts'
    },
    { 'Verbe Allemand': 'vorschlagen', 'Verbe Francais 1': 'proposer' },
    {
      'Verbe Allemand': 'vorschreiben',
      'Verbe Francais 1': 'imposer',
      'Verbe Francais 2': 'prescrire'
    },
    {
      'Verbe Allemand': 'vorsorgen',
      'Verbe Francais 1': 'prendre des précautions',
      'Verbe Francais 2': 'prendre des dispositions'
    },
    {
      'Verbe Allemand': 'vorstellen',
      'Verbe Francais 1': 'présenter',
      'Verbe Francais 2': 'se présenter'
    },
    {
      'Verbe Allemand': 'vortäuschen',
      'Verbe Francais 1': 'feindre',
      'Verbe Francais 2': 'faire semblant',
      'Verbe Francais 3': 'simuler'
    },
    {
      'Verbe Allemand': 'vortragen',
      'Verbe Francais 1': 'réciter',
      'Verbe Francais 2': 'présenter',
      'Verbe Francais 3': 'faire une présentation',
      'Verbe Francais 4': 'faire un exposé'
    },
    { 'Verbe Allemand': 'vorübergehen', 'Verbe Francais 1': 'passer' },
    {
      'Verbe Allemand': 'vorweisen',
      'Verbe Francais 1': 'présenter',
      'Verbe Francais 2': 'montrer'
    },
    {
      'Verbe Allemand': 'vorwerfen',
      'Verbe Francais 1': 'reprocher',
      'Verbe Francais 2': 'accuser'
    },
    {
      'Verbe Allemand': 'vorzeigen',
      'Verbe Francais 1': 'montrer',
      'Verbe Francais 2': 'présenter'
    },
    {
      'Verbe Allemand': 'vorziehen',
      'Verbe Francais 1': 'préférer',
      'Verbe Francais 2': 'avancer',
      'Verbe Francais 3': 'anticiper',
      'Verbe Francais 4': 'privilégier'
    },
    {
      'Verbe Allemand': 'wachsen',
      'Verbe Francais 1': 'grandir',
      'Verbe Francais 2': 'croître'
    },
    {
      'Verbe Allemand': 'wackeln',
      'Verbe Francais 1': 'se déhancher',
      'Verbe Francais 2': 'se trémousser',
      'Verbe Francais 3': 'se tortiller',
      'Verbe Francais 4': 'se secouer'
    },
    { 'Verbe Allemand': 'wagen', 'Verbe Francais 1': 'oser' },
    { 'Verbe Allemand': 'wählen', 'Verbe Francais 1': 'choisir' },
    {
      'Verbe Allemand': 'wahrnehmen',
      'Verbe Francais 1': 'percevoir',
      'Verbe Francais 2': 'prendre conscience'
    },
    {
      'Verbe Allemand': 'wandern',
      'Verbe Francais 1': 'se promener',
      'Verbe Francais 2': 'se balader',
      'Verbe Francais 3': 'marcher',
      'Verbe Francais 4': 'se déplacer'
    },
    {
      'Verbe Allemand': 'warnen',
      'Verbe Francais 1': 'prévenir',
      'Verbe Francais 2': 'avertir',
      'Verbe Francais 3': 'mettre en garde'
    },
    { 'Verbe Allemand': 'warten', 'Verbe Francais 1': 'attendre' },
    { 'Verbe Allemand': 'waschen', 'Verbe Francais 1': 'laver' },
    { 'Verbe Allemand': 'wechseln', 'Verbe Francais 1': 'changer' },
    {
      'Verbe Allemand': 'wecken',
      'Verbe Francais 1': 'réveiller',
      'Verbe Francais 2': 'éveiller'
    },
    {
      'Verbe Allemand': 'wegfahren',
      'Verbe Francais 1': 'partir',
      'Verbe Francais 2': "s'éloigner",
      'Verbe Francais 3': "s'en aller"
    },
    {
      'Verbe Allemand': 'wegfallen',
      'Verbe Francais 1': 'tomber',
      'Verbe Francais 2': 'se passe de'
    },
    {
      'Verbe Allemand': 'weggehen',
      'Verbe Francais 1': 'partir',
      'Verbe Francais 2': "s'éloigner",
      'Verbe Francais 3': "s'en aller",
      'Verbe Francais 4': "s'enfuir"
    },
    {
      'Verbe Allemand': 'weglassen',
      'Verbe Francais 1': 'omettre',
      'Verbe Francais 2': 'laisser de côté'
    },
    {
      'Verbe Allemand': 'wegnehmen',
      'Verbe Francais 1': 'enlever',
      'Verbe Francais 2': 'prendre',
      'Verbe Francais 3': 'retirer'
    },
    {
      'Verbe Allemand': 'wegrennen',
      'Verbe Francais 1': "s'enfuir",
      'Verbe Francais 2': 'courir',
      'Verbe Francais 3': 'se sauver',
      'Verbe Francais 4': 'fuir'
    },
    {
      'Verbe Allemand': 'wegschicken',
      'Verbe Francais 1': 'renvoyer',
      'Verbe Francais 2': 'envoyer',
      'Verbe Francais 3': 'éloigner'
    },
    { 'Verbe Allemand': 'wegschmeißen', 'Verbe Francais 1': 'jeter' },
    {
      'Verbe Allemand': 'wehren',
      'Verbe Francais 1': 'se défendre',
      'Verbe Francais 2': 'se battre',
      'Verbe Francais 3': 'résister',
      'Verbe Francais 4': 'lutter'
    },
    { 'Verbe Allemand': 'weigern', 'Verbe Francais 1': 'refuser' },
    { 'Verbe Allemand': 'weinen', 'Verbe Francais 1': 'pleurer' },
    {
      'Verbe Allemand': 'welken',
      'Verbe Francais 1': 'se faner',
      'Verbe Francais 2': 'se flétrir'
    },
    {
      'Verbe Allemand': 'wellen',
      'Verbe Francais 1': 'onduler',
      'Verbe Francais 2': 'faire des vagues'
    },
    {
      'Verbe Allemand': 'wenden',
      'Verbe Francais 1': 'tourner',
      'Verbe Francais 2': 'faire demi-tour',
      'Verbe Francais 3': 'virer'
    },
    { 'Verbe Allemand': 'werden', 'Verbe Francais 1': 'devenir' },
    {
      'Verbe Allemand': 'werfen',
      'Verbe Francais 1': 'lancer',
      'Verbe Francais 2': 'jeter'
    },
    {
      'Verbe Allemand': 'wetten',
      'Verbe Francais 1': 'parier',
      'Verbe Francais 2': 'miser'
    },
    {
      'Verbe Allemand': 'wickeln',
      'Verbe Francais 1': 'changer de couches',
      'Verbe Francais 2': 'langer'
    },
    { 'Verbe Allemand': 'widerlegen', 'Verbe Francais 1': 'réfuter' },
    {
      'Verbe Allemand': 'widersetzen',
      'Verbe Francais 1': "s'opposer",
      'Verbe Francais 2': 'résister'
    },
    { 'Verbe Allemand': 'widerspiegeln', 'Verbe Francais 1': 'refléter' },
    { 'Verbe Allemand': 'widerstehen', 'Verbe Francais 1': 'résister' },
    {
      'Verbe Allemand': 'widmen',
      'Verbe Francais 1': 'dédier',
      'Verbe Francais 2': 'consacrer'
    },
    {
      'Verbe Allemand': 'wiedergeben',
      'Verbe Francais 1': 'restituer',
      'Verbe Francais 2': 'rendre',
      'Verbe Francais 3': 'reproduire',
      'Verbe Francais 4': 'rendre compte'
    },
    { 'Verbe Allemand': 'wiederholen', 'Verbe Francais 1': 'répéter' },
    { 'Verbe Allemand': 'wiederkehren', 'Verbe Francais 1': 'revenir' },
    { 'Verbe Allemand': 'wiederkommen', 'Verbe Francais 1': 'revenir' },
    { 'Verbe Allemand': 'wiedersehen', 'Verbe Francais 1': 'se revoir' },
    { 'Verbe Allemand': 'wiegen', 'Verbe Francais 1': 'peser' },
    { 'Verbe Allemand': 'wiehern', 'Verbe Francais 1': 'hennir' },
    {
      'Verbe Allemand': 'wimmeln',
      'Verbe Francais 1': 'pulluler',
      'Verbe Francais 2': 'fourmiller',
      'Verbe Francais 3': 'grouiller'
    },
    {
      'Verbe Allemand': 'wimmern',
      'Verbe Francais 1': 'gémir',
      'Verbe Francais 2': 'geindre',
      'Verbe Francais 3': 'pleurnicher',
      'Verbe Francais 4': 'se plaindre'
    },
    {
      'Verbe Allemand': 'winden',
      'Verbe Francais 1': 'se tortiller',
      'Verbe Francais 2': 'se tordre'
    },
    {
      'Verbe Allemand': 'winken',
      'Verbe Francais 1': 'faire un signe',
      'Verbe Francais 2': 'saluer',
      'Verbe Francais 3': 'faire un signe de la main'
    },
    {
      'Verbe Allemand': 'winseln',
      'Verbe Francais 1': 'gémir',
      'Verbe Francais 2': 'geindre',
      'Verbe Francais 3': 'pleurnicher'
    },
    {
      'Verbe Allemand': 'wippen',
      'Verbe Francais 1': 'se balancer',
      'Verbe Francais 2': 'se déhancher',
      'Verbe Francais 3': 'se trémousser'
    },
    {
      'Verbe Allemand': 'wirken',
      'Verbe Francais 1': 'agir',
      'Verbe Francais 2': 'faire des effets'
    },
    {
      'Verbe Allemand': 'wischen',
      'Verbe Francais 1': 'essuyer',
      'Verbe Francais 2': 'balayer',
      'Verbe Francais 3': 'passer la serpillère'
    },
    {
      'Verbe Allemand': 'wispern',
      'Verbe Francais 1': 'murmurer',
      'Verbe Francais 2': 'chuchoter'
    }
  ];

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

    // ici il y a un bug, lorsque l'on a pas recharger
    // le tableau est donc vide

    if(leDernierVerbeReached === false){
        verbRandom = random_item(mesVERBESallemand);
        verbeAllemand.textContent = verbRandom['Verbe Allemand'];
    
        document.getElementById("traducFra").value = "";
    
        document.getElementById("leDernier").textContent = "";
    
        document.getElementById("resultUn").textContent = "Le résultat";
        document.getElementById("resultDeux").textContent = " ";
        document.getElementById("resultTrois").textContent = " ";
        document.getElementById("resultQuatre").textContent = " ";

        document.querySelector(".reponse").textContent = "La réponse SVP";

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
                    document.getElementById("resultUn").textContent = "c'est bon!";
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
                    document.getElementById("resultUn").textContent = "C'est faux! Essaye encore!";
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
                    document.getElementById("leDernier").textContent = mesVERBESallemand[0]['Verbe Allemand'] + " = " + mesVERBESallemand[0]['Verbe Francais 1'];
                    
                    leDernierVerbeReached = true; 
                }

            }
        }
    }
    
});






// il faut que je code quand on recharge le tableau de verbe

document.getElementById("rechargeTableau").addEventListener("click", function(){

    mesVERBESallemand = mesVerbes;

    document.getElementById("leDernier").textContent = "Le dernier verbe ";

    console.log(mesVERBESallemand);

    leDernierVerbeReached = false;
    
});

// ici addEventsListener sur le bouton #reponse

document.querySelector(".reponse").addEventListener("click", function(){

  var leVerbeAffiche = verbeAllemand.textContent;

  for(let i in mesVERBESallemand){
    if(leVerbeAffiche === mesVERBESallemand[i]['Verbe Allemand']){
        leTabReponse = [
            mesVERBESallemand[i]['Verbe Francais 1'], 
            mesVERBESallemand[i]['Verbe Francais 2'],
            mesVERBESallemand[i]['Verbe Francais 3'],
            mesVERBESallemand[i]['Verbe Francais 4']
        ];
    }
  }

  document.getElementById("resultUn").textContent = leTabReponse[0];
  document.getElementById("resultDeux").textContent = leTabReponse[1];
  document.getElementById("resultTrois").textContent = leTabReponse[2];
  document.getElementById("resultQuatre").textContent = leTabReponse[3];
});


// il faut utiliser find()

// tableau.find()   on lui donne des critères

// créer une fonction d'import, lecture du fichier excel

// fs file system pour faire de la lecture



