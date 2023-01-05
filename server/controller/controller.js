var Userdb = require('../model/model');

// Create and Save new User
exports.create = (req,resp)=>{
    // validate request
    if(!req.body){
        resp.status(400).send({message:"content can not be empty!"});
        return;
    }
    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.sstatus
    })

    // save in the database
    user
    .save(user)
    .then(data =>{
        resp.send(data)
    })
    .catch(err =>{
        resp.status(500).send({
            message:err.message || "some error occured while creating a create operation"
        });
    })

},


// retrive and return all users / retrive and return single user
exports.find = (req, resp)=>{

}


// Update a new identified user by user id
exports.update = (req,resp)=>{

}

// Delete a user with spacefied user id in the request
exports.delete = (req, resp)=>{

}