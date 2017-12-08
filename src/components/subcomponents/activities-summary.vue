<template>
    <p class="activity-description">
        <span> 
            {{ quantity }}
        </span> 
        <span v-if=" description == 'discussion' "
              class="activity-additional-description"> 
            related 
        </span>
            {{ activitiesQuantity(quantity, description) }}
        <span v-if=" description == 'peer' " 
              class="activity-additional-description">
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

<style lang="scss">


@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
.activity-description {
    @include acivitiesFontStyle;   
}
    

.activity-description .activity-additional-description {
    font-family: $main-serif-font;
    font-size: 14px;
    font-weight: 800;
}
    
</style>