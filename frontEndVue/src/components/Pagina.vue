<template>
    <section id="content">
        <h2 class="subheader">Página de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigirBlog()">Redirigir al Blog</button>
        <h4>{{ nombre }}</h4>
    </section>
</template>

<script>
export default {
    name: 'Pagina',
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