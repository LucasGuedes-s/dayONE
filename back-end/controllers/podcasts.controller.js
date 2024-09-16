const pool = require('../database/acompanhante.mongo'); 
const mongoose = require('mongoose');

const db = mongoose.connection;

async function getLinks(req, res) {
    try {
        const collection = db.collection('podcasts');
        const links = await collection.find().toArray();
        res.status(200).json({ links : links });
    } catch (error) {
        console.error('Erro ao resgatar os links', error);
        res.status(500).json({ message: 'Erro ao resgatar links' });
    }
}

module.exports = { getLinks }