<template>
    <Navbar />

    <div class="form_alterardados" v-for="usuario in dado" :key="usuario.usuario">
        <h1>Alterar Dados</h1>
        <form @submit.prevent="alterarDados">
            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" name="nome" placeholder="Digite o seu nome completo"  v-model="usuario.usuario[0].nome">
            </div>
            <div class="form-group">
                <label for="" >Gênero</label>
                <select name="genero" id="genero" v-model="genero">
                    <option value="homem">Homem</option>
                    <option value="mulher">Mulher</option>
                    <option value="naobinario">Não-binário</option>
                    <option value="outro">Outro</option>
                </select>
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha" v-model="senha">
            </div>
    
            <button type="submit" class="btn_alterardados" click="alterarDados">Alterar Dados</button>

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
    margin-bottom: 20px;
}

.form_alterardados {
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
    gap: 20px; /* Ajuste o espaço entre os campos */
    align-items: start;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 10px; /* Ajuste a margem se necessário */
}

.form-group input, select, textarea {
    width: 100%;
    padding: 10px;
    color: white;
    border: 1px solid #5a189a;
    border-radius: 4px;
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box; /* Garantir que padding e border não aumentem o tamanho total */
    resize: none;
}

::placeholder {
    color: white;
}

#tipodependencia, #metas, #imagem, #acomp_nome_completo, #datadenascimento {
    grid-column: 1 / -1;
}

h2 {
    margin-bottom: 10px;
}

.btn_alterardados {
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
@media (max-width: 768px) {
    html, body{
        width: 100%;
    }
    .form_cadastro {
        width: 82%;
        margin-left: 4%;
        padding: 5%;
    }
    form {
        grid-template-columns: 1fr;
    }

    h1 {
        text-align: center;
        font-size: 28px;
    }

    h2 {
        font-size: 22px;
        text-align: center;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .btn_cadastrar {
        margin-top: 20px;
    }
}
</style>

<script>
import router from '@/router';
import Swal from 'sweetalert2'
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
export default {
    name:'AlterarDadosView',
    components:{
        Navbar
    },
    data(){
        return{
            dados: [],
            dado: null,
            nome:'',
            email:'',
            senha:'',
            genero:'',
        }
    },
methods:{
    async alterarDados(){
        this.dados = JSON.parse(localStorage.getItem('dados'));
        const email = this.dados.usuario[0].email;

        await axios.post("http://localhost:3000/usuario/updateUser", {
            usuario:{
                nome:this.nome,
                email: email,
                senha:this.senha,
                genero:this.genero
            }
        }).then(response =>{
            console.log(response)
            Swal.fire({
                title: "Dados alterados com sucesso!",
                text: "Seus dados foram alterados com sucesso",
                icon: "success"
            });
            router.push('/dashboard')
        }).catch(Error =>{
            Swal.fire({
                title: "Erro!",
                text: "Erro",
                icon: "error"
            });
            console.error(Error);
        })
    },
    async get() {
        this.dados = JSON.parse(localStorage.getItem('dados_acomp'));
        const email = this.dados.user.acompanhado;
        axios.get("http://localhost:3000/usuario/dados", {
            params:{
                email: email,
            }
        }).then(response =>{
            this.dado = response.data
            console.log(this.dado)
        }).catch(Error =>{
                console.error(Error);
        });
    },
    async alterardados(){
        await axios.post("http://localhost:3000/usuario/dados", {
            usuario:{
                nome:this.nome,
                email:this.email,
                senha:this.senha,
                data_nascimento:this.data_nascimento,
                genero:this.genero
            }
        }).then(response =>{
            console.log(response.status)
            console.log(response)
            router.push('/')
        }).catch(Error =>{
                console.error(Error);
            })
        }
    },
    mounted(){
        this.get()
    }
}
</script>