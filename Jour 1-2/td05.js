/* TD Part

Le but de cet exercice est d'écrire une fonction simulant
un lancer de dé (6).
Le nombre retourné par la fonction est évidemment choisi aléatoirement.

*/

function rollDice() {
  value = Math.ceil( (Math.random()*5) + 1 );
  console.log(value);
  return value;
}

/* Testing Part */
var lastValue = 0
var hasChanged = false

function test() {
    for (var i = 0;i < 1000; i++) {
        var value = rollDice()
        if (value < 0 || value > 6 || !Number.isInteger(value)) {
            return false
        }
        if (lastValue !== value) {
            hasChanged = true
        }
        lastValue = value
    }
    return hasChanged
}
console.log(test() === true ? 'TD05 :: Passed' : 'TD05 :: Failed')
