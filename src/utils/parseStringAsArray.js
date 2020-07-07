module.exports = function parseStringAsArray(arrayAsString) {

    return arrayAsString.toString().split(',').map(animal => animal.trim());
}