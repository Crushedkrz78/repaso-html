<template>
    <div class="general">
        <Slider texto="Búsqueda"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader" v-if="articles">Artículos encontrados</h2>
                <h2 class="subheader" v-else>Sin resultados</h2>
                <div id="articles" v-if="articles">
                    <Articles :articles="articles"></Articles>
                </div>
                <div v-else>
                    <h2>No hay artículos que coincidan con tu búsqueda.</h2>
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
    name: 'Search',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
        var searchString = this.$route.params.searchString;
        this.getArticlesBySearch(searchString);
    },
    data(){
        return {
            url: Global.url,
            articles: []
        }
    },
    methods: {
        getArticlesBySearch(searchString){
            axios.get(this.url + 'search/' + searchString)
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