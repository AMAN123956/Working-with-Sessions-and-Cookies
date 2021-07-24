const User = require('../../models/User')


const landing = async (req, res, next) => {
    //  Getting Cookies to verify User (in case we have used cookie)
    req.get('Cookie')
    // else session
    req.session.loggedIn;
}



module.exports = {landing}