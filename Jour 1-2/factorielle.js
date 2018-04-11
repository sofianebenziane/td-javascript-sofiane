
function factorielle(n) { /* Une seule ligne a l'intérieur de votre fonction */
  return  n > 1  ? n * factorielle( --n ): 1;
}

module.exports = factorielle;
