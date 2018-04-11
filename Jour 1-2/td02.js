/* TD02

Le but de cet exercice est de créer une ExecutionQueue.

C'est une pile d'éxecution a laquelle on pourra ajouter des fonctions à executer.

Celles-ci ne seront pas directement executées, seulement lorsque la méthode execute

de l'ExecutionQueue sera appellée.

Les retours des fonctions executées seront retournées dans un tableau ordonné à l'appel
de la méthode execute().

Il sera également possible de connaître le nombre de fonctions dans la queue en utilisant la méthode size().

Exemple :

var queue = new ExecutionQueue

queue.size() // 0

queue.push(function() {return 'foo'})

queue.size() // 1

queue.execute() // ['foo']

*/
/* TD Part */
function ExecutionQueue() {


   var functionQueue = [];

   var ExecutionQueue = {
     push : function(element)
     {
       functionQueue.push(element);
     },
     size : function()
     {
       return parseInt(functionQueue.length);
     },
     execute : function ()
     {
       var result = [];

         while (0 != functionQueue.length)
         {
           result.push(functionQueue[0]());
           functionQueue.shift();
         }

       return result;
     }
   };

   return ExecutionQueue;
}

/* Testing Part */
var queue = new ExecutionQueue()
queue.push(function() {
    return 'test'
})
queue.push(function() {
    return 'OK'
})

if (queue.execute().join() === 'test,OK' && queue.size() === 0) {
    console.log('TD02 :: Success')
} else {
    console.log('TD02 :: Failed')
}
