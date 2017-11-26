<template>
    <header>
        <div class="left-arrow">&lt;</div>
        <div class="container">
            <header-title></header-title>
            <radio-buttons></radio-buttons>
            <sorting-box></sorting-box>
            <div class="clearfix"></div>
            <input class="search-input" type="search" placeholder="Search questions" v-model="search">
            <input class="search-btn" type="submit" value="SEARCH" v-on:click="searchQuestions">
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>
</template>

<script>
    import headerTitle from "./subcomponents/header-title.vue";
    import radioButtons from "./subcomponents/radio-buttons.vue";
    import sortingBox from "./subcomponents/sorting-box.vue";
 
    export default {
        components: {
            "headerTitle": headerTitle,
            "radioButtons": radioButtons,
            "sortingBox": sortingBox
        }
    }
</script>
<style>
    
</style>