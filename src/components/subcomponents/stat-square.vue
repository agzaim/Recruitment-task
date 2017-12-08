<template>
    <div class="statistics-square">
        <div class="statistics-square-content">
                <span class="statistics-square-quantity">
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

<style lang="scss">
    
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    

.statistics-square {
    height: 90px;
    width: 90px;
    background-color: $color-blue-light;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: $color-almost-black;
    &:first-child, &:nth-child(3) {
        -webkit-transform: rotate(-40deg);
        transform: rotate(-40deg);
        .statistics-square-content {
            -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
        }
    }
    &:nth-child(2) {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
        .statistics-square-content {
            -webkit-transform: rotate(10deg);
            transform: rotate(10deg);
        }
    }
     &:last-child {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
        .statistics-square-content {
            -webkit-transform: rotate(-10deg);
            transform: rotate(-10deg);
        }
    }
}

    
.statistics-square-content {
    text-align: center;
    font-size: 14px;
    font-weight: 800;
    margin: 0 auto;
    font-family: $main-serif-font;
    letter-spacing: 1.5px;
}

    
.statistics-square-quantity {
    font-family: $main-sans-serif-font, sans-serif;
    display: block;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 4px;
    letter-spacing: 1px;  
}
    
</style>