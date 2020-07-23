const axios = require('axios');
const Ong = require('../models/Ong');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { Query } = require('mongoose');

//index(lista), show(mostrar 1), store(criar), update(alterar), destroy(deletar)

module.exports = {
    async index(request,response){
        const ongs = await Ong.find()

        return response.json(ongs)
    },

    async store (request,response) {
        console.log(request.body);
        
        const { name, profile_website, bio, avatar_url, adress, animals, latitude, longitude } = request.body;

        let ong = await Ong.findOne({ name });



        if (!ong) { 

            const animalsArray = parseStringAsArray(animals);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
          
            ong = await Ong.create ({
                name,
                profile_website,
                bio,
                avatar_url,
                adress,
                animals: animalsArray,
                location
            });
            
        }
         
        
        return response.json(ong);
    },

    async destroy(request,response){

        let _id = request.params;

        let ong = await Ong.deleteOne( _id, console.log("Deleted"))

        return response.json(ong);

    },

    async update (request,reposnse){

        let _id = request.params;

        let ong = await Ong.findByIdAndUpdate ( _id, console.log("Edited"))
    }

}
