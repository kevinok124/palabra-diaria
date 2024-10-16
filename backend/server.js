const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Inicializar Express
const app = express();

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB usando Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("Error conectando a la base de datos", error);
        process.exit(1); // Detener la aplicación si no se puede conectar
    }
};

// Llamar a la función para conectar a la base de datos
connectDB();

// Definir una ruta básica
app.get("/", (req, res) => {
    res.send("Servidor backend funcionando");
});

// Escuchar en el puerto definido
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});