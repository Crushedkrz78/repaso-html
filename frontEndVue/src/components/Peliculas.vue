<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Películas</h2>
                <div class="favorita" v-if="favorita">
                    La película marcada es:
                    <h3>{{favorita.title}}</h3>
                </div>
                <!--Listado de articulos-->                
                <div id="articles">
                    <!-- v-for="pelicula in peliculas" v-bind:key="pelicula.title" -->
                    <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                        <Pelicula 
                            :pelicula="pelicula"
                            @favorita="haLlegadoLaPeliculaFavorita"
                        ></Pelicula>
                    </div>
                </div>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Siderbar.vue';
import Pelicula from './Pelicula.vue';
export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Sidebar
    },
    data(){
        return{
            favorita: null,
            peliculas: [
                {title: 'Batman vs Superman', year: 2017, image: ""},
                {title: 'Gran Torino', year: 2015, image: ""},
                {title: 'El Señor de los Anillos', year: 2003, image: ""},
                {title: 'Spiderman', year: 2002, image: ""}
            ]
        }
    },
    methods: {
        haLlegadoLaPeliculaFavorita(favorita){
            this.favorita = favorita;
        }
    }
}
</script>