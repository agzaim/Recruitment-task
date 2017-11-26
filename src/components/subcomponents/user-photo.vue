<template>
    <img class="user-photo" alt="" v-bind:src="src">
<!--    <img class="user-photo" alt="" v-bind:src="activity.authorPhoto" v-on:click="modalTrigger(activity.authorID)">-->
</template>

<script>
export default {
     props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
    
</style>