/* TD08 Robbie

Dans cet exercice, vous devez créer un petit robot.

Celui-ci prend en paramètre une instruction (représentée par un nombre), et potentiellement un
ou plusieurs paramètres à la suite de celle-ci.

Voici la liste des instructions que votre robot doit être capable d'executer :

Format :

Numéro de l'instruction [paramètre1, paramètre2] // Description de l'instruction

Instructions :

1 [prénom]                  // Retourner 'Bonjour {prénom}!'
2                           // Retourner la date au format UTC
3 [texte]                   // Remplacer les 't' par des '7' dans {texte}
4 [texte]                   // Remplacer tous les mots par '####' dans {texte}
5 [texte, mot, alt]         // Remplacer {mot} par {alt} dans {texte}
6 [texte]                   // Remplacer la chaine 'date' par la date au format UTC dans {texte}

Exemple :

var robbie = Robbie()
robbie.do(1, 'Jérémie') // Retourne 'Bonjour Jérémie!'

*/

function Robbie () {
  return {
    do : function()
    {
      switch (arguments[0]) {
        case 1:
         return `Bonjour ${arguments[1]}!`;
         //return 'Bonjour '+arguments[1]+'!';
          break;
        case 2:
          return new Date().toISOString();
          break;
        case 3:
          return arguments[1].replace(/t/gi, '7');
          break;
        case 4:
          return arguments[1].replace(/[a-zA-Z]/g, '#');
          break;
        case 5:
          return arguments[1].replace(new RegExp(arguments[2], 'g'), arguments[3]);
          break;
        case 6:
          return arguments[1].replace(/date/g, new Date().toISOString())
          break;
    }

    },
  }
}

/* TD Part */

/* Testing Part */

function test() {
    var robbie = new Robbie()
    var text = 'Je suis un test'

    if (robbie.do(1, 'Jérémie') !== 'Bonjour Jérémie!') {
        return false
    } else if (!robbie.do(2)) {
        return false
    } else if (robbie.do(3, text) !== 'Je suis un 7es7') {
        return false
    } else if (robbie.do(4, text) !== '#### #### #### ####' && robbie.do(4, text) !== '## #### ## ####') {
        return false
    } else if (robbie.do(5, text, 'test', 'toast') !== 'Je suis un toast') {
        return false
    } else if (!robbie.do(6, text)) {
        return false
    }
    return true
}

console.log(test() === true ? 'TD08 :: Success' : 'TD08 :: Failed')
