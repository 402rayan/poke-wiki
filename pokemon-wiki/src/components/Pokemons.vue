<template>
    <div>
        <h1 class="title text-center">Pokémons</h1>
        <h4 style="font-size : 1rem" class="subtitle text-center"><i>(you can click on them)</i></h4>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-3 mb-4" v-for="pokemon in pokemons" :key="pokemon.name">
                    <div class="card pokemon-card text-center" @click="goToPokemon(pokemon.name)">
                        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
                            class="card-img-top mx-auto mt-3" alt="Pokemon sprite" style="width: 160px; height: 160px;" />
                        <div class="card-body">
                            <h5 class="card-title">{{ pokemon.name }}</h5>
                            <p class="card-text">
                                <span class="badge" :class="typeColorClass(type.type.name)" v-for="type in pokemon.types"
                                    :key="type.type.name">
                                    {{ type.type.name }}
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
    name: 'PokemonsVue',
    data() {
        return {
            pokemons: [],
        };
    },
    async created() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonsWithTypes = await Promise.all(
            response.data.results.map(async (pokemon, index) => {
                const detailsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
                return {
                    ...pokemon,
                    id: index + 1,
                    types: detailsResponse.data.types,
                };
            }),
        );
        this.pokemons = pokemonsWithTypes;
    },
    methods: {
        goToPokemon(name) {
            this.$router.push(`/pokemons/${name}`);
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

.pokemon-card {
    cursor: pointer;
}

.badge {
    margin: 0 2px;
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


.bg-indigo, .bg-earth, .bg-green, .bg-yellow, .bg-pink, .bg-cyan, .bg-navy, .bg-black, .bg-rose {
color: white !important;
}
</style>