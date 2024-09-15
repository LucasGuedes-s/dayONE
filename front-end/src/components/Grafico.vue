<template>
    <div>
        <canvas id="grafico"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
    name: 'grafico',
    data() {
        return {
            user_registro: [],
            dados: []
        }
    },
    methods: {
        async dadosUser() {
            const email = this.dados.usuario[0].email;
            try {
                const response = await axios.get("http://localhost:3000/usuario/evolucao", {
                    params: {
                        email: email
                    }
                });
                // Verifica se response.data.evolucao contém o array esperado
                if (Array.isArray(response.data.evolucao)) {
                    this.user_registro = response.data.evolucao; // Acessa o array correto
                    this.renderChart(); // Chama o gráfico após obter os dados
                } else {
                    console.error('A resposta da API não contém um array em evolucao:', response.data.evolucao);
                }
            } catch (error) {
                console.error(error);
            }
        },
    contarStatus(status) {
        if (!Array.isArray(this.user_registro)) {
            console.error('user_registro não é um array:', this.user_registro);
            return 0;
        }
        const count = this.user_registro.filter(item => item.status_paciente.toUpperCase() === status.toUpperCase()).length;
        console.log(`Contagem para ${status}:`, count);
        return count;
    },
    renderChart() {
        const ctx = document.getElementById('grafico').getContext('2d');

        // Contagem dos valores "SIM", "NÃO" e "PARCIALMENTE"
        const simCount = this.contarStatus('Sim');
        const naoCount = this.contarStatus('Não');
        const parcialmenteCount = this.contarStatus('Parcialmente');

        console.log('Dados para o gráfico:', { simCount, naoCount, parcialmenteCount });

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Sim', 'Não', 'Parcialmente'],
                datasets: [
                    {
                        data: [simCount, naoCount, parcialmenteCount],
                        backgroundColor: ['green', 'red', 'orange'],
                    },
                ],
            },
            options: {
                responsive: true,
            },
        });
    }

    },
    mounted() {
        this.dados = JSON.parse(localStorage.getItem('dados'));
        this.dadosUser(); // Chama a função para buscar os dados e depois renderiza o gráfico
    }
};
</script>

<style scoped>
canvas {
    max-width: 300px; /* Ajuste o tamanho conforme necessário */
    max-height: 300px; /* Ajuste o tamanho conforme necessário */
}
</style>
