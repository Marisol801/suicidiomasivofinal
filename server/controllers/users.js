const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                username: req.body.username,
                password: req.body.password,
                status: req.body.status,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return User
            .findAll()
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    },

    validate(req, res) {
        return User.find({ where: { username: req.body.username } })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

};