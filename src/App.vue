<template>
    <div id="app">
        <router-view></router-view>
        <profile-view v-if="showModal"></profile-view>
    </div>
</template>

<script>
    
    import profileView from "./components/profile-view.vue";

    export default {
        components: {
            "profileView": profileView
        },
        computed: {
            showModal() {
                return this.$store.state.showModal;
            }
        }
    }

</script>

<style lang="scss">

@import "./assets/styles/scss/main.scss";
        
</style>
