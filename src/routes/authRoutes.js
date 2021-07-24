const router = require("express").Router();

const {authUser,registerUser} = require('../controllers/auth/auth.js')

// Login Page
router.post('/login', authUser);
// Register Page
router.post('/', registerUser);



/* router exported */
module.exports = router;