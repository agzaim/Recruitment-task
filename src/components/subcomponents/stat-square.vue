<template>
    <div class="statistics-square">
        <div class="statistics-square-content">
                <span>
                    {{ quantity }}
                </span>
                {{ activitiesQuantity(quantity, description) }}
        </div>
    </div>
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