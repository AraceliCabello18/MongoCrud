const { Schema, model } = require("mongoose");
const contactoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    }
});
module.exports = model("Contacto", contactoSchema);