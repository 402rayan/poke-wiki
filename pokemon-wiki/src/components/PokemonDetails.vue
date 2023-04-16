<template>
    <div v-if="pokemon">
       
      </div>
        <div class="container">
            <div class="row">
                <div style="margin-right : 1rem" class="info-section col-md-6">
                    <h1 class="title text-center">{{ pokemon.name }}</h1>
                    <div class="container navigation-buttons">
                    <button class="btn btn-primary arrow-button" @click="goToPreviousPokemon" :disabled="pokemon.id === 1">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button class="btn btn-primary arrow-button" @click="goToNextPokemon">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
                    <figure class="image is-256x256 mx-auto">
                        <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="Pokemon artwork" />
                    </figure>
                </div>
                <div class="container info-container">
          <div class="info-section">
            <h2>Informations générales</h2>
            <p><strong>Nom :</strong> {{ pokemon.name }}</p>
            <p><strong>ID :</strong> {{ pokemon.id }}</p>
            <p><strong>Hauteur :</strong> {{ pokemon.height / 10 }} m</p>
            <p><strong>Poids :</strong> {{ pokemon.weight / 10 }} kg</p>
          </div>

          <div class="info-section">
            <h2>Types</h2>
            <div style="display:flex!important, flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;">
                <p style="" v-for="type in pokemon.types" :key="type.type.name">
                <span class="type-badge" :class="'type-' + type.type.name">{{ type.type.name }}</span>
                </p>
            </div>
          </div>

          <div class="info-section">
            <h2>Statistiques</h2>
            <p v-for="stat in pokemon.stats" :key="stat.stat.name">
              <strong>{{ stat.stat.name }} :</strong> {{ stat.base_stat }}
            </p>
          </div>

          <div class="info-section">
            <h2>Évolutions</h2>
            <p v-for="stage in evolutionStages" :key="stage.name">
              {{ stage.name }}
            </p>
          </div>
        </div>
        <!-- ... -->
            </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PokemonDetailsVue',
    data() {
        return {
            pokemon: null,
            evolutionStages: [],
        };
    },
    watch: {
        '$route.params.name': {
            immediate: true,
            handler: async function (newName) {
                await this.fetchPokemonData(newName);
            },
        },
    },
    methods: {
        goToPreviousPokemon() {
            if (this.pokemon.id > 1) {
                this.$router.push(`/pokemons/${this.pokemon.id - 1}`);
            }
        },
        goToNextPokemon() {
            this.$router.push(`/pokemons/${this.pokemon.id + 1}`);
        },
        async fetchPokemonData(name) {
            const { data: pokemon } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`,
            );
            const { data: species } = await axios.get(pokemon.species.url);
            const { data: evolutionChain } = await axios.get(species.evolution_chain.url);

            const evolutionStages = [];
            let currentStage = evolutionChain.chain;

            while (currentStage) {
                evolutionStages.push(currentStage.species);
                currentStage = currentStage.evolves_to[0];
            }

            this.pokemon = pokemon;
            this.evolutionStages = evolutionStages;
        },
    },
};
</script>


<style scoped>
.title {
    font-weight: 300;
    text-transform: capitalize;
}
.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.navigation-buttons .btn {
  margin: 0 10px;
}
.subtitle {
    font-weight: 300;
    text-transform: capitalize;
}

ul {
    list-style-type: none;
}

li {
    margin-bottom: 5px;
}
.arrow-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: background-color 0.3s;
}

.arrow-button:hover {
  background-color: #0056b3;
}

.arrow-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-section {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.info-section h2 {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 10px;
}
.type-badge {
  display: inline-block;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  text-transform: capitalize;
  margin-right: 5px;
  color: #ffffff;
}

.type-normal {
  background-color: #a8a878;
}
.type-steel {
  background-color: #a8a878;
}
.type-fighting {
  background-color: #c03028;
}
.type-flying {
  background-color: #a890f0;
}

.type-poison {
background-color: #9c27b0;
}
.type-ground {
background-color: #8b4513;
}
.type-rock {
background-color: #a18571;
}
.type-grass {
background-color: #4caf50;
}

.type-bug {
background-color: #97bb99;
}

.type-electric {
background-color: #ffeb3b;
}

.type-fire {
background-color: #e91e63;
}

.type-water {
background-color: #00bcd4;
}

.type-dragon {
background-color: #1a237e;
}

.type-ghost {
background-color: #3a407d;
}

.type-dark {
background-color: #212121;
}

.type-fea, .type-psychic {
background-color: #f06292;
}

</style>
