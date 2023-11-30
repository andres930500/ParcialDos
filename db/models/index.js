const defineEvent = require("./events.model");

function defineModels( sequelize ){
    defineEvent(sequelize)
    //Other models go here
}

module.exports = defineModels