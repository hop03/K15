const siteRouter = require('./site');
const homeRouter = require('./home');

function route(app) {
    app.use('/home', homeRouter);
      
    app.use('/', siteRouter);
      
}

module.exports = route;