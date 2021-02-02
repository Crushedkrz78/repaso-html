<template>
    <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="logotipo"/>
                    <span id="brand">
                        <strong>Curso</strong> Vue
                    </span>
                </div>
                <!-- Menú de navegación -->
                <nav id="menu">
                    <!--Enlaces de navegacion-->
                    <ul>
                        <li>
                            <router-link to="/home">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/formulario">Formulario</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'pagina', params: {id: 'Soy el valor del parametro'}}">Página</router-link>
                        </li>
                        <li>
                            <router-link to="/pagina">Página 2</router-link>
                        </li>
                    </ul>
                </nav>

                <!--Limpiar Float-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>