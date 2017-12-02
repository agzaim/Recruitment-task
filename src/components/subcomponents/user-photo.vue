<template>
    <img class="user-photo" 
         alt="" 
         v-bind:src="input.authorPhoto"
         on:click="modalTrigger(input.authorID)">
<!--    <img class="user-photo" alt="" v-bind:src="activity.authorPhoto" v-on:click="modalTrigger(activity.authorID)">-->
</template>

<script>
export default {
     props: {
        input: {
            type: Object,
            required: true
        }
     },
     methods: {
         modalTrigger(autID) {
             this.$store.commit("modalTrigger", autID);
         }
     }
}
</script>
<style>
    
</style>