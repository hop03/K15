const users = require('../models/Users');
const {multipleMongooseToObject} = require('../../util/mongoose');

class HomeController {

    index(req, res, next) {
        users.find({})
        
        .then(users => {
            res.render('home', {users: multipleMongooseToObject(users)});
        })
        .catch(next)
    };

    completed(req, res) {
        res.render('completed');
    };
}

module.exports = new HomeController;
