const router = require("express").Router();

const {landingController} = require('../controllers/general/landing')

router.get('/', landingController)

/* Exporting Router */
module.exports = router