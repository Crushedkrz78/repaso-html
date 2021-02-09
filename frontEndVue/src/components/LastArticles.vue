<template>
    <div class="general">
        <Slider></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Últimos artículos</h2>
                <!--Listado de articulos-->                
                <div id="articles">
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            <img src="https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg" alt="paisaje"/>
                        </div>
                        <h2>Articulo de Prueba</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>
                        
                        <div class="clearfix"></div>
                    </article>
                </div>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue';
import Sidebar from './Siderbar.vue';
export default {
    name: 'LastArticles',
    components: {
        Slider,
        Sidebar
    }
}
</script>