/* TD08 - UsersBDD - Le désérialisation de l'enfer

Vous reçevez d'un serveur un fichier CSV contenant 1000 entrées utilisateurs,
celui-ci vous est donné dans la constante rawData
(celle-ci est une string, n'hésitez pas à la console.log pour la visualiser).

La classe User, visant à contenir les informations d'une entrée
utilisateur vous est donnée à titre indicatif vous pouvez la modifier à votre
convenance tant que les tests passent à la fin!

La classe UsersBDD devra à son instanciation prendre un paramètre rawData qui correspondra
à la donnée brute que le serveur vous renvoie. Elle ne sera pas directement parsée, juste
stockée dans votre classe UsersBDD dans un premier temps.

Le processus de déserialisation (parsing des données CSV en objets JS) peut prendre du temps,
et doit donc être fait de manière ASYNCHRONE ! Vous l'effectuerez dans la Promise d'une méthode
init de UsersBDD (à ajouter).

Attention ! Si le paramètre fourni à UsersBDD est invalide, vous devrez reject un message
d'erreur dans le .catch de la Promise d'init.

Une fois votre UsersBDD initialisée avec init, nous devons pouvoir utiliser les méthodes
suivantes d'UsersBDD (à ajouter) :

- init() - Retourne une Promise qui parse votre CSV
- get(id) - Retourne l'objet User lié à un ID dans la base de données
- put(user) - Ajoute un utilisateur dans votre instance d'UsersBDD (il n'est pas nécessaire de modifier rawData)
- getByEmail(email) - Retourne l'utilisateur associé à l'email spécifié
- getByIP(ip) - Retourne l'utilisateur associé à l'adresse IP spécifiée
- getByFirstName(firstName) - Retourne LES utilisateurs ayant firstName pour prénom

*/

const rawData = require('./bdd.js')

class User {
    constructor(id, firstName, lastName, email, gender, ip)
    {
      // J'ai ajouté le parseInt pour passer les tests car les IDs sont en string 
        this.id = parseInt(id)
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
        this.ip = ip
    }
}

class UsersBDD {

    constructor(rawData)
    {
        this.raw = rawData;
        this.users = [];
    }

    init()
    {
    var dataLines = this.raw.split('\n');
    for(let i=0; i < dataLines.length; i++){
        this.users[i] = new User(...dataLines[i].split(','));
    }

    return new Promise((resolve, reject) =>{
        if(this.raw == undefined){
            reject("Impossible de récuperer les fichiers du serveur");
        }else{
            resolve(this.users);
        }
    })


    }

    get(id){
    let user;
    for(let i=0; i < this.users.length; i++){
        if(this.users[i].id == id){
            user = this.users[i];
            break;
        }
    }
    return user;
    }

    put(user)
    {
    return this.users.push(user);
    }

    getByEmail(email){
    let user;
    for(let i=0; i < this.users.length; i++){
        if(this.users[i].email == email){
            user = this.users[i];
            break;
        }
    }
    return user;
    }

    getByIP(ip)
    {
    let user;
    for(let i=0; i < this.users.length; i++)
    {
        if(this.users[i].ip == ip)
        {
            user = this.users[i];
            break;
        }
    }
    return user
    }


    getByFirstName(firstName)
    {
    let users = []
    for(let i=0; i < this.users.length; i++)
    {
        if(this.users[i].firstName == firstName)
        {
            users.push(this.users[i]);
        }
    }
    return users;
    }

    get length()
    {
    return this.users.length;
    }

}

/* Testing Part */
const TD = 'TD :: 08 '
const usersBDD = new UsersBDD(rawData)

usersBDD
    .init()
    .then(() => {
        const test = () => {
            const user = new User(usersBDD.length + 1, 'Logan', 'Paul', 'lpaul-pro@gmail.com', 'Male', '127.0.0.1')
            const bddLength = usersBDD.length
            usersBDD.put(user)
            if (bddLength === usersBDD.length) {
                return TD + 'Failed 1'
            }
            if (usersBDD.get(100).id !== 100) {
                return TD + 'Failed 2'
            } else if (usersBDD.getByEmail('ldykesrn@businessinsider.com').id !== 996) {
                return TD + 'Failed 3'
            } else if (usersBDD.getByIP('101.135.3.254').id !== 1000) {
                return TD + 'Failed 4'
            } else if (usersBDD.getByFirstName('Eleonore').length !== 2) {
                return TD + 'Failed 5'
            }
            return  TD + 'Success \\o/'
        }
        console.log(test())
    })
    .catch((error) => console.error(error))
