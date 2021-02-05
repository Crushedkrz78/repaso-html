<template>
    <section id="content">
        <h2 class="subheader">{{ titulo }}</h2>
        <hr/>
        <h1>Este es mi Componente</h1>
        <h2>{{subtitulo}}</h2>
        <hr/>

        <h2>Reactividad</h2>
        <input type="text" v-model="nombre"/>
        <h3>Mi nombre es: <strong>{{nombre}}</strong></h3>

        <pre>
            {{$data}}
        </pre>
    </section>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtítulo de mi componente',
            nombre: ''
        }
    }
}
</script>