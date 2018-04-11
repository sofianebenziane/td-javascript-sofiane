/* TD09 - FileName verification

Dans cet exercice vous devez écrire une fonction qui vérifie que
les noms des fichiers de TD correspondent bien à la norme utilisée
pour ce cours :

Sans espaces, 'td' en majuscules ou minuscule, suivi de deux chiffres, et d'une extension.

Les extensions supportées sont .js et .php.

Par exemple

td01.js // VALIDE
td-01.js // INVALIDE
TD01.js // VALIDE
EXO01.js // INVALIDE
TD02.php // VALIDE

*/

/* TD Part */
function verify(fileName) {
    var regex = /^[tdTD]+[0-9]{2}(.js|.php)/g
    return regex.test(fileName)
}

/* Testing Part */
var fileNames = {
    'td01.js': true,
    'Td01.js': true,
    'rd01.js': false,
    '_td01.js': false,
    'tD01.js': true,
    'exo01.php': false,
    'td21.js': true,
    'td01.php': true,
    't d01.php': false
}

function test() {
    var keys = Object.keys(fileNames)
    for (var i = 0; i < keys.length; i++) {
        console.log(keys[i])
        if (verify(keys[i]) !== fileNames[keys[i]]) {
            return false
        }
    }
    return true
}

console.log(test() === true ? 'TD08 :: Success' : 'TD08 :: Failed')
