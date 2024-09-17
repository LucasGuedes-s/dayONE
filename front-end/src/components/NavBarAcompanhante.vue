<template>
    <header>
    <nav class="navbar">
      <div class="logo">
        <h1><span class="day">Day</span><span class="one">One</span></h1>
    </div>
      <div class="botoes_navbar">
        <button type="submit" @click="sair" class="btn">Sair</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
    background-color: #180047;
    box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.10);
    padding: 15px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
}

.logo a {
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
}

.day {
    color: #E0E1DD;
}

.one {
    color: #9d4edd;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 32px;
    padding: 0;
    margin: 0;
}

.navbar a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 4px;
}

.navbar li a:hover {
    background-color: #3c096c;
}

.botoes_navbar {
    display: flex;
    gap: 16px;
}

.btn {
    color: #fff;
    border: 1px solid #5a189a;
    font-size: 16px;
    padding: 6px 16px;
    border-radius: 4px;
    text-decoration: none;
}

.btn:hover {
    background-color: #5a189a;
}
</style>
<script>
import router from '@/router';

export default {
    name: 'dashboard',
    methods:{
      async sair(){
        sessionStorage.removeItem('dados');
        this.dados = JSON.parse(localStorage.getItem('dados_acomp'));
        router.push('/')
      }
    }
  }
</script>