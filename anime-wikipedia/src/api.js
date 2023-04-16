import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
    },
});

const jikanClient = axios.create({
    baseURL: 'https://api.jikan.moe/v4',
});

export default {
    getAnimes(searchTerm) {
        console.log('je recherche');
        return apiClient.get(`/anime?filter[text]=${searchTerm}`);
    },

    getAnime(id) {
        return apiClient.get(`/anime/${id}`);
    },

    getCharacters(animeId) {
        return apiClient.get(`/characters?filter[animeId]=${animeId}`);
    },

    getCharacter(id) {
        return jikanClient.get(`/characters/${id}`);
    },

    searchCharacters(searchTerm) {
        console.log('je recherche;')
        console.log(`/characters?q=${searchTerm}`)
        return jikanClient.get(`/characters?q=${searchTerm}`);
    },
};
