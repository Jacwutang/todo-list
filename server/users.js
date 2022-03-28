const express = require('express');
const router = express.Router();
const knex = require('./knex');

router.get('/:userID', (req, res) => {
    const {userID}  = req.params;
    
    let query = knex.select()
        .from('users')
        .where({id: userID})
        .then(users => res.json(users[0]));
    
});

router.post('/', (req, res) => {
    
    const {userName}  = req.body;
    
    knex('users')
    .insert({ name: userName })
    .then(a => console.log(a))
    .catch(err => console.log(err));
    
    
});






module.exports = router;