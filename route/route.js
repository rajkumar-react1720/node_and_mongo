module.exports = (app)=>{
    const user = require('../controller/controller.js')

    app.get('/getUsers', user.getAll);

    app.get('/getUser/:userId', user.getById);

    app.post('/createUser', user.create);

    // ADDRESS ROUTES
    app.post('/createAddress', user.createAddress);

}