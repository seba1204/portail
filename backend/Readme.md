# Api usage :
- /toogleGate_[POST]
- /images
  - /all [GET]
  - /:name [GET]
  - /:name [DELETE]
- /temp
  - /cpu [GET]
- /command
  - /restart
    - /:service [POST]

**:point_right:/toogleGate**
=====================
### POST
 - just contact a relay to open the garden gate
 - It also takes a picture of entrance and save it with date and hour as name



**:point_right:/images/all**
=====================
### GET
 - returns a json file of all picture names available
 - returns an empty json if there is no images


 | query       | type   | possible values    | default |
 |-------------|--------|:------------------:|:-------:|
 | width (px)  | number | 1-5000             | 300     |
 | height (px) | number | 1-5000             |         |
 | quality     | number | 0-100 (0=original) | 50      |


**:point_right:/images/:name**
=====================
### GET
 - return the picture corresponding to the name
 - return a 404 error if the image doesn't exist

 - queries :

### DELETE
 - delete the picture corresponding to the given name
 - return a 404 error if the image doesn't exist


**:point_right:/temp/cpu**
=====================
### GET
 - returns the current raspberry CPU temperature


**:point_right:/command/restart/:service**
=====================
### POST
- restart given service
- services allowed :
    - Raspberry
    - Server
---
## TODO
- [ ] trying to implement a mongodb database on a 32bit raspbian for my Raspberry Pi 3 B
- [ ] try to see what signals to send to make the bell ring
- [x] fix cpu temp reading bug
- [x] add an endpoint to restart server
- [x] add an endpoint to restart raspberry
- [ ] add error  'but gate is toogled !'
- [ ] add an endpoint /images/:id?width=---
- [x] add an endpoint to delete images
