import { createRouter, createWebHistory } from 'vue-router';
import Pokemons from '../components/Pokemons.vue';
import Moves from '../components/Moves.vue';
import Items from '../components/Items.vue';
import PokemonDetails from '../components/PokemonDetails.vue';
import MoveDetails from '../components/MoveDetails.vue';
import ItemDetails from '../components/ItemDetails.vue';

const routes = [
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: Pokemons,
  },
  {
    path: '/moves',
    name: 'Moves',
    component: Moves,
  },
  {
    path: '/items',
    name: 'Items',
    component: Items,
  },
  {
    path: '/pokemons/:name',
    name: 'PokemonDetails',
    component: PokemonDetails,
  },
  {
    path: '/moves/:name',
    name: 'MoveDetails',
    component: MoveDetails,
  },
  {
    path: '/items/:name',
    name: 'ItemDetails',
    component: ItemDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
