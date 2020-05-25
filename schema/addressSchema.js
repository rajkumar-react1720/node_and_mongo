const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    zipcode: String,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    }
})

module.exports = mongoose.model('Address', AddressSchema)