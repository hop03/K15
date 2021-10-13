const express = require('express');
const router =  express.Router();

const siteController = require('../app/controllers/SiteController');
router.get('/search', siteController.search);
router.get('/sign_in', siteController.sign_in);
router.get('/', siteController.sign_up);

module.exports = router;