<template>
    <NavBarAcompanhante />
    <div class="container_usuario">
        <div class="usuario_info"  v-for="usuario in dados" :key="usuario">
            <img src="https://firebasestorage.googleapis.com/v0/b/clinica-maria-luiza.appspot.com/o/uploads%2Fdefault-avatar-profile-icon-vector-social-media-user-photo-183042379.webp?alt=media&token=2ea65d27-3311-42ed-b230-1919af3856a5" alt="Imagem do Usuário" class="usuario_imagem">
            <div class="usuario_detalhes">
                <h2 class="usuario_nome">Bem vindo (a): {{ dados.user.nome }}</h2>
                <p class="usuario_email">{{ dados.user.email }}</p>
                <p class="usuario_data">Data de Entrada do seu acompanhado: {{  }}</p>
            </div>
        </div>
      </div>
    <div class="registros">
    <h2>Informações do Registro de {{ }}</h2>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Data do registro</th>
          <th>Conseguiu evitar o seu vício?</th>
          <th>Atividades do Paciente</th>
          <th>Desafios do Paciente</th>
          <th>Como está se sentindo?</th>
          <th>Mensagem do Usuário</th>
        </tr>
      </thead>
      <tbody v-for="registro in evolucao.evolucao" :key="registro.id_registro">
        <tr>
          <td> 10/05/2024</td>
          <td>{{ registro.status_paciente }}</td>
          <td>{{ registro.atividades_paciente }}</td>
          <td>{{ registro.desafios_paciente }}</td>
          <td>{{ registro.vicio_feedback }}</td>
          <td>{{ registro.mensagem_usuario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
body {
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}
h1{
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}
.registros{
    margin: 10px;
}
.registros h2{
    color: #fff;
}
.container_usuario{
    width: 50%;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 10px;
    background-color: #110033;
    border: 1px solid #5a189a;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: white;
}

.usuario_info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}

.usuario_imagem {
    width: 180px;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.usuario_detalhes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.usuario_nome {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.usuario_data {
    font-size: 16px;
    color: #e0e1dd;
    margin-top: 8px;
}

.btn_emergencia {
    color: #fff;
    background-color: #3c096c;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 6px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.btn_emergencia:hover{
    background-color: red;
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  min-width: 400px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #ffffff;
  color: #000000;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  color:#f3f3f3;
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #ffffff;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #ffffff;
}
</style>

<script>
import Grafico from '@/components/Grafico.vue';
import GraficoLinhas from '@/components/GraficoLinhas.vue'
import axios from 'axios';
import NavBarAcompanhante from '@/components/NavBarAcompanhante.vue';
export default {
    name: 'dashboard',
    components: {
        NavBarAcompanhante,
        Grafico,
        GraficoLinhas
    },
    data(){
        return{
            dados: [],
            dependente: [],
            evolucao: []
        }
    },
    mounted(){
        sessionStorage.removeItem('dados');

        this.dados = JSON.parse(localStorage.getItem('dados_acomp'));
        console.log(this.dados.user.nome)
        const email = this.dados.user.acompanhado;
        axios.get("http://localhost:3000/usuario/dados", {
            params:{
                email: email,
            }
        }).then(response =>{
            console.log(response.status)
            console.log(response)
            this.dependente = response.data
        }).catch(Error =>{
                console.error(Error);
        });

        axios.get("http://localhost:3000/usuario/evolucao", {
            params:{
                email: email,
            }
        }).then(response =>{
            console.log(response.status)
            console.log(response)
            this.evolucao = response.data
        }).catch(Error =>{
                console.error(Error);
        })

        }
        
    }
</script>