<template>
    <div>
        <canvas id="grafico2"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
    name: 'grafico2',
    data() {
        return {
            user_registro: [],
            feedbacksLinhas: ['feliz', 'triste', 'ansioso', 'calmo', 'irritado'],
            feeedbacksContados: {
                feliz: [],
                triste: [],
                ansioso: [],
                calmo: [],
                irritado: []
            }
        }
    },
    methods: {
        async dadosUser() {
            const email = this.dados.usuario[0].email;
            try {
                const response = await axios.get("http://localhost:3000/usuario/evolucao", {
                    params: { email: email }
                });

                // Verifica se response.data.evolucao contém o array esperado
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
            // Inicializa contadores
            this.feeedbacksContados = {
                feliz: [],
                triste: [],
                ansioso: [],
                calmo: [],
                irritado: []
            };

            // Contadores por mês
            this.user_registro.forEach(item => {
                const date = new Date(item.data_registro);
                const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
                const feedback = item.vicio_feedback.toLowerCase();

                if (this.feedbacksLinhas.includes(feedback)) {
                    if (!this.feeedbacksContados[feedback][monthYear]) {
                        this.feeedbacksContados[feedback][monthYear] = 0;
                    }
                    this.feeedbacksContados[feedback][monthYear]++;
                }
            });
        },
        renderChart() {
            const ctx = document.getElementById('grafico2').getContext('2d');

            const labels = [...new Set(this.user_registro.map(item => {
                const date = new Date(item.data_registro);
                return `${date.getMonth() + 1}-${date.getFullYear()}`;
            }))];

            const datasets = this.feedbacksLinhas.map(feedback => {
                const data = labels.map(label => {
                    return this.feeedbacksContados[feedback][label] || 0;
                });

                return {
                    label: feedback.charAt(0).toUpperCase() + feedback.slice(1),
                    data: data,
                    borderColor: this.getColor(feedback),
                    fill: false,
                };
            });

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasets,
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Data'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Contagem'
                            }
                        }
                    },
                },
            });
        },
        getColor(feedback) {
            const colors = {
                feliz: 'green',
                triste: 'blue',
                ansioso: 'yellow',
                calmo: 'purple',
                irritado: 'red'
            };
            return colors[feedback] || 'gray';
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
    max-width: 800px; /* Ajuste o tamanho conforme necessário */
    max-height: 500px; /* Ajuste o tamanho conforme necessário */
}
</style>
