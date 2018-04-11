/* TD 06 Factorielle

En mathématiques, la factorielle d'un entier naturel n est le produit des nombres entiers
strictement positifs inférieurs ou égaux à n.

Par exemple :
    0! = 1
    1! = 1
    2! = 1 × 2 = 2
    3! = 1 × 2 × 3 = 6
    4! = 1 × 2 × 3 × 4 = 24
    10! = 1 × 2 × 3 × 4 × 5 × 6 × 7 × 8 × 9 × 10 = 3 628 800

Source : https://fr.wikipedia.org/wiki/Factorielle

*/
/* TD Part */

function factorielle( n ) {
  if (n < 2)
  {
  return 1;
  }
  return n * factorielle( --n );

}

/* Testing Part */
var f = '110,32,61,62,32,110,32,60,32,49,32,63,32,49,32,58,32,102,40,110,45,49,41,42,110'
f = eval(String.fromCharCode(...f.split(',')))

for (var i = 0; i < 100; i++) {
    if (f(i) !== factorielle(i)) {
        console.log('TD06 :: Failed')
        process.exit(-1)
    }
}
console.log('TD06 :: Success')
