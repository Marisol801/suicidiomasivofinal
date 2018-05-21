const usersController = require('../controllers').users;
const chatsController = require('../controllers').chats;
const messagesController = require('../controllers').messages;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Users API!',
    }));

    app.delete('/api/users/:userId', usersController.destroy);
    //app.get('/api/users/:userId/chats/:type', usersController.getChatUser);
    app.post('/api/users', usersController.create);
    app.put('/api/users/:userId', usersController.update);
    app.get('/api/users', usersController.list);
    app.post('/api/users/validate', usersController.validate);
    app.post('/api/chats', chatsController.create);
    app.get('/api/participants.js', chatsController.list);
    app.get('/api/users/:userId', usersController.show);
    app.post('/api/messages', messagesController.create);
    app.post('/api/messages/receive', messagesController.msg);
    app.get('/api/users/chats/participants', chatsController.participants);
};