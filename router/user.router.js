var User = require('../models/user.model');
var router = require('express').Router();
var userController = require('../controller/user.controller');

router.delete('/:id', deleteUser);
router.post('/', createUser);
router.get('/', getUser);
router.put('/:id', updateUser);

router.get('/:email', getUserByEmail);
router.get('/finuser/:email', finUserByEmail);

module.exports = router;

function finUserByEmail(req, res, next) {
    var email = req.params.email;
    userController.finUserByEmail(email)
        .then(function (user) {
            res.json(user);
        })
        .catch(function (err) {
            next(err);
        })
}

function createUser(req, res, next) {
    var newUser = req.body;
    if (!newUser.Name) {
        next({
            statusCode: 400,
            message: "Name is required"
        })
    } else if (!newUser.Email) {
        next({
            statusCode: 400,
            message: "Email is required"
        })
    } else if (!newUser.Password) {
        next({
            statusCode: 400,
            message: "Password is required"
        })
    } else {
        userController.createUser(newUser)
            .then(function (user) {
                res.json(user);
            })
            .catch(function (err) {
                next(err);
            })
    }
}

function getUser(req, res, next) {
    userController.getUsers()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            next(err);
        })
}

function updateUser(req, res, next) {
    var id = req.params.id;
    var user = req.body;
    user._id = id;
    userController.updateUser(user)
        .then(function (user) {
            res.send(user);
        })
        .catch(function (err) {
            next(err);
        })
}

function deleteUser(req, res, next) {
    var id = req.params.id;
    userController.deleteUser(id)
        .then(function (user) {
            res.send(user);
        })
        .catch(function (err) {
            next(err);
        })
}

function getUserByEmail(req, res, next) {
    userEmail = req.params.email;
    userController.getUserByEmail(userEmail)
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            next(err);
        })
}