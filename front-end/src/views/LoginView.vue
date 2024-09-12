<template>
    <div class="container_login">
        <div class="esquerda_login"> </div>
        <div class="direita_login">
            <h1><span class="day">Day</span><span class="one">One</span></h1>
            <form class="login_form">
                <h2>Realizar Login</h2>
                <label for="email">E-mail</label>
                <input type="text" name="email" placeholder="Digite o seu e-mail">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha">
                <button type="submit" class="btn_entrar" click="login">Entrar</button>
                <button type="submit" class="btn_acompanhante">Entrar como Acompanhante</button>
                <p class="cadastro_info">Não tem cadastro? <a href="cadastrar.html">Cadastre-se aqui</a></p>
            </form>
        </div>
    </div>
</template>

<style>
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


.btn_acompanhante {
    background-color: #240046;
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


@media (max-width: 768px) {
    .container_login {
        flex-direction: column; 
    }


    .esquerda_login, .direita_login {
        width: 100%;
        height: 50vh; 
    }


    h1 {
        font-size: 50px;
    }


    .login_form h2 {
        font-size: 20px;
    }


    .login_form {
        padding: 10px;
    }
}

</style>

<script>
import router from '@/router';
</script>