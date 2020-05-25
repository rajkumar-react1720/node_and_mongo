const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: [{type: mongoose.Schema.Types.ObjectId, ref: 'Address'}]
});

module.exports  = mongoose.model('UserModel', UserSchema);