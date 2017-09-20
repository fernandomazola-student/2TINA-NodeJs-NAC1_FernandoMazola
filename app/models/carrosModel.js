module.exports = function (){
  this.getCarros = function(connection, callback){
    connection.query('SELECT * FROM carro', callback);
  }
  return this;
}
