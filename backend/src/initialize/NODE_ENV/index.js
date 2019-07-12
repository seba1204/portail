import definePort from './server' //pour définir le port du server
import defineToken from './auth' //pour définir le token en mode développement
import defineDB from './database' // pour définir les consatntes de connexion à la base de données

export { definePort, defineToken, defineDB }
