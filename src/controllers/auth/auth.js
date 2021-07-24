const User = require('../../models/user.js')

// Setting Cookies
const authUser = async (req, res, next) => {
    const { email, password } = req.body;
    // Set Cookie after successful authentication
    // Cookies - Client-Side
    res.setHeader('set-cookie', 'loggedIn=true');
    // Can configure cookies with various options like Max-Age,secured,http only
    res.redirect('/home');
}

// Using Sessions to Store Cookies
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    // Setting Up session
    req.session.loggedIn = true;
    res.redirect('/home');
}

// Removing Sessions
const logoutUser = async (req, res, next) => {
    req.session.destroy();
    res.redirect('/login');
}


module.exports = {authUser,registerUser,logoutUser}