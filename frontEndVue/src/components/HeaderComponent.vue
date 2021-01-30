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
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="formulario.html">Formulario</a>
                        </li>
                        <li>
                            <a href="#">Pagina 1</a>
                        </li>
                        <li>
                            <a href="#">Pagina 2</a>
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