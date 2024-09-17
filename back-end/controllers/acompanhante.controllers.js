const bcrypt = require('../utils/bcrypt.ultil');
const pool = require('../database/acompanhante.mongo'); 
const mongoose = require('mongoose');

const db = mongoose.connection;

async function loginAcompanhante(req, res, next) {
    try {
        const email = req.body.acompanhante.email;
        const collection = db.collection('acompanhantes');
        const acomp = await collection.findOne({ email: email });
        console.log(acomp)
        if (!acomp) {
            return res.status(401).json({ message: 'Acompanhante ou senha incorretos' });
        }

        const senhaValida = await bcrypt.compare(req.body.acompanhante.senha, acomp.senha);
        if (senhaValida) {
            res.status(200).json({user: acomp});
        } else {
            console.error('Acompanhante ou senha incorretos 1');
            res.status(401).json({ message: 'Acompanhantes ou senha incorretos' });
        }
    } catch (error) {
        console.error('Erro ao realizar login ', error);
        res.status(500).json({ message: 'Erro ao realizar login' });
    }
}

async function getAcompanhante(req, res, next) {
    try {
        const email = req.params.email;
        const collection = db.collection('acompanhantes');
        const acomp = await collection.findOne({ email: email });

        if (!acomp) {
            console.error('Acompanhante não encontrado');
            return res.status(404).json({ message: 'Acompanhante não encontrado' });
        }

        res.status(200).json({ acompanhante: acomp });
    } catch (error) {
        console.error('Erro ao buscar acompanhante', error);
        res.status(500).json({ message: 'Erro ao buscar acompanhante' });
    }
}

async function novoAcompanhante(req, res, next) {
    try {
        const { nome, email, senha } = req.body.acompanhante;

        const collection = db.collection('acompanhantes');

        const acompanhanteExist = await collection.findOne({ email: email });
        if (acompanhanteExist) {
            return res.status(400).json({ message: 'Email já está em uso.' });
        }

        const senhaHash = await bcrypt.hash(senha, 10);
        const novo_Acompanhante = await collection.insertOne({
            nome,
            email,
            senha: senhaHash,
        });

        // Obtendo o novo acompanhante usando o ID 
        const novoAcompanhante = await collection.findOne({ _id: novo_Acompanhante.insertedId });

        res.status(201).json({ message: 'Acompanhante criado com sucesso', usuario: novoAcompanhante });
    } catch (error) {
        console.error('Erro ao criar o acompanhante', error);
        res.status(500).json({ message: 'Erro ao adicionar o acompanhante' });
    }
}

module.exports = { loginAcompanhante, getAcompanhante, novoAcompanhante }; 