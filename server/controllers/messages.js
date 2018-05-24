const Message = require('../models').Message;
const Participant = require('../models').Participant;
const Chat = require('../models').Chat;
const User = require('../models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        console.log(req.body)
        return Message
            .create({
                senderid: req.body.senderid,
                chatId: req.body.chatId,
                content: req.body.content,
                time: req.body.time,
            })
            .then(message => res.status(201).send(message))
            .catch(error => res.status(400).send(error));
    },

    msg(req, res) {
        return Chat
            .findAll({
                where: { id: req.body.chatId },
                include: [{
                    model: Message,
                    as: "messages",
                    include: [{ model: User}]
                }]
            })
            .then(chat => {
                console.log(chat)
                return res.status(201).send(chat)
            })
            .catch(error => res.status(400).send(error));
    }
};