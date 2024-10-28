const express = require('express');
const router = express.Router();
const verseControllers = require('../controllers/verseControllers');

router.post('/', verseControllers.createVerse);
router.get('/', verseControllers.getVerses);
router.get('/:id', verseControllers.getVerseByIndex);
router.put('/:id', verseControllers.updateVerse);
router.delete('/:id', verseControllers.deleteVerse);

module.exports = router;
