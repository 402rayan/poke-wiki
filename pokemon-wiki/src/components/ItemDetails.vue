<template>
    <div>
        <h1 class="title">{{ item.name }}</h1>
        <p>{{ item.effect_entries[0].effect }}</p>
        <p>Price: {{ item.cost }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ItemDetails',
    data() {
        return {
            item: {},
        };
    },
    async created() {
        const response = await axios.get(`https://pokeapi.co/api/v2/item/${this.$route.params.name}`);
        this.item = response.data;
    },
};
</script>

<style scoped>
.title {
    font-weight: 300;
}
</style>