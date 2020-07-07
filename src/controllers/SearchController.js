const Ong = require("../models/Ong");
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request,response){

        const { latitude, longitude, animals} = request.query

        const animalsArray = parseStringAsArray(animals)

        const ongs = await Ong.find({
            animals: {
               $in:  animalsArray,
            },
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json ({ ongs })

    }
}