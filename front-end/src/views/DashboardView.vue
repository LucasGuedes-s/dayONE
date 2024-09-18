<template>
    <Navbar />
    <div class="container_usuario">
        <div class="usuario_info"  v-for="usuario in dados.usuario" :key="usuario">
            <img src="https://firebasestorage.googleapis.com/v0/b/clinica-maria-luiza.appspot.com/o/uploads%2Fuser-icon-on-transparent-background-free-png.webp?alt=media&token=6e1be610-9689-4d76-b765-3f8dfad670ad" alt="Imagem do Usuário" class="usuario_imagem">
            <div class="usuario_detalhes">
                <h2 class="usuario_nome">{{ usuario.nome }}</h2>
                <p class="usuario_email">{{ usuario.email }}</p>
                <p class="usuario_data">Data de Entrada: {{ formatDate(usuario.data_entrada) }}</p>
                <button class="btn_emergencia" onclick="excluirconta">Excluir Conta</button>
            </div>
        </div>
      </div>
      <div class="container_grafico">
        <div> 
            <h1>Conseguiu evitar o seu vício?</h1>
            <Grafico />
        </div>
        <div>
            <h1>Como você está se sentindo?</h1>
            <GraficoLinhas />
        </div>
      </div>
</template>

<style>
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
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 10px;
    background-color: #3c096c;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: white;
}
@media (max-width: 768px) {
  .container_usuario {
    width: 90%;
    padding: 1.5rem;
  }

  .usuario_info {
    flex-direction: column;
    text-align: center;
  }

  .usuario_imagem {
    width: 120px;
    height: 120px;
  }

  .usuario_nome {
    font-size: 20px;
  }

  .usuario_email,
  .usuario_data {
    font-size: 14px;
  }

  .btn_emergencia {
    font-size: 14px;
    padding: 10px 24px;
  }

  .container_grafico {
    width: 90%;
    flex-direction: column;
    padding: 1.5rem;
  }

  .grafico_box {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 20px;
  }
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Grafico from '@/components/Grafico.vue';
import GraficoLinhas from '@/components/GraficoLinhas.vue'
import { formatDate } from '@/utils/formatarData';
export default {
    name: 'dashboard',
    components: {
        Navbar,
        Grafico,
        GraficoLinhas
    },
    data(){
        return{
            formatDate,
            dados: []
        }
    },
    mounted(){
        this.dados = JSON.parse(localStorage.getItem('dados'));
        console.log(JSON.parse(localStorage.getItem('dados')))
    },
  methods: {
    async excluirconta(){
      Swal.fire({
        title: "Deseja excluir sua conta?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar conta!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deletada!",
            text: "Sua conta foi deletada!",
            icon: "success"
          });
        }
      });
    }
  }
}
</script>