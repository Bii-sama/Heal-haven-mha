const express = require('express');

const router = express.Router()

const getMatchingTherapists = require('../controllers/matchingController');

const reqAuth = require('../middlewares/reqAuth')

router.use(reqAuth)


router.get('/:id', getMatchingTherapists)

module.exports = router;

