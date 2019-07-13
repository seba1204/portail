# Api usage :

## /gate

## /users
### /
#### POST
##### headers
CF admin headers
##### body
```js
{
  lastname: 'Sébastien',
  name: 'PONT',
  username: 'seba12',
  email: 'seba12.04@orange.fr',
  password: '**********'
}
```
#### DELETE
##### headers
CF admin headers
##### body
To delete a user you have to send in the body one of these possibilities :
```js
{
  username: 'seba12',
}
```
OR
```js
{
  email: 'seba12.04@orange.fr',
}
```
OR
```js
{
  token: '452976146',
}
```
#### PUT
##### headers
CF admin headers
##### body
To modify something on a user you have to specify an identifier (email, pseudo, or token) and what to change :

For example :
```js
{
  identifier: {pseudo: 'seba12'},
  change: {password: '**************'}
}
```


### /admin
```js
In the Headers :
{
	'Content-Type': 'application/json',
	Accept: 'application/json',
	token: '452976146',
}
```
#### POST
Ajouter le token d'un utilisateur à la db
##### body
- Required : token
- Optional :
  * isAdmin (default false)
  * isAllowed (default true)

Ex :
```js
{
  token: '452976146'
}
```

#### GET
retourne la liste de tous les utilisateurs si aucun username n'est passé dans le body

With several usernames :
```js
{
  usernames: ['seba12', 'tipi']
}
```

With only one username :
```js
{
  usernames: ['seba12']
}
```

Get all usernames :
```js
{
}
```

#### PUT
modifie les droits d'un utilisateur
