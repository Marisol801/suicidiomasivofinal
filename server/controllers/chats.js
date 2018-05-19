const Chat = require('../models').Chat;

module.exports = {
    create(req, res) {
        return Chat
            .create({
                name: req.body.name,
                type: req.body.type,
                participants: req.body.participants,
            })
            .then(chat => res.status(201).send(chat))
            .catch(error => res.status(400).send(error));
    },

};

