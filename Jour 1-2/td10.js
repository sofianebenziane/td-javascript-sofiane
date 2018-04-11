/* TD10 Import 

Dans cet exercice pas besoin de modifier le code de 
ce fichier (td10.js) pour le faire fonctionner.

Le but est que celui-ci arrive correctement à importer votre
fonction factorielle dans le fichier factorielle.js (le créer et le remplir).

*/

/* Testing Part */
var factorielle = require('./factorielle.js')

var f = '110,32,61,62,32,110,32,60,32,49,32,63,32,49,32,58,32,102,40,110,45,49,41,42,110'
f = eval(String.fromCharCode(...f.split(',')))

for (var i = 0; i < 100; i++) {
    if (f(i) !== factorielle(i)) {
        console.log('TD07 :: Failed')
        process.exit(-1)
    }
}
console.log('TD07 :: Success')
