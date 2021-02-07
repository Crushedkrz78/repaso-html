<template>
    <section id="content">
        <h2 class="subheader">Películas</h2>
        <!--Listado de articulos-->                
        <div id="articles">
            <article class="article-item" v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                <div class="image-wrap">
                    <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
                </div>
                <h2>{{pelicula.title}}</h2>
                <span class="date" :class="{
                    'yeargreen': pelicula.year >= 2015,
                    'yearred': pelicula.year < 2015
                }">
                    {{pelicula.year}}
                </span>
                <a href="#">Leer más</a>
                
                <div class="clearfix"></div>
            </article>
            {{peliculas[0].title}}
        </div>
    </section>
</template>

<script>
export default {
    name: 'Peliculas',
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