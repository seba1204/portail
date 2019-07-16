# Api usage :

## /toogleGate
### POST
just contact a relay to open the garden gate
It also takes a picture of entrance and save it with date and hour as name

## /images/all
### GET
returns a json file of all picture names available

returns an empty json if there is no images
Some Markdown text with <span style="color:blue">some *blue* text</span>.
## /images/:name
### GET
return the picture corresponding to the name

return a 404 error if the image doesn't exist



## TODO
- trying to implement a mongodb database on a 32bit raspbian for my Raspberry Pi 3 B
- try to see what signals to send to make the bell ring
