<template>
    <Navbar  />
    <main class="container_podcasts">
        <h2>Podcasts:</h2>
        <section class="podcast-list">
            <div class="podcast-item" v-for="link in links" :key="link.id">
                <iframe style="border-radius:12px" :src="link.link" width="100%" height="152" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            
            </div>       
        </section>
    </main>
</template>

<style scoped>
body {
    background-color: #110033;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

.container_podcasts {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h2 {
    color: white;
}

.podcast-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 20px;
}

.podcast-item {
    background-color: #240046;
    border: 1px solid #5a189a;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.podcast-item h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
}

</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Axios  from 'axios';

export default {
    name: 'podcasts',
    components: {
        Navbar
    },
    data() {
        return {
            links: [],
        }
    },
    mounted (){
        Axios.get("http://localhost:3000/podcasts"
        ).then(response => {
            this.links = response.data.links
        }).catch(Error => {
            console.error(Error)
        })
    }
}
</script>
