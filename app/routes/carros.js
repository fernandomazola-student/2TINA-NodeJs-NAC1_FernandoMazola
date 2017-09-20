module.exports = function(app){
  app.get('/carros', function(req, res){
    var connection = app.config.dbConnection();
    var carrosModel = app.app.models.carrosModel;
    carrosModel.getCarros(connection, function(error,result){
      res.render("carros/carros", {carros:result});
    });
  });
}
