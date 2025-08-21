const express = require('express');
const Aluno = require('../models/Aluno');

const router = express.Router();

//Post 
router.post('/', async (req, res, next) => {
    try {
        const aluno = await Aluno.create(req.body);
        return res.status(201).json(aluno);
    }catch (error) {
        next(error);
    }
});


//GEt



//update



//delete


module.exports = router;