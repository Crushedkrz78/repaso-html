<template>
    <div class="general">
        <Slider></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Blog</h2>
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
    name: 'Blog',
    components: {
        Slider,
        Sidebar
    }
}
</script>