const express = require('express')

const router = express.Router()

const controller = require('./controller.js')


router.getUsers('/users', controller.getAllUsers)


module.export = router

const UsersController = require('../controllers/users.js')

router.get('/users', UsersController.findWithQuery)
