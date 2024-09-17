<template>
    <div>
        <canvas id="graficoPizza"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
    name: 'graficoPizza',
    data() {
        return {
            user_registro: [],
            feedbacksLinhas: ['feliz', 'triste', 'ansioso', 'calmo', 'irritado'],
            feedbacksContados: {
                feliz: 0,
                triste: 0,
                ansioso: 0,
                calmo: 0,
                irritado: 0
            }
        };
    },
    methods: {
        async dadosUser() {
            const email = this.dados.usuario[0].email;
            try {
                const response = await axios.get("http://localhost:3000/usuario/evolucao", {
                    params: { email: email }
                });

                if (Array.isArray(response.data.evolucao)) {
                    this.user_registro = response.data.evolucao;
                    this.contadorFeedback();
                    this.renderChart();
                } else {
                    console.error('A resposta da API não contém um array em evolucao:', response.data.evolucao);
                }
            } catch (error) {
                console.error(error);
            }
        },
        contadorFeedback() {
            this.feedbacksContados = {
                feliz: 0,
                triste: 0,
                ansioso: 0,
                calmo: 0,
                irritado: 0
            };

            this.user_registro.forEach(item => {
                const feedback = item.vicio_feedback.toLowerCase();
                if (this.feedbacksLinhas.includes(feedback)) {
                    this.feedbacksContados[feedback]++;
                }
            });
        },
        renderChart() {
            const ctx = document.getElementById('graficoPizza').getContext('2d');
            
            const data = Object.values(this.feedbacksContados);
            const labels = this.feedbacksLinhas.map(feedback => feedback.charAt(0).toUpperCase() + feedback.slice(1));

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#c77dff', '#e0aaff', '#9d4edd', '#7b2cbf', '#5a189a'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                        }
                    }
                }
            });
        }
    },
    mounted() {
        this.dados = JSON.parse(localStorage.getItem('dados'));
        this.dadosUser();
    }
};
</script>

<style scoped>
canvas {
    max-width: 600px; /* Ajuste o tamanho conforme necessário */
    max-height: 400px; /* Ajuste o tamanho conforme necessário */
}
</style>
