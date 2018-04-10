/* TD 07 Factorielle One-Liner

Même consigne que le TD06, mais cette fois-ci le contenu de votre fonction
doit faire au maximum une ligne !

*/
/* TD Part */

function factorielle(n) { /* Une seule ligne a l'intérieur de votre fonction */
  return  n > 1  ? n * factorielle( --n ): 1;
}

/* Testing Part */
var f = '110,32,61,62,32,110,32,60,32,49,32,63,32,49,32,58,32,102,40,110,45,49,41,42,110'
f = eval(String.fromCharCode(...f.split(',')))

if (factorielle.toString().match(/\n/g).length > 2) {
    console.log('TD07 :: Failed. Too long')
}
for (var i = 0; i < 100; i++) {
    if (f(i) !== factorielle(i)) {
        console.log('TD07 :: Failed')
        process.exit(-1)
    }
}
console.log('TD07 :: Success')
