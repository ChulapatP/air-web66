const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const airplaneController = require('./controllers/airplaneController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)
     app.get('/airplanes', airplaneController.index)
     // create user
     app.post('/user', UserController.create)
     app.post('/airplane', airplaneController.create)
     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)
     app.put('/airplane/:airplaneId', airplaneController.put)
     // delete user
     app.delete('/user/:userId', UserController.delete)
     app.delete('/airplane/:airplaneId', airplaneController.delete)
     // get all user
     app.get('/user/:userId', UserController.show)
     app.get('/airplane/:airplaneId', airplaneController.show)
     // login
     app.post('/login', UserAuthenController.login)


}   