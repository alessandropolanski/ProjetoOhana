const { Router }  = require('express');
const axios = require('axios');
const Ong = require('./models/Ong');

const routes = Router();



routes.post('/ongs', async (request,response) => {
    console.log(request.body);
    
    const { name, profile_website, bio, avatar_url, adress, animals } = request.body;

    const animalsArray = animals.toString().split(',').map(animal => animal.trim());

    const ong = await Ong.create ({
        name,
        profile_website,
        bio,
        avatar_url,
        adress,
        animals: animalsArray,
    });


    return response.json(ong);
});

module.exports = routes;