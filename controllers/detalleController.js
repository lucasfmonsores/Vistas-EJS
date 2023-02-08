const path = require('path');

let menu = [
    {
        id: 1,
        nombre : 'Carpaccio fresco',
        descripcion : 'Entrada Carpaccio de salmón con cítricos',
        precio : 65.50,
        imagen: path.join(".." ,"images", "Carpaccio-de-salmon.jpg"),
    },
    {
        id: 2,
        nombre : 'Risotto de berenjena',
        descripcion : 'Risotto de berenjena y queso de cabra',
        precio : 47.00,
        imagen: path.join(".." ,"images", "Risotto-berenjena-queso-cabra.jpg"),
    },
    {
        id: 3,
        nombre : 'Mousse de arroz',
        descripcion : 'Mousse de arroz con leche y aroma de azahar',
        precio : 27.50,
        imagen: path.join(".." ,"images", "Mousse-de-arroz-con-leche.jpg"),
    },
    {
        id: 4,
        nombre : 'Espárragos blancos',
        descripcion : 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio : 37.50,
        imagen: path.join(".." ,"images", "esparragos.png"),
    }
];


module.exports = {
    detalle: function(req, res) {
        let id = req.params.id;
        let plato = menu.find(function(plato) {
            return plato.id == id;
        });
        res.render('detalleMenu', { plato: plato });
    }
};