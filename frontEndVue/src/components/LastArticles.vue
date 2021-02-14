<template>
    <div class="general">
        <Slider 
            texto="Bienvenidos al curso de Vue con Victor Robles" 
            home="true">
        </Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Últimos artículos</h2>
                <!--Listado de articulos-->                
                <div id="articles">
                    <Articles :articles="articles"></Articles>
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
import Articles from './Articles.vue';
import axios from 'axios';
import Global from '../Global';

export default {
    name: 'LastArticles',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
        this.getLastArticles();
    },
    data(){
        return {
            url: Global.url,
            articles: []
        }
    },
    methods: {
        getLastArticles(){
            axios.get(this.url + 'articles/last')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.articles = res.data.articles;
                    }
                    console.log(this.articles);
                });
        }
    }
}
</script>