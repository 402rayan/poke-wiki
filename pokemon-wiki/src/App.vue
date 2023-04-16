<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #f8f9fa;
  font-family: 'Roboto', sans-serif;
}

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

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.navbar-item {
  font-weight: 300;
}

.navbar-item:hover {
  background-color: transparent;
  color: #007BFF;
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
