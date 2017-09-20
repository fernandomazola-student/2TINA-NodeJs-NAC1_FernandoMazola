var mysql = require('mysql');

var conecMySQL = function(){
  return mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fiap',
  database: 'nac'
});
}

module.exports = function(){
  console.log('Carregado modulos');
  return conecMySQL;
}
