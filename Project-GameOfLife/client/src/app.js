/* Projet - Le code du stagiaire
~ Lisez le README.md pour plus d'informations ~
*/

import gameServer from './gameServer'

const seedURL = './seeds/seed1.seed'
const updateTime = 1000

gameServer.onMessage = (message) => {
    const messageData = JSON.parse(message.data);
        /*
           Je comprends pas trop ce que je reçois ici quand
           le serveur m'envoie des infos ?!
           Ça ressemble à un objet JS mais je peux rien
           faire avec... NUL
        */
  //   console.log('LA DATA', messageData)

     let width = messageData.width;
     let height = messageData.height;
     let cells = messageData.cells;

    let div = document.querySelector('#grid');
    let table = "<table width=100% height=100%>";
    for (let y = 0; y < height; y++)
    {
        table += '<tr>';
        for (let x = 0; x < width; x++)
        {
          if (cells[y][x]['alive'] === true)
          {
          table += "<td style='background-color: green;'></td>";
          }else{
          table += "<td style='background-color: red;'></td>";
               }

        }
        table += '</tr>'
    }
    table += '</table>';
    div.innerHTML = table;
}

gameServer
    .loadSeed(seedURL)
    .then((seed) => {
        /*
           Je reçois bien une seed ici !
        */
        gameServer.init(seed) // On m'a dit d'utiliser ça mais ça retourne RIEN
    })
    .catch((error) => {
        console.error(error)
    })

const interval = setInterval(() => {
    gameServer.next()
}, updateTime)
