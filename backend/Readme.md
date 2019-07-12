# Api usage :

## /gate

## /users
### /admin
```js
In the Headers :
{
	'Content-Type': 'application/json',
	Accept: 'application/json',
	Authorization: '7f5056dcedef4a3260eef5073b5efb438iXQThhAtLmLrJCIrzg9WdNtYQyeHFBg1YWSEbtIjq4GLt02z2IJjUyBPqhA8tPg',
}
```
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
