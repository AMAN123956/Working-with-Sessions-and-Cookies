const router = require("express").Router();

const {landing} = require('../controllers/general/landing')

router.get('/', landing)

/* Exporting Router */
module.exports = router