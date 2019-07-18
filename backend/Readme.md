# Api usage :

## /toogleGate
### POST
 - just contact a relay to open the garden gate
 - It also takes a picture of entrance and save it with date and hour as name



## /images/all
### GET
 - returns a json file of all picture names available
 - returns an empty json if there is no images



## /images/:name
### GET
 - return the picture corresponding to the name
 - return a 404 error if the image doesn't exist



## /temp/cpu
### GET
 - returns the current raspberry CPU temperature





## TODO
- trying to implement a mongodb database on a 32bit raspbian for my Raspberry Pi 3 B
- try to see what signals to send to make the bell ring
- add a endpoint to delete images
- add an endpoint to reboot Raspberry
- add an endpoint to restart server
- add error  but gate is toogled !
- add an endpoint /images/:id?width=---
