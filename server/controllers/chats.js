const Chat = require('../models').Chat;
const Participant = require('../models').Participant;

module.exports = {
    create(req, res) {
        console.log("holis");
        return Chat
            .create({
                name: req.body.name,
                type: req.body.type,
            })
            .then(chat => {
                console.log("holis bolis");
                console.log(req.body);
                console.log(req.body.participants.length);

                for(var user in req.body.participants) {
                    console.log(req.body.participants[user]);
                    Participant.create({
                        userId: req.body.participants[user],
                        chat: chat.id
                    })
                }

                console.log("holis bolis crayolis");
                return res.status(201).send(chat)
            })
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Participant.findAll()
            .then(participants => {
                res.status(201).send(participants)
            })
            .catch(error => res.status(400).send(error));
    }

};

