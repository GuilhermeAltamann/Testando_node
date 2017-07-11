const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {
  useMongoClient: true,
})

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."
