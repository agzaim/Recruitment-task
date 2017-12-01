<template>
    <span class="user-name" 
          v-on:click="modalTrigger(question.authorID)"> 
        {{ name }}
    </span>
</template>

<script>

    export default {
         props: {
            name: {
                type: String,
                required: true
            }
         }
    }
</script>

<style>

</style>