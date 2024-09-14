<template>
    <Navbar />
    <div class="form-container">
        <h2>Registrar Progresso</h2>
        <form>
            <div class="form-group">
                <label for="data">Data</label>
                <input type="date" id="data" name="data">
            </div>
            <div class="form-group">
                <label for="humor">Como você está se sentindo hoje?</label>
                <select id="humor" name="humor">
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
                <select id="sucesso" name="sucesso">
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                    <option value="parcialmente">Parcialmente</option>
                </select>
            </div>
            <div class="form-group">
                <label for="atividades">Quais atividades você realizou?</label>
                <textarea id="atividades" name="atividades" rows="4" placeholder="Descreva as atividades realizadas hoje..."></textarea>
            </div>
            <div class="form-group">
                <label for="desafios">Você enfrentou algum desafio?</label>
                <textarea id="desafios" name="desafios" rows="4" placeholder="Descreva os desafios que enfrentou hoje..."></textarea>
            </div>
            <div class="form-group" id="mensagem">
                <label for="mensagem">Mensagem para você mesmo</label>
                <textarea id="mensagem" name="mensagem" rows="4" placeholder="Deixe uma mensagem positiva ou reflexiva para você mesmo..."></textarea>
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

.form-group input, select, textarea {
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

#evitarvicio, #mensagem {
    grid-column: 1 / -1;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'progresso',
    components: {
        Navbar
    },
}
</script>