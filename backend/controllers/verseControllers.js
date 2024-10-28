const Verse = require('../models/verse'); // Asegúrate de que esto apunte a tu modelo correcto

// Crear un versículo
exports.createVerse = async (req, res) => {
    try {
        const verse = new Verse(req.body);
        await verse.save();
        res.status(201).json(verse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los versículos
exports.getVerses = async (req, res) => {
    try {
        const verses = await Verse.find(); // Obtener todos
        res.json(verses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un versículo por ID
exports.getVerseByIndex = async (req, res) => {
    try {
        const verse = await Verse.findById(req.params.id); // Asegúrate de usar el método correcto
        if (!verse) return res.status(404).json({ message: 'Versículo no encontrado' });
        res.json(verse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un versículo
exports.updateVerse = async (req, res) => {
    try {
        const verse = await Verse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!verse) return res.status(404).json({ message: 'Versículo no encontrado' });
        res.json(verse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un versículo
exports.deleteVerse = async (req, res) => {
    try {
        const verse = await Verse.findByIdAndDelete(req.params.id);
        if (!verse) return res.status(404).json({ message: 'Versículo no encontrado' });
        res.json({ message: 'Versículo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
