<template>
<!--  <div>-->
    <header>
            <div class="container">
                <!--                <div class="inner_header-container">-->
                <div class="header-title-box">
                                <div class="left-arrow">&lt;</div>

                    <h3>QUESTIONS</h3> 
                    <div class="plus-mark">+</div>
                </div>
                <div class="header-view-buttons">
                    <input type="radio" name="viewType" value="myShelf" checked> 
                    <label>My shelf</label>
                    <input type="radio" name="viewType" value="allQuestions"> 
                    <label>All questions</label>
                </div>
                <p class="header-sorting-box">
                    Sort by:
                    <a class="sorting-choice">recent</a> 
                    or 
                    <a class="sorting-choice">hot</a>
                </p>
                <div class="clearfix"></div>
                <!--                </div>-->

                <input class="search-input" type="search" placeholder="Search questions">
                <input class="search-btn" type="button" value="SEARCH">
            </div>
        </header>
<!--  </div>-->
</template>

<script>
export default {
//  name: 'app',
  data () {
    return {
    }
  }
}

</script>

<style>
</style>
