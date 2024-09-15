<template>
    <div>
        <canvas id="grafico"></canvas>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

export default {
    name: 'grafico',
    setup() {
        const chart = ref(null);

        const renderChart = () => {
            const ctx = document.getElementById('grafico').getContext('2d');
            chart.value = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                    datasets: [
                        {
                            label: 'SIM',
                            data: [3, 5, 8, 7, 6, 9],
                            borderColor: 'green',
                            fill: false,
                        },
                        {
                            label: 'NÃO',
                            data: [2, 3, 2, 6, 4, 3],
                            borderColor: 'red',
                            fill: false,
                        },
                        {
                            label: 'PARCIALMENTE',
                            data: [4, 4, 5, 5, 4, 7],
                            borderColor: 'orange',
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        };

        onMounted(() => {
            renderChart();
        });

        return {
            chart,
        };
    },
};
</script>
