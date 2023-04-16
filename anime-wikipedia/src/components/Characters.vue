<template>
    <div>
        <h1>Personnages</h1>
        <input type="text" v-model="searchTerm" @input="searchCharacters" placeholder="Rechercher un personnage"
            class="form-control mb-3" />
        <div class="row row-cols-1 row-cols-md-6 g-4">
            <div v-for="character in characters" :key="character.id" class="col">
                <router-link :to="`/characters/${character.mal_id}`" class="text-decoration-none text-dark">
                    <div class="card h-60">
                        <img :src="character.images.jpg.image_url" alt="Image du personnage" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ character.name }}</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
    name: 'CharactersVue',
    data() {
        return {
            characters: [],
            searchTerm: '',
        };
    },
    methods: {
        async searchCharacters() {
            if (!this.searchTerm) {
                this.characters = [];
                return;
            }

            const response = await api.searchCharacters(this.searchTerm);
            this.characters = response.data.data;
        },
    },
};
</script>


<style scoped>
.card-img-top {
    max-height: 60%!important;
}
</style>