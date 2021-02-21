<template>
    <div class="general">
        <Slider texto="Blog"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Crear artículo</h2>
                <!-- Formulario -->
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue';
import Sidebar from './Siderbar.vue';
//import Global from '../Global';
import Article from '../models/Article';
//import axios from 'axios';
//import { required, minLength } from 'vuelidate/lib/validators';

export default {
    name: 'CreateArticle',
    components: {
        Slider,
        Sidebar
    },
    data(){
        return{
            article: new Article('', '', null, '')
        }
    },
    mounted(){
        console.log(this.article);
    }
}
</script>