<template>
    <div class="pagination-btn-container" v-if="moreToLoad">
        <a class="pagination-btn" v-on:click="loadingMore">
            load more questions
        </a>
    </div>
</template>

<script>
    
    export default {
        
    }
</script>
<style>
    
</style>
