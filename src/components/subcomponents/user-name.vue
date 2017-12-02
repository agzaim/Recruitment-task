<template>
    <span class="user-name" 
          v-on:click="modalTrigger(input.authorID)"> 
        {{ input.author }}
    </span>
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