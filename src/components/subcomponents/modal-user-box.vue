<template>
   <div class="modal-user-box">
        <div class="user-photo-frame">
            <user-photo v-bind:input="peer"></user-photo>
        </div>
        <div class="user-name-container">
            <user-name v-bind:input="peer"></user-name>
        </div>
   </div>   
</template>

<script>
    
    import userPhoto from "./user-photo.vue";
    import userName from "./user-name.vue";

    export default {
        props: {
            peer: {
                type: Object,
                required: true
            } 
        },
        components: {
            "userPhoto": userPhoto,
            "userName": userName
        }
    }
</script>

<style>
    .user-name-container {
        text-align: center;
    }
</style>