<template>
    <p>
        <span> 
            {{ quantity }}
        </span> 
        <span v-if=" description == 'discussion' "> 
            related 
        </span>
            {{ activitiesQuantity(quantity, description) }}
        <span v-if=" description == 'peer' ">
            involved
        </span>
    </p>  
</template>

<script>
    import methodMixins from "../../mixins/methodMixins";
    
    export default {
        props: {
            quantity: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            }      
        },
        mixins: [methodMixins]
    }
</script>
<style>
    
</style>