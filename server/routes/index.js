const usersController = require('../controllers').users;
const chatsController = require('../controllers').chats;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Users API!',
    }));

    app.post('/api/users', usersController.create);
    app.get('/api/users', usersController.validate);

    app.post('/api/chats', chatsController.create);
};