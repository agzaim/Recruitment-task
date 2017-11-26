<template>
    <p class="header-sorting-box">
            Sort by:
            <a class="sorting-choice" v-on:click="sortByDate" v-bind:class="{active: activeDateBtn}">
                recent
            </a> 
            or 
            <a class="sorting-choice" v-on:click="sortByVotes" v-bind:class="{active: activeVoteBtn}">
                hot
            </a>
    </p>
</template>

<script>
export default {
 
}
</script>
<style>
    
</style>
