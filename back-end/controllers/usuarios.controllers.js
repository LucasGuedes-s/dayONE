//Inciar o banco de dados e chamar a função assincrona aqui
//const { login } = require('../')

async function loginUser(req, res, next){
    try {
        console.log("Login teste", req.body)
        //const login = await login(req.body)
        res.status(200).json('Sucesso');
        //next()
    } catch (err) {
        console.log(err)
        console.error(`Erro ao realizar login do paciente`);
    }
}
module.exports = { loginUser }