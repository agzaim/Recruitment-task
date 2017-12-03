<template>
    <div id="app">
        <router-view></router-view>
        <profile-view v-if="showModal">
                    
<!--
                     v-bind:authorID="authorID">
             v-on:close="showModal = false"
-->
        </profile-view>
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
//            authorID() {
//                return this.$store.state.authorID;
//            }
        }
    }

</script>

<style>

</style>
