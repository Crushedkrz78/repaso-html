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

        <h2>Directivas Condicionales</h2>
        <input type="number" v-model="edad"/>
        <h3>Mi edad es: <strong>{{edad}}</strong></h3>

        <p class="alert-danger-provisional" v-if="edad && edad >= 18 && edad < 65">
            Eres Mayor de edad!!!
        </p>

        <p class="alert-purple-provisional" v-if="edad && edad >= 65">
            Eres de edad Avanzada!!!
        </p>

        <p class="alert-success-provisional" v-else>
            Eres Menor de edad!!!
        </p>
    </section>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtítulo de mi componente',
            nombre: '',
            edad: 18
        }
    }
}
</script>