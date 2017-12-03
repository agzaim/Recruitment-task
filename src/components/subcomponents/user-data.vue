<template>
        <div class="user-data">
            <slot></slot>
            
            <span v-if="!activityLevel">
                {{ dataValue }}
            </span>
            
            <div class="ribbon-container" v-else>
                <img class="ribbon"
                     src="../../../items/fullRibbon.png" 
                     v-for="item in activityLevel">
                <img class="ribbon"
                     src="../../../items/emptyRibbon.png" 
                     v-for="item in (3 - activityLevel)">
            </div>
        </div>
</template>

<script>

    export default {
        props: {
            dataValue: {
                type: String
            },
            activityLevel: {
                type: Number
            }
            
     }
    }
    
</script>

<style>

</style>