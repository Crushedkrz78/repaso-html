<template src="./CreateArticle.html">
</template>

<script>
import Sidebar from './Siderbar.vue';
import Global from '../Global';
import Article from '../models/Article';
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

export default {
    name: 'EditArticle',
    components: {
        Sidebar
    },
    data(){
        return{
            url: Global.url,
            article: new Article('', '', null, ''),
            submitted: false,
            file: '',
            isEdit: true
        }
    },
    mounted(){
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {
        getArticle(articleId){
            axios.get(this.url + 'article/' + articleId).then(res => {
                console.log(res);
                if(res.data.status == 'success'){
                    this.article = res.data.article;
                }
            });
        },
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
                                        swal(
                                            'Articulo creado',
                                            'El artículo se ha creado correctamente',
                                            'success'
                                        );
                                        this.article = response.data.article;
                                        this.$router.push('/blog');
                                    }
                                })
                                .catch(error => {
                                    console.log(error);
                                    swal(
                                        'Creación fallida',
                                        'El artículo no se ha creado correctamente',
                                        'error'
                                    );
                                });
                        }else{
                            swal(
                                'Articulo creado',
                                'El artículo se ha creado correctamente',
                                'success'
                            );
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