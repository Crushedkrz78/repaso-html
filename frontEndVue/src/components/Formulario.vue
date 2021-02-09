<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Siderbar.vue';
export default {
    name: 'Formulario',
    components: {
        Sidebar
    }
}
</script>