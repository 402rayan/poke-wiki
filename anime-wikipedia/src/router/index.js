import { createRouter, createWebHistory } from 'vue-router';
import Characters from '@/components/Characters.vue';
import Anime from '@/components/Anime.vue';
import CharacterDetails from '@/components/CharacterDetails.vue';
import AnimeDetails from '@/components/AnimeDetails.vue';

const routes = [
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/',
    name: 'AnimeDeux',
    component: Anime,
  },
  {
    path: '/animes',
    name: 'Anime',
    component: Anime,
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
  },
  {
    path: '/animes/:id',
    name: 'AnimeDetails',
    component: AnimeDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
