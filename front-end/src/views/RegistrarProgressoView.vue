<template>
    <Navbar />
    <div class="form-container">
        <h2>Registrar Progresso</h2>
        <form @submit.prevent="progresso">
            <div class="form-group">

                <label for="data">Tipo dependencia</label>

                <select id="dependencia" name="dependencia" v-model="id_dependencia" required>
                    <option v-for="dependencia in tipo_depencia.dependencia" :key="dependencia" :value="dependencia.id_dependencia">
                        {{ dependencia.id_dependencia }} - {{ dependencia.nome_dependencia }} 
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="humor">Como você está se sentindo hoje?</label>
                <select id="humor" name="humor" v-model="vicio_feedback">
                    <option value="feliz">Feliz</option>
                    <option value="triste">Triste</option>
                    <option value="ansioso">Ansioso</option>
                    <option value="calmo">Calmo</option>
                    <option value="irritado">Irritado</option>
                    <option value="confiante">Confiante</option>
                </select>
            </div>

            <div class="form-group" id="evitarvicio">
                <label for="sucesso">Conseguiu evitar o seu vício?</label>
                <select id="sucesso" name="sucesso" v-model="status">
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                </select>
            </div>
            <div class="form-group">
                <label for="atividades">Quais atividades você realizou?</label>
                <textarea id="atividades" name="atividades" rows="4"
                    placeholder="Descreva as atividades realizadas hoje..." v-model="atividades_paciente"></textarea>
            </div>
            <div class="form-group">
                <label for="desafios">Você enfrentou algum desafio?</label>
                <textarea id="desafios" name="desafios" rows="4"
                    placeholder="Descreva os desafios que enfrentou hoje..." v-model="desafios_paciente"></textarea>
            </div>
            <div class="form-group" id="mensagem">
                <label for="mensagem">Mensagem para você mesmo</label>
                <textarea id="mensagem" name="mensagem" rows="4"
                    placeholder="Deixe uma mensagem positiva ou reflexiva para você mesmo..."
                    v-model="mensagem_usuario"></textarea>
            </div>
            <button type="submit" class="btn_registrar">Registrar</button>
        </form>
    </div>
</template>

<style>
body {
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

h2 {
    text-align: left;
    color: #E0E1DD;
    margin-bottom: 1.5rem;
    margin-top: 0;
}

.form-container {
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
    align-items: start;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 10px;
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
    resize: none;
}

::placeholder {
    color: white;
    font-size: 15px;
}

.btn_registrar {
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

#evitarvicio,
#mensagem {
    grid-column: 1 / -1;
}

@media (max-width: 768px) {
    .form-container {
        width: 82%;
        margin-left: 4%;
        padding: 5%;
    }
    form {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
import router from '@/router';
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Swal from 'sweetalert2';
export default {
    name: 'progresso',
    components: {
        Navbar
    },
    data() {
        return {
            dependencia: null,
            dados: [],
            id_dependencia: '',
            tipo_depencia: [],
            status: '',
            atividades_paciente: '',
            desafios_paciente: '',
            vicio_feedback: '',
            mensagem_usuario: ''
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
        async progresso() {
            this.dados = JSON.parse(localStorage.getItem('dados'));
            const email = this.dados.usuario[0].email;
            await axios.post("http://localhost:3000/usuario/registro", {
                registro: {
                    email: email,
                    id_dependencia: this.id_dependencia,
                    status: this.status,
                    atividades_paciente: this.atividades_paciente,
                    desafios_paciente: this.desafios_paciente,
                    vicio_feedback: this.vicio_feedback,
                    mensagem_usuario: this.mensagem_usuario
                }
            }).then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro feito com sucesso',
                    text: 'O seu registro foi feito com sucesso',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                })
                console.log(response)
                router.push('/dashboard')
            }).catch(error =>{
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Algo de errado!!',
                })
            })
        }
    },
    mounted() {
        this.get();
    }
}
</script>