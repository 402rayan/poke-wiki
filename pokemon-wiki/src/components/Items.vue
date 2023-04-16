<template>
    <div>
        <h1 class="title text-center">Objets</h1>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-2 mb-2" v-for="item in items" :key="item.name">
                    <div class="card item-card text-center" @click="goToItem(item.name)">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ItemsVue',
    data() {
        return {
            items: [],
        };
    },
    async created() {
        const response = await axios.get('https://pokeapi.co/api/v2/item?limit=100');
        this.items = response.data.results;
    },
    methods: {
        goToItem(name) {
            this.$router.push(`/items/${name}`);
        },
    },
};
</script>

<style scoped>
.title {
    font-weight: 300;
}

.card {
    background-color: #ffffff00;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
}

.item-card {
    cursor: pointer;
}
</style>
