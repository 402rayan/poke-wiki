<template>
    <div>
        <h1 class="title">{{ move.name }}</h1>
        <p>Type: {{ move.type.name }}</p>
        <p>Power: {{ move.power }}</p>
        <p>Accuracy: {{ move.accuracy }}</p>
        <p>PP: {{ move.pp }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MoveDetails',
    data() {
        return {
            move: {},
        };
    },
    async created() {
        const response = await axios.get(`https://pokeapi.co/api/v2/move/${this.$route.params.name}`);
        this.move = response.data;
    },
};
</script>

<style scoped>
.title {
    font-weight: 300;
}
</style>
