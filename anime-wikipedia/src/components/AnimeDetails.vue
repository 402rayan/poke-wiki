<template>
    <div class="container anime-details">
        <div class="row mt-4">
            <div class="col-md-4">
                <img :src="anime.attributes.posterImage.large" class="img-fluid" alt="Anime poster" />
            </div>
            <div class="col-md-8">
                <h1>{{ anime.attributes.canonicalTitle }}</h1>
                <h2>{{ anime.attributes.titles.ja_jp }}</h2>
                <div class="anime-details-info">
                    <p><strong>Start Date:</strong> {{ anime.attributes.startDate }}</p>
                    <p><strong>End Date:</strong> {{ anime.attributes.endDate }}</p>
                    <p><strong>Episodes:</strong> {{ anime.attributes.episodeCount }}</p>
                    <p><strong>Duration:</strong> {{ anime.attributes.episodeLength }} minutes</p>
                    <p><strong>Status:</strong> {{ anime.attributes.status }}</p>
                    <p><strong>Age Rating:</strong> {{ anime.attributes.ageRating }}</p>
                    <p><strong>Age Rating Guide:</strong> {{ anime.attributes.ageRatingGuide }}</p>
                </div>
                <h3>Synopsis</h3>
                <p>{{ anime.attributes.synopsis }}</p>
                <div v-if="anime.attributes.abbreviatedTitles.length > 0">
                    <h3>Abbreviated Titles</h3>
                    <ul>
                        <li v-for="title in anime.attributes.abbreviatedTitles" :key="title">{{ title }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
    name: 'AnimeDetails',
    data() {
        return {
            anime: {},
            characters: [],
        };
    },
    async created() {
        const response = await api.getAnime(this.$route.params.id);
        this.anime = response.data.data;
        const charactersResponse = await api.getCharacters(this.$route.params.id);
        this.characters = charactersResponse.data.data;
    },
};
</script>
