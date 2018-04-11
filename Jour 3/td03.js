/* TD03

Le but de cet exercice est de créer fonction retournant une Promise
qui après trois secondes retournera le nombre 42 dans son 'then'.

*/

/* TD Part */

function waitThreeSecondsAndSend42InTheThen() {
  var promise = new Promise(function(resolve, reject)
  {
    var returnedValue = 42;
    var timeout = setTimeout(function() { return resolve(returnedValue); }, 3000);
    if (timeout === undefined)
    {
      reject('Une erreur est survenue');
    }
  }
);

  return promise;
}

/* Testing part */
var startTime = Number(new Date())

function callback(returnedValue) {
    var timeShift = parseInt((Number(new Date()) - startTime) / 1000)

    if (timeShift === 3 &&
        returnedValue === 42) {
        console.log('TD03 :: Passed')
    } else {
        console.log('TD03 :: Failed')
    }
}

waitThreeSecondsAndSend42InTheThen()
    .then(callback)
    .catch(error => console.error(error))
