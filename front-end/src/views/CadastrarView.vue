<template>
    <div class="form_cadastro">
        <h1>Realizar Cadastro</h1>
        <form @submit.prevent="cadastro">
            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" name="nome" placeholder="Digite o seu nome completo" v-model="nome">
            </div>

            <div class="form-group">
                <label for="">Gênero</label>
                <select name="genero" id="genero" v-model="genero">
                    <option value="homem">Homem</option>
                    <option value="mulher">Mulher</option>
                    <option value="naobinario">Não-binário</option>
                    <option value="outro">Outro</option>

                </select>
            </div>

            <div class="form-group" id="datadenascimento">
                <label for="data_nascimento">Data de Nascimento:</label>
                <input type="date" id="data_nascimento" name="data_nascimento" v-model="data_nascimento">
            </div>

            <div class="form-group" id="tipodependencia">
                <label for="data">Tipo dependencia</label>
                <select id="dependencia" name="dependencia" v-model="id_dependencia" required>
                    <option v-for="dependencia in tipo_depencia.dependencia" :key="dependencia" :value="dependencia.id_dependencia">
                        {{ dependencia.id_dependencia }} - {{ dependencia.nome_dependencia }} 
                    </option>
                </select>
            </div>

            <div class="form-group" id="metas">
                <label for="metas">Quais as suas metas?</label>
                <textarea id="metas" name="mensagem" rows="1"></textarea>
            </div>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" name="email" placeholder="Digite o seu e-mail" v-model="email">
            </div>

            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha" v-model="senha">
            </div>

            <div class="form-group" id="imagem">
                <label for="imagem">Adicionar Imagem:</label>
                <input type="file" id="imagem" name="imagem">
            </div>
            <button type="submit" class="btn_cadastrar" click="cadastrarusuario">Cadastrar</button>

        </form>
    </div>
</template>

<style scoped>
body {
    background-color: #10002b;
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

export default {
    name: 'CadastrarView',
    data() {
        return {
            nome: '',
            email: '',
            senha: '',
            data_nascimento: '',
            genero: '',
            tipo_depencia: [],
            id_dependencia: '',
        }
    },
    methods: {
        async get() {
            await axios.get("http://localhost:3000/usuario/dependencias").then(response => {
                this.tipo_depencia = response.data
                console.log(this.tipo_depencia)
            }).catch(Error => {
                console.error(Error)
            })
        },
        async cadastro() {
            await axios.post("http://localhost:3000/usuario/novoUsuario", {
                usuario: {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha,
                    data_nascimento: this.data_nascimento,
                    genero: this.genero,
                    dependencia: this.id_dependencia
                }
            }).then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuário cadastrado com sucesso',
                    text: 'Seja muito bem vindo! Vamos conseguir juntos',
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false
                })
                router.push('/')
            }).catch(Error => {
                console.error(Error);
                Swal.fire({
                    icon: 'error',
                    title: 'Usuário ou senhas incorretos',
                    timer: 4000,
                })
            })
        }
    },
    mounted() {
        this.get();
    }
}

</script>