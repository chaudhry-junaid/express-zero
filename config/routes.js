
var users       = require('../app/controllers/users');
var index       = require('../app/controllers/index');

exports.init = function(app, passport, auth) {

    console.log('Initializing Routes');

    // User Routes
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    // Setting up the users api
    app.post('/users', users.create);

//    // Setting the local strategy route
//    app.post('/users/session', passport.authenticate('local', {
//        failureRedirect: '/signin',
//        failureFlash: true
//    }), users.session);

    // Finish with setting up the userId param
    app.param('userId', users.user);

    // Home route
    app.get('/', index.render);

};
