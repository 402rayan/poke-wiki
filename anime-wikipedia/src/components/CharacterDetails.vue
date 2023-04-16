<template>
    <div class="container" style="background-color : ; border-radius:30px; padding: 2rem">
        <div class="row">
            <div class="col-md-4">
                <img v-if="character.images" :src="character.images.jpg.image_url" class="img-fluid" alt="Character image" />
            </div>
            <div class="col-md-8">
                <h1 v-if="character.name">{{ character.name }}</h1>
                <h2>{{ character.name_kanji }}</h2>
                <p>{{ character.about }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import api from '@/api';

export default {
    name: 'CharacterDetails',
    data() {
        return {
            character: {},
        };
    },
    async created() {
        console.log(this.$route.params.id);
        const response = await api.getCharacter(this.$route.params.id);
        console.log(response.data);
        this.character = response.data.data;
    },
};
</script>
