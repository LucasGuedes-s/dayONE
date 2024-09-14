const bcrypt = require('../utils/bcrypt.ultil');
const mongoose = require('mongoose');

const db = mongoose.connection;

async function loginAcompanhante(req, res, next) {
    try {
        const email = req.body.acompanhante.email;
        const collection = db.collection('acompanhantes'); //nome do banco de dados
        const acomp = await collection.findOne({ email: email });

        if (!acomp) {
            console.error('Usuário ou senha incorretos');
            return res.status(401).json({ message: 'Usuário ou senha incorretos' });
        }

        const senhaValida = await bcrypt.compare(req.body.acompanhante.senha, acomp.senha);
        if (senhaValida) {
            res.status(200).json({ message: 'Usuário logado com sucesso' });
        } else {
            console.error('Usuário ou senha incorretos');
            res.status(401).json({ message: 'Usuário ou senha incorretos' });
        }
    } catch (error) {
        console.error('Erro ao realizar login do usuário', error);
        res.status(500).json({ message: 'Erro ao realizar login' });
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

        res.status(201).json({ message: 'Usuário criado com sucesso', usuario: novo_Acompanhante.ops[0] });
    } catch (error) {
        console.error('Erro ao criar o usuário', error);
        res.status(500).json({ message: 'Erro ao criar o usuário' });
    }
}

module.exports = { loginAcompanhante, novoAcompanhante };
