<template>
    <div class="general">
        <Slider texto="Blog"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Blog</h2>

                <div id="articles" v-if="articles">
                    <article class="article-item" v-for="article in articles" :key="article._id">
                        <div class="image-wrap">
                            <img :src="url + 'get-image/'+article.image" :alt="article.title" v-if="article.image"/>
                            <img src="../assets/images/default-image.png" :alt="article.title" v-if="!article.image"/>
                        </div>
                        <h2>{{article.title}}</h2>
                        <span class="date">
                            {{article.date}}
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
import axios from 'axios';
import Global from '../Global';

export default {
    name: 'Blog',
    components: {
        Slider,
        Sidebar
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return {
            url: Global.url,
            articles: []
        }
    },
    methods: {
        getArticles(){
            axios.get(this.url + 'articles')
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