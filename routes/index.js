const express = require('express')
const { Controllers } = require('../controllers')

const router = express.Router()


router.get('/',Controllers.getData)

router.post('/',Controllers.postData)

router.put('/',Controllers.putData)

router.delete('/',Controllers.deleteData)

module.exports = router;

