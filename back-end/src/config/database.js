const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite de {MIN}."
mongoose.Error.messages.Number.max = "O {VALUE} informado é menor que o limite de {MAX}."
mongoose.Error.messages.Number.enum = "O valor {VALUE} não é valido para o atributo {PATH}."

