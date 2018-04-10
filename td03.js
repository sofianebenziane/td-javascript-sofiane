/* TD03

Le but de cet exercice est de créer une fonction qui,
après trois secondes retournera le nombre 42 dans la callback
passée en paramètre.

*/

/* TD Part */

function waitThreeSecondsAndReturn42(callback) {
  var returnedValue = 42;
  setTimeout(function() { return callback(returnedValue); }, 3000);
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

waitThreeSecondsAndReturn42(callback)
