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
        methods: {
            activitiesQuantity: function(quantity, description) {
                if (quantity == 1) {
                    return description;
                } else {
                    return description + "s";
                }
           }
           
        }   
    }
</script>
<style>
    
</style>