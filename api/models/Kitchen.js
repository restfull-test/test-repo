/**
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
    "cook": {
        "key": "cook",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": true,
        "collection": false
    },
    "food": {
        "key": "food",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": false,
        "collection": "food",
        "via": "kitchen"
    }
}

};

