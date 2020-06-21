const mongoose = require('mongoose');

//Schema (estruturação de entidade dentro do DB)

const OngSchema = new mongoose.Schema({
    name: String,
    profile_website: String,
    bio: String,
    avatar_ulr: String,
    adress: String,
    animals: [String]
});

module.exports = mongoose.model('Ong', OngSchema);