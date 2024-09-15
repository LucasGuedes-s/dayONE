<template>
    <div class="container_cadastro">
        <div class="esquerda_cadastro"></div>
        <div class="direita_cadastro">
            <form class="cadastro_form">
                <h2>Realizar Cadastro</h2>
                <label for="nome_completo">Nome Completo</label>
                <input type="text" name="nome_completo" placeholder="Digite o seu nome completo">
                <label for="dependencia">Tipo de Dependência</label>
                <select name="dependencia" id="dependencia">
                    <option value="alcool">Álcool</option>
                    <option value="drogas">Drogas</option>
                    <option value="jogos">Jogos</option>
                    <option value="tecnologica">Tecnologica</option>
                    <option value="emocional">Emocional</option>
                </select>
                <label for="email">E-mail</label>
                <input type="text" name="email" placeholder="Digite o seu e-mail">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha">
                <label for="imagem">Adicionar Imagem:</label>
                <input type="file" id="imagem" name="imagem">
                <button type="submit" class="btn_cadastrar">Cadastar-se</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #110033;
}

.container_cadastro {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: #E0E1DD;
    font-size: 25px;
}


.esquerda_cadastro {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/imagemoneday.png);
    background-size: cover;
    background-position: center;
}


.direita_cadastro {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.cadastro_form {
    width: 80%;
}

.cadastro_form label {
    display: block;
    margin-bottom: 15px;
    color: #E0E1DD;
}


.cadastro_form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #110033;
    border: 1px solid #5a189a;
    border-radius: 4px;
    box-sizing: border-box;
    color: #E0E1DD;
    font-family: 'Montserrat', sans-serif;
}

.cadastro_form input::placeholder {
    color: #D9D9D9;
}

.cadastro_form button {
    width: 100%; 
    padding: 10px; 
    margin-bottom: 15px; 
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
}


.btn_cadastrar {
    background-color: #3c096c;
    margin-top: 15px;
}

.cadastro_form p.cadastro_info {
    color: #E0E1DD;
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
}

.cadastro_form a {
    color: #E0E1DD;
    text-decoration: none;
    font-weight: bold;
}

.cadastro_form select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #110033;
    border: 1px solid #5a189a;
    border-radius: 4px;
    color: #E0E1DD;
    font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
    .container_cadastro {
        flex-direction: column; 
    }


    .esquerda_cadastro, .direita_cadastro {
        width: 100%;
        height: 50vh; 
    }


    h1 {
        font-size: 50px;
    }


    .cadastro_form h2 {
        font-size: 20px;
    }


    .cadastro_form {
        padding: 10px;
    }
}
</style>

<script>
import router from '@/router';
import Swal from 'sweetalert2'
import axios from 'axios';

export default {
    name:'CadastrarView',
    data(){
        return{
            email:'',
            senha:'',
        }
    },
}
</script>