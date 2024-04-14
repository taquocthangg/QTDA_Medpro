import * as controller from '../controllers'
import express from 'express'
const router = express.Router();


router.get('/getUser', controller.getUser)

module.exports = router