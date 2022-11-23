const mongoose = require ("mongoose");

const dbconexion = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log("base de datos conectada")
    } catch (error) {
        console.log(error)
        throw new Error("error al conectar ala bd")
        
    }
}

module.exports = dbconexion;
