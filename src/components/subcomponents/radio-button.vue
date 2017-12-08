<template>
    <span>
            <input type="radio" 
                   name="viewType" 
                   value="value"
                   :checked="checked"> 
            <label>
                <slot></slot>
            </label>
   </span> 
</template>

<script>
export default {
    props: {
            value: {
                type: String
            },
            checked: {
                type: Boolean
            }
        }
}
</script>

<style lang="scss">
    

@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";

    
input[type="radio"] {
    margin-left: 26px;
    margin-right: 5px;
    @include mobiles {
        margin-left: 23px;
    }
}
    
    
</style>