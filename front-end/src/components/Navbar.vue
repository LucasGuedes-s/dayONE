<script setup lang="ts">
import router from '@/router';
</script>

<template>
    <header>
    <nav class="navbar">
      <div class="logo">
        <h1><span class="day">Day</span><span class="one">One</span></h1>
    </div>
      <ul class="nav-links">
        <router-link to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" />
          </svg>
          Dashboard
        </router-link>
        <router-link to="/progresso">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
          </svg>
          Registrar Progresso
        </router-link>
        <router-link to="/podcasts">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
              <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
              <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
            </svg>
          Podcasts
        </router-link>
      </ul>
      <div class="botoes_navbar">
        <a href="#" class="btn">Alterar Dados</a>
        <a href="#" class="btn">Sair</a>
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

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
  }

  .nav-links {
    flex-direction: column;
    gap: 16px;
  }

  .logo {
    margin-bottom: 10px;
  }

  .botoes_navbar {
    gap: 8px;
    margin-top: 16px;
  }

  .navbar a {
    font-size: 14px;
    padding: 6px 10px;
  }

  .btn {
    font-size: 14px;
    padding: 4px 12px;
  }
}
</style>
