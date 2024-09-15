<template>
    <Navbar />
    <div class="container_usuario">
        <div class="usuario_info"  v-for="usuario in dados.usuario" :key="usuario">
            <img :src="usuario.foto" alt="Imagem do Usuário" class="usuario_imagem">
            <div class="usuario_detalhes">
                <h2 class="usuario_nome">Nome do Usuário: {{ usuario.nome }}</h2>
                <h2 class="usuario_email">E-mail: {{ usuario.email }}</h2>
                <p class="usuario_data">Data de Entrada: {{ usuario.data_entrada }}</p>
                <button class="btn_emergencia">Emergência</button>
            </div>
        </div>
      </div>
      <div class="container_grafico">
        <Grafico />
      </div>
</template>

<style>
body {
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
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
.container_grafico{
    width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 10px;
    background-color: #3c096c;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: white;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Grafico from '@/components/Grafico.vue';
export default {
    name: 'dashboard',
    components: {
        Navbar,
        Grafico
    },
    data(){
        return{
            dados: []
        }
    },
    mounted(){
        this.dados = JSON.parse(localStorage.getItem('dados'));
        console.log(JSON.parse(localStorage.getItem('dados')))
    }
}
</script>