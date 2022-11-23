const { Router } = require("express")
const {readContactos, createContacto, deleteContacto, updateContacto} = require("../controllers/contactos")

const router = Router()
router.get("/", readContactos)

router.post("/create", createContacto)
router.post("/update", updateContacto)

router.get("/delete/:id", deleteContacto)


module.exports = router;