<template>
    <div class="pagination-btn-container">
        <a class="pagination-btn" v-on:click="loadingMore">
            load more questions
        </a>
    </div>
</template>

<script>
    
    export default {
        methods: {
            loadingMore: function() {
                this.$store.commit("loadingPartOfQuestions");
            }
        }            
    }
</script>

<style lang="scss" scoped>
    

@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.pagination-btn-container {
    margin-top: 30px;
    padding-left: 20px;
    padding-bottom: 30px;
}


.pagination-btn {
    text-decoration: none;
    color: #e1173f;
    font-size: 18px;
    font-weight: 800;
    @include hoverEffect;
}

</style>
