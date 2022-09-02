
const router = require("express").Router();
const Usuario = require("../models/Usuario.model");
const Propiedad = require("../models/Propiedad.model");

/* "Compra y Venta" Routes */
router.get("/ventas", (req, res) => {
  res.render("mi-canton/ventas")
});

router.get("/compras", (req, res) => {
  res.render("mi-canton/compras")
});


/* Agregar datos del Usuario a Base de Datos */
router.post("/ventas", (req, res) => {
  // res.send("Datos de Usuario Agregados")
  Usuario.create(req.body)
  .then(nuevoUsuario => {
      console.log(nuevoUsuario)
      res.redirect("/ventas")
  })
  .catch(console.log)
});


/* Detalle de Propiedad */
router.get("/:id", (req,res) => {
  res.render("mi-canton/detalles")
  res.send(req.params.id)
})


module.exports = router;
