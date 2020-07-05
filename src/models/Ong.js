const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')
//Schema (estruturação de entidade dentro do DB)

const OngSchema = new mongoose.Schema({
    name: String,
    profile_website: String,
    bio: String,
    avatar_ulr: String,
    adress: String,
    animals: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Ong', OngSchema);