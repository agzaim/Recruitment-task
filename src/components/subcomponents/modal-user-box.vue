<template>
   <div>
        <div class="user-photo-frame">
            <user-photo v-bind:input="peer"></user-photo>
        </div>
        <div class="user-name-container">
            <user-name v-bind:input="peer"></user-name>
        </div>
   </div>   
</template>

<script>
    
    import userPhoto from "./user-photo.vue";
    import userName from "./user-name.vue";

    export default {
        props: {
            peer: {
                type: Object,
                required: true
            } 
        },
        components: {
            "userPhoto": userPhoto,
            "userName": userName
        }
    }
</script>

<style lang="scss">
    
/*@import "../../../scss/fonts.scss";     
@import "../../../scss/mixins.scss";
@import "../../../scss/variables.scss";*/

/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
.user-photo-frame {
    height: 90px;
    width: 90px;
    background-image: url(../../../items/skelatal_weave.png);
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

    
.user-name-container {
    text-align: center;
}
    
    
</style>