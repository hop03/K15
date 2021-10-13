
class SiteController {
    
    search(req, res) {
        res.render('search');
    }
    sign_in(req, res) {
        res.render('sign_in');
    }
    sign_up(req, res) {
        res.render('sign_up');
    }
    
}

module.exports = new SiteController;