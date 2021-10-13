
class HomeController {
    index(req, res) {
        res.render('home');
    }
    completed(req, res) {
        res.render('completed');
    }
}

module.exports = new HomeController;