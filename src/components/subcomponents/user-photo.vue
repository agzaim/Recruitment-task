<template>
    <img class="user-photo" 
         alt="" 
         v-bind:src="input.authorPhoto"
         v-on:click="modalTrigger(input.authorID)">
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