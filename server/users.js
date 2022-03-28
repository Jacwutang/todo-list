const express = require('express');
const router = express.Router();
const knex = require('./knex');

// define the home page route
router.get('/:userID', (req, res) => {
    const {userID}  = req.params;
    
    let query = knex.select()
        .from('users')
        .where({id: userID})
        .then(users => res.json(users[0]));
    
})


module.exports = router;