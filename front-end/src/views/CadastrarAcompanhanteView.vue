<template>
    <div>
        <Navbar />
    </div>
    <div class="form_cadastro">
        <h2>Cadastrar Acompanhante</h2>
        <form @submit.prevent="cadastro">
            <div class="form-group" id="acomp_nome_completo">
                <label for="acomp_nome">Nome Completo</label>
                <input type="text" id="acomp_nome" name="acomp_nome"
                    placeholder="Digite o nome completo do acompanhante" v-model="nome">
            </div>

            <div class="form-group" id="acomp_email">
                <label for="acomp_email">E-mail</label>
                <input type="email" id="acomp_email" name="acomp_email" placeholder="Digite o e-mail do acompanhante" v-model="email">
            </div>

            <div class="form-group" id="acomp_senha">
                <label for="acomp_senha">Senha</label>
                <input type="password" id="acomp_senha" name="acomp_senha" placeholder="Digite a senha do acompanhante" v-model="senha">
            </div>
            <button type="submit" class="btn_cadastrar" @click="cadastro" >Cadastrar</button>

        </form>

    </div>
</template>

<style scoped>
body {
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 0;
}

.form_cadastro {
    width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid #5a189a;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: white;
}

form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    /* Ajuste o espaço entre os campos */
    align-items: start;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 10px;
    /* Ajuste a margem se necessário */
}

.form-group input,
select,
textarea {
    width: 100%;
    padding: 10px;
    color: white;
    border: 1px solid #5a189a;
    border-radius: 4px;
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    /* Garantir que padding e border não aumentem o tamanho total */
    resize: none;
}

::placeholder {
    color: white;
}

#tipodependencia,
#metas,
#imagem,
#acomp_nome_completo,
#datadenascimento {
    grid-column: 1 / -1;
}

h2 {
    margin-bottom: 10px;
}

.btn_cadastrar {
    grid-column: 1 / -1;
    padding: 10px;
    background-color: #3c096c;
    border: none;
    border-radius: 4px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
}
</style>

<script>
import router from '@/router';
import Swal from 'sweetalert2'
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
export default {

    name: 'CadastrarView',
    components:{
        Navbar
    },
    data() {
        return {
            dados: [],
            nome: '',
            email: '',
            senha: '',
        }
    },
    methods: {
        async cadastro() {
            this.dados = JSON.parse(localStorage.getItem('dados'));
            const email = this.dados.usuario[0].email;
            console.log(this.senha)
            await axios.post("http://localhost:3000/acompanhante/novoAcom", {
                acompanhante: {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha,
                    usuario_email: email
                }
            }).then(response => {
                console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: 'Acompanhante cadastrado com sucesso',
                    text: 'Informe ao seu acompanhante o email e senha de acesso dele',
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false
                })
                router.push('/dashboard')
            }).catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao cadastrar acompanhante',
                    timer: 4000,
                })
            })
        }
    }
}

</script>