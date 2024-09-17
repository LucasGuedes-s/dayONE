<template>
    <div class="container_login">
        <div class="esquerda_login"> </div>
        <div class="direita_login">
            <h1><span class="day">Day</span><span class="one">One</span></h1>
            <form class="login_form" @submit.prevent="login">
                <h2>Entrar como Acompanhante</h2>
                <label for="email">E-mail</label>
                <input type="text" name="email" placeholder="Digite o seu e-mail" v-model="email">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha" v-model="senha">
                <button type="submit" class="btn_entrar" click="login">Entrar</button>
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


.container_login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


h1 {
    font-size: 70px;
    text-align: center;
    margin-top: 0;
}


.day {
    color: #E0E1DD; 
}


.one {
    color: #9d4edd; 
}


h2 {
    color: #E0E1DD;
    font-size: 25px;
}


.esquerda_login {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/imagemoneday.png);
    background-size: cover;
    background-position: center;
}


.direita_login {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.login_form {
    width: 80%;
}

.login_form label {
    display: block;
    margin-bottom: 20px;
    color: #E0E1DD;
}


.login_form input {
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

.login_form input::placeholder {
    color: #D9D9D9;
}

.login_form button {
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


.btn_entrar {
    background-color: #3c096c;
    margin-top: 15px;
}


.login_form p.cadastro_info {
    color: #E0E1DD;
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
}


.login_form a {
    color: #E0E1DD;
    text-decoration: none;
    font-weight: bold;
}
</style>
<script>
import router from '@/router';
import Swal from 'sweetalert2'
import axios from 'axios';

export default {
    name:'LoginView',
    data(){
        return{
            email:'',
            senha:'',
        }
    },
methods:{
    async login(){
        sessionStorage.removeItem('dados');
        await axios.post("http://localhost:3000/acompanhante/login", {
            acompanhante:{
                email:this.email,
                senha:this.senha
            }
        }).then(response =>{
            console.log(response.status)
            console.log(response)

            localStorage.setItem('dados_acomp', JSON.stringify(response.data));
            console.log(JSON.parse(localStorage.getItem('dados_acomp')))
            router.push('/dashboard-acompanhante')
        }).catch(Error =>{
                console.error(Error);
                Swal.fire({
                    icon: 'error',
                    title: 'Usuário ou senhas incorretos',
                    timer: 4000,
                })
            })
        }
    }
}
</script>