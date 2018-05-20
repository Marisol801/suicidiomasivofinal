const Message = require('../models').Message;
const Participant = require('../models').Participant;
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
        return Participant
            .find({where:{chatId: req.body.chatId}})
            .then(chatid=>{
                console.log(chatid)
                if (!chatid) {
                    return res.status(400).send({
                        message: 'Chat Not Found',
                    });
                }
                return chatid
                    .find({where: {chatId:req.body.chatId, [Op.not]:[{userId:req.body.senderid}],}})
                    .then(messages => res.status(201).send(messages))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};