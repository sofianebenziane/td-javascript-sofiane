/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et
ne retournant que les nombres de ce tableau faisant partie
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */

const fibFilter = (array) => {
return array.filter( item => Math.sqrt(5*Math.pow(item, 2)-4) === parseInt(Math.sqrt(5*Math.pow(item, 2)-4)) || Math.sqrt(5*Math.pow(item, 2)+4) === parseInt(Math.sqrt(5*Math.pow(item, 2)+4)) ? true : false);
}

/* Testing Part */
const array = [0,1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter(array).toString() == [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD01 :: Success' : 'TD01 :: Failed')
