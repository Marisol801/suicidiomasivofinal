const usersController = require('../controllers').users;
const chatsController = require('../controllers').chats;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Users API!',
    }));

    app.delete('/api/users/:userId', usersController.destroy);
    app.post('/api/users', usersController.create);
    app.put('/api/users/:userId', usersController.update);
    app.get('/api/users', usersController.list);
    app.post('/api/users/validate', usersController.validate);
    app.post('/api/chats', chatsController.create);
    app.get('/api/participants', chatsController.list);
};