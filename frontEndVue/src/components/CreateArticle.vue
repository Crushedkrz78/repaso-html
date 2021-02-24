<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Crear artículo</h2>
                <!-- Formulario -->
                <form class="mid-form" v-on:submit.prevent="save()">
                    <div class="form-group">
                        <label for="title">Título</label>
                        <input type="text" name="title" v-model="article.title"/>
                        <div v-if="submitted && !$v.article.title.required">Debes ingresar un título</div>
                    </div>
                    <div class="form-group">
                        <label for="content">Contenido</label>
                        <textarea name="content" v-model="article.content"></textarea>
                        <div v-if="submitted && !$v.article.content.required">Debes ingresar un contenido</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Imagen</label>
                        <input type="file" id="file" ref="file" name="file0" @change="fileChange()" />
                    </div>

                    <div class="clearfix"></div>

                    <input type="submit" value="Guardar" class="btn btn-success"/>
                </form>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Siderbar.vue';
import Global from '../Global';
import Article from '../models/Article';
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'CreateArticle',
    components: {
        Sidebar
    },
    data(){
        return{
            url: Global.url,
            article: new Article('', '', null, ''),
            submitted: false,
            file: ''
        }
    },
    mounted(){
        console.log(this.article);
    },
    methods: {
        fileChange(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },
        save(){
            this.submitted = true;

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

            axios.post(this.url+'save', this.article)
                .then(response => {
                    console.log(response.data);
                    if(response.data.status == 'success'){
                        //Subida de archivo
                        if(this.file != null && this.file != undefined && this.file != ''){
                            const formData = new FormData();
                            formData.append('file0', this.file, this.file.name);

                            var articleId = response.data.article._id;
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(response => {
                                    console.log(response);
                                    if(response.data.article){
                                        this.article = response.data.article;
                                        this.$router.push('/blog');
                                    }
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        }else{
                            // Redirección a la página de BLOG
                            this.article = response.data.article;
                            this.$router.push('/blog');
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    validations: {
        article: {
            title: {
            required
            },
            content: {
                required
            }
        }
    }
}
</script>