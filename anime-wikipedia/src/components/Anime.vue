<template>
    <div>
        <h1>Animés</h1>
        <input type="text" v-model="searchTerm" @input="searchAnimes" placeholder="Rechercher un animé"
            class="form-control mb-3" />
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div v-for="anime in animes" :key="anime.id" class="col">
                <router-link :to="`/animes/${anime.id}`" class="text-decoration-none text-dark">
                    <div class="col">
            <div class="card h-100">
                <img :src="anime.attributes.posterImage.medium" alt="Image de l'animé" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{{ anime.attributes.titles.en_jp || anime.attributes.titles.ja_jp ||
                        anime.attributes.canonicalTitle }}</h5>
                    <p class="card-text">{{ this.truncateDescription(anime.attributes.synopsis) }}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Type: {{ anime.attributes.subtype }}</small>
                    <br />
                    <small class="text-muted">Épisodes: {{ anime.attributes.episodeCount }}</small>
                    <br />
                    <small class="text-muted">Durée: {{ anime.attributes.totalLength }} min</small>
                    <br />
                    <small class="text-muted">Note moyenne: {{ anime.attributes.averageRating }}</small>
                </div>
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
    name: 'AnimeVue',
    data() {
        return {
            animes: [],
            searchTerm: '',
        };
    },
    methods: {
        async searchAnimes() {
            if (!this.searchTerm) {
                this.animes = [];
                return;
            }

            const response = await api.getAnimes(this.searchTerm);
            this.animes = response.data.data;
        },
        truncateDescription(description) {
            const maxLength = 100;
            if (description.length > maxLength) {
                return description.substring(0, maxLength - 3) + "...";
            }
            return description;
        },
    },
};
</script>
