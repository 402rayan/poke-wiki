<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" to="/">Animes Wiki</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        
                        <router-link class="nav-link" to="/animes">Animés</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/characters">Personnages</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarVue',
};
</script>
