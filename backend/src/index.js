import * as init from './initialize'

//On démarre les différents services
init.setEnvVar()
.then(init.startDB)
.then(init.startServ)
