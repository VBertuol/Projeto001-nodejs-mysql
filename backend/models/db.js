const Sequelize  = require('sequelize');

const sequelize = new Sequelize('projeto001', 'bertuol', '21041301', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(function(){
    console.log("Conexao com o banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro: Falha na conexao com o banco de dados!")
})

module.exports = sequelize;