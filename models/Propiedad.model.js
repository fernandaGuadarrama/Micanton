const { Schema, model } = require("mongoose");


const propiedadSchema = new Schema(
  {
   nombre: {
      type: String,
    },
    ubicacion: String,
  },
  {
    timestamps: true,
  }
);

const Propiedad = model("Propiedad", propiedadSchema);

module.exports = Propiedad;
