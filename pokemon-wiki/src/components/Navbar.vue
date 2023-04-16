<template>
    <nav style="margin-bottom : 20px" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- <a class="navbar-brand" href="#">Poképedia</a>-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pokemons">Pokémons</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/moves">Attaques</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/items">Objets</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: 300;
}

.nav-link {
    font-weight: 300;
}

.nav-link:hover {
    color: #007bff !important;
}
</style>

<script>
export default {
    name: 'NavbarVue',
};
</script>
