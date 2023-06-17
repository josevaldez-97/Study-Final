const themesPropertiesController = require('../../controller/themes_properties/themes_properties.controller')

module.exports = function(app){
    app.get("/themes_properties/list",  authMiddleware.auth, themesPropertiesController.listar);
    app.get("/themes_properties/buscarPorCodigo/:filtro",  authMiddleware.auth, themesPropertiesController.busquedaPorCodigo);
    app.post("/themes_properties/update", authMiddleware.auth, themesPropertiesController.actualizar);
    app.delete("/themes_properties/delete/:filtro", authMiddleware.auth, themesPropertiesController.eliminar);
}