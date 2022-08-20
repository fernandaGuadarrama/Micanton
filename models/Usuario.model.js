const { Schema, model } = require("mongoose");


const usuarioSchema = new Schema(
  {
   nombreUsuario: {
      type: String,
    },
    email: String,
  },
  {
    timestamps: true,
  }
);

const Usuario = model("Usuario", usuarioSchema);

module.exports = Usuario;
