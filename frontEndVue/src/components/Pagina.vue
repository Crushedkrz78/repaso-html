<template>
    <div class="general">
        <Slider texto="Página de pruebas"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Página de pruebas</h2>
                <h3>{{ id_desde_url }}</h3>
                <button @click="actualizarNombre()">Actualizar Nombre</button>
                <button @click="redirigirBlog()">Redirigir al Blog</button>
                <h4>{{ nombre }}</h4>
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
    name: 'Pagina',
    components: {
        Slider,
        Sidebar
    },
    created(){
        console.log("Componente Creado");
    },
    mounted(){
        this.id_desde_url = this.$route.params.id;
        console.log("Componente Montado");
    },
    updated(){
        console.log("Componente Actualizado")
    },
    destroyed(){
        console.log("Componente Eliminado");
    },
    data(){
        return{
            id_desde_url: null,
            nombre: 'Cristian Perez'
        }
    },
    methods:{
        actualizarNombre(){
            this.nombre = 'CRISTIAN PEREZ';
            console.log(this.nombre);
        },
        redirigirBlog(){
            this.$router.push('/blog');
        }
    }
}
</script>