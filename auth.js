const router = require('express').Router();
const User = require('../model/User');

//VALIDATION
const Joi = require('@hapi/joi');
const { schema } = require('../model/User');


const Schema = {
    name: Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required() 
};


router.post('/register', async(req, res) => {

    //Lets Validate the data before we a user
    const VALIDATION = Joi.Validate(req.body, schema);
    res.send(VALIDATION);

  //  const user = new User({
    //    name: req.body.name,
      //  email: req.body.email,
       // password: req.body.password
    //}); 
    //try{
      //  const savedUser = await user.save();
        //res.send(savedUser);
    //}catch(err) {
      // res.status(400).send(err); 
    //}
});





module.exports = router; 