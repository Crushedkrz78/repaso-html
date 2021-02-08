<template>
    <section id="content">
        <h2 class="subheader">Películas</h2>
        <!--Listado de articulos-->                
        <div id="articles">
            <!-- v-for="pelicula in peliculas" v-bind:key="pelicula.title" -->
            <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                <Pelicula :pelicula="pelicula"></Pelicula>
            </div>
        </div>
    </section>
</template>

<script>
import Pelicula from './Pelicula.vue';
export default {
    name: 'Peliculas',
    components: {
        Pelicula
    },
    data(){
        return{
            peliculas: [
                {title: 'Batman vs Superman', year: 2017, image: ""},
                {title: 'Gran Torino', year: 2015, image: ""},
                {title: 'El Señor de los Anillos', year: 2003, image: ""},
                {title: 'Spiderman', year: 2002, image: ""}
            ]
        }
    }
}
</script>