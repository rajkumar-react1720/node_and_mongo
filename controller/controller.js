const UserModel  = require('../schema/userSchema.js');
const Address = require('../schema/addressSchema.js')

exports.getAll = (req, res) => {
    UserModel.find()
    .then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "User cannot be created"
        })
    })
};

exports.getById = (req, res) => {
    console.log('Helooooo---->', req)
    UserModel.findById(req.params.userId)
    .then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "User cannot be created"
        })
    })
};

exports.create = (req, res) => {
        // Validate request
        if(!req.body) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const user = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address
        });
       
        user.save()
        .then((data)=>{
            res.send(data)
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "User cannot be created"
            })
        })
};

exports.createAddress = (req, res)=>{

    if(!req.body){
        return res.status(400).send({
            message: "Address content can not be empty"
        });
    };
    const address = new Address({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    });

    address.save()
    .then((data) =>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Address cannot be created"
        });
    });
};