/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et
ne retournant que les nombres de ce tableau faisant partie
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */

const fibFilter = (array) => {
//  console.log(array);

return (

    array.filter( item => {

      if (item < 2)
      {
        return true;
      }else{
var firstTerm = 0;

var secondTerm = 1;

var thirdTerm = 0;

while (thirdTerm < item)
{
    thirdTerm = firstTerm + secondTerm;

    firstTerm = secondTerm;

    secondTerm = thirdTerm;
}

if(thirdTerm == item)
{
    return true
}
      }
    })
  );
}

/* Testing Part */
const array = [0,1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter(array).toString() == [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD01 :: Success' : 'TD01 :: Failed')
