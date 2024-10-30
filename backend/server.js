const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("✅ Conectado a MongoDB Atlas");
    })
    .catch((error) => console.error("❌ Error conectando a la base de datos", error));

// Define el esquema y modelo de Mongoose
const versiculoSchema = new mongoose.Schema({
    Index: { type: Number, required: true },
    Testament: String,
    Book: String,
    BookNumber: Number,
    Verse: Number,
    Chapter: Number,
    Text: String,
    Title: String
}, { collection: 'todos' }); // Asegúrate de que aquí esté 'versiculos'
const Versiculo = mongoose.model('Versiculo', versiculoSchema);

// Ruta para obtener todos los versículos (para verificar datos)
app.get("/", async (req, res) => {
    try {
        const versiculos = await Versiculo.find();
        console.log("Documentos en la colección:", versiculos);
        res.json(versiculos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los versículos" });
    }
});

// Ruta para obtener un versículo por su índice
app.get("/versiculos/index/:index", async (req, res) => {
    const index = parseInt(req.params.index);
    console.log(`Buscando versículo con Index: ${index}`);
    
    try {
        const versiculo = await Versiculo.findOne({ Index: index });
        console.log(`Resultado de la búsqueda: ${versiculo}`); 
        
        if (!versiculo) {
            return res.status(404).json({ message: "Versículo no encontrado" });
        }
        
        res.json(versiculo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el versículo" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});