<template>
    <div class="form_alterardados">
        <h1>Alterar Dados</h1>
        <form>
            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" name="nome" placeholder="Digite o seu nome completo">
            </div>

            <div class="form-group">
                <label for="">Gênero</label>
                <select name="genero" id="genero">
                    <option value="homem">Homem</option>
                    <option value="mulher">Mulher</option>
                    <option value="naobinario">Não-binário</option>
                    <option value="outro">Outro</option>

                </select>
            </div>

            <div class="form-group" id="datadenascimento">
                <label for="data_nascimento">Data de Nascimento:</label>
                <input type="date" id="data_nascimento" name="data_nascimento">
            </div>

            <div class="form-group" id="tipodependencia">
                <label for="dependencia">Tipo de Dependência</label>
                <select name="dependencia" id="dependencia">
                    <option value="alcool">Álcool</option>
                    <option value="drogas">Drogas</option>
                    <option value="jogos">Jogos</option>
                    <option value="tecnologica">Tecnologica</option>
                    <option value="emocional">Emocional</option>
                </select>
            </div>

            <div class="form-group" id="metas">
                <label for="metas">Quais as suas metas?</label>
                <textarea id="metas" name="mensagem" rows="1"></textarea>
            </div>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" name="email" placeholder="Digite o seu e-mail">
            </div>

            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha">
            </div>

            <div class="form-group" id="imagem">
                <label for="imagem">Adicionar Imagem:</label>
                <input type="file" id="imagem" name="imagem">
            </div>

            <h2>Cadastrar Acompanhante</h2>

            <div class="form-group" id="acomp_nome_completo">
                <label for="acomp_nome">Nome Completo</label>
                <input type="text" id="acomp_nome" name="acomp_nome" placeholder="Digite o nome completo do acompanhante">
            </div>
    
            <div class="form-group" id="acomp_email">
                <label for="acomp_email">E-mail</label>
                <input type="email" id="acomp_email" name="acomp_email" placeholder="Digite o e-mail do acompanhante">
            </div>
    
            <div class="form-group" id="acomp_senha">
                <label for="acomp_senha">Senha</label>
                <input type="password" id="acomp_senha" name="acomp_senha" placeholder="Digite a senha do acompanhante">
            </div>
    
            <button type="submit" class="btn_alterardados" click="">Alterar Dados</button>

        </form>
    </div>
</template>

<style>
body {
    background-color: #10002b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 0;
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
</style>