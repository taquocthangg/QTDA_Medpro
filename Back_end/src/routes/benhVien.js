import * as controller from '../controllers'
import express from 'express'
const router = express.Router();


router.get('/getAllBenhVien', controller.getBenhVien);

module.exports = router
