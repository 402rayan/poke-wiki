<template>
    <div>
        <h1 class="title text-center">Attaques</h1>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-2 mb-4" v-for="move in moves" :key="move.name">
                    <div class="card move-card text-center" @click="goToMove(move.name)">
                        <div class="card-body">
                            <h5 class="card-title">{{ move.name }}</h5>
                            <p class="card-text">
                                <span class="badge" :class="typeColorClass(move.type.name)">
                                    {{ move.type.name }}
                                </span>
                            </p>
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
    name: 'MovesVue',
    data() {
        return {
            moves: [],
        };
    },
    async created() {
        const response = await axios.get('https://pokeapi.co/api/v2/move?limit=100');
        const movesWithType = await Promise.all(
            response.data.results.map(async (move) => {
                const detailsResponse = await axios.get(move.url);
                return {
                    ...move,
                    type: detailsResponse.data.type,
                };
            }),
        );
        this.moves = movesWithType;
    },
    methods: {
        goToMove(name) {
            this.$router.push(`/moves/${name}`);
        },
        typeColorClass(typeName) {
            const typeColors = {
                normal: 'bg-secondary',
                fighting: 'bg-dark',
                flying: 'bg-info',
                poison: 'bg-indigo',
                ground: 'bg-earth',
                rock: 'bg-warning',
                bug: 'bg-success',
                ghost: 'bg-purple',
                steel: 'bg-light',
                fire: 'bg-danger',
                water: 'bg-primary',
                grass: 'bg-green',
                electric: 'bg-yellow',
                psychic: 'bg-pink',
                ice: 'bg-cyan',
                dragon: 'bg-navy',
                dark: 'bg-black',
                fairy: 'bg-rose',
            };

            return typeColors[typeName] || 'bg-secondary';
        },
    },
};
</script>

<style scoped>
.title {
    font-weight: 300;
}

.card {
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
}

.move-card {
    cursor: pointer;
}

/* Custom colors for types */
.bg-indigo {
    background-color: #9c27b0;
}

.bg-earth {
    background-color: #8b4513;
}

.bg-green {
    background-color: #4caf50;
}

.bg-yellow {
    background-color: #ffeb3b;
}

.bg-pink {
    background-color: #e91e63;
}

.bg-cyan {
    background-color: #00bcd4;
}

.bg-navy {
    background-color: #1a237e;
}

.bg-black {
    background-color: #212121;
}

.bg-rose {
    background-color: #f06292;
}

.badge {
color: white !important;
font-weight: 400;
}
</style>