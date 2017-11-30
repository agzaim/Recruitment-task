<template>
    <div v-bind:class="{'header-title-box': mainHeader, 'single-title-box': singleQuestionHeader}">
        <h3>QUESTIONS</h3> 
        <div class="plus-mark">+</div>
    </div>
</template>

<script>
export default {
    props: {
        mainHeader: {
            type: Boolean
        },
        singleQuestionHeader: {
            type: Boolean
        }
    }
}
</script>
<style>
    
</style>