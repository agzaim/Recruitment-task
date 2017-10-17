<template>
<div>
    <header>
        <div class="left-arrow">&lt;</div>
        <div class="container">
            <div class="header-title-box">
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
                <a class="sorting-choice chosen-option">recent</a> 
                or 
                <a class="sorting-choice">hot</a>
            </p>
            <div class="clearfix"></div>
            <input class="search-input" type="search" placeholder="Search questions" v-model="search">
            <input class="search-btn" type="submit" value="SEARCH" v-on:click="searchQuestions">
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>

    <div class="page-container">
        <div class="container">
            <div class="question-box" v-for="question in filteredQuestions">
                <div class="question-box-header">
                    <img class="user-photo" alt="" v-bind:src="question.authorPhoto">        
                    <div class="question-box-header-content">
                        <p>
                            <span class="user-name"> 
                                {{ question.author }}
                            </span>
                            IS ASKING:
                        </p>
                        <router-link v-bind:to="'/question/' + question.idQ">
                            <h4>
                                {{ question.question }}
                            </h4>
                        </router-link>
                    </div>
                </div>
                <div class="question-box-content">
                    <div class="user-activities-container">
                        <div class="question-box-element">
                            <div class="user-activity-desription">
                                ASKED
                            </div>
                        </div>
                        <div class="question-box-element">
                            <span>
                                {{ question.moreActivities }}
                            </span>
                            <p> 
                                more <br> 
                                activities
                            </p>
                            <div class="question-box-element-dot"></div>
                        </div>
                        <div class="question-box-element" v-for="activity in question.activities">
                            <img class="user-photo" alt="" v-bind:src="activity.authorPhoto">
                            <div class="user-activity-desription">
                                {{ activity.type }}
                                <div class="question-box-element-dot"></div>
                            </div>
                        </div>                       
                    </div>

                    <div class="question-box-summary">
                        <p>
                            <span> 
                                {{ question.relatedDiscussions }}
                            </span> 
                            related {{ discussionsQuantity }}
                        </p> 
                        <p>
                            <span>
                                {{ question.peersInvolved }}
                            </span> 
                            peers involved
                        </p> 
                        <p>
                            <span>
                                {{ question.conversations }}
                            </span> 
                            conversations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
</template>

<script>
    export default {
        props: {
            questions: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                search: "",
                filteredQuestions: this.questions
            }
        },
        computed: {
            discussionsQuantity: function() {
                if (this.relatedDiscussions == 1) {
                    return "discussion";
                } else {
                    return "discussions";
                }
            } 
        },
        methods: {
            searchQuestions: function() {
                this.filteredQuestions = this.questions.filter((quest) => {
                     return quest.question.match(this.search) != null; 
                });                                
            }
        }
    }

</script>

<style>
</style>
