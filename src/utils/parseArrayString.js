module.exports = function parseStringAsArray(arrayAsString) {

    return arrayAsString.toString().map(animal => animal.trim());
}
