<template>
    <div id="app">
        <router-view></router-view>
        <profileView v-if="showModal" 
                     v-on:close="showModal = false"
                     v-bind:authorID="authorID">
        </profileView>
    </div>
</template>

<script>
    import profileView from "./containers/profileView.vue";



    export default {
        components: {
            "profileView": profileView
        },
        computed: {
            showModal() {
                return this.$store.state.showModal;
            },
            authorID() {
                return this.$store.state.authorID;
            }
        }
    }

</script>

<style>

</style>
