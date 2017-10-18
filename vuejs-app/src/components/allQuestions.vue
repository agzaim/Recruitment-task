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
                <a class="sorting-choice" v-on:click="sortByDate" v-bind:class="{active: activeDateBtn}">
                    recent
                </a> 
                or 
                <a class="sorting-choice" v-on:click="sortByVotes" v-bind:class="{active: activeVoteBtn}">
                    hot
                </a>
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
            <div class="question-box" v-for="question in visibleQuestions">
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
                            related 
                            {{ activitiesQuantity(question.relatedDiscussions, discussion) }}
                        </p> 
                        <p>
                            <span>
                                {{ question.peersInvolved }}
                            </span> 
                            {{ activitiesQuantity(question.peersInvolved, peer) }} 
                            involved
                        </p> 
                        <p>
                            <span>
                                {{ question.conversations }}
                            </span> 
                            {{ activitiesQuantity(question.conversations, conversation) }} 
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
                discussion: "discussion",
                peer: "peer",
                conversation: "conversation",
                activeDateBtn: true,
                activeVoteBtn: false,
                visibleQuestions: this.questions
            }
        },
        computed: {
//            filteredQuestions: function() {
//                return this.questions.sort((a, b) => {
//                    return parseFloat(a.publicationDate) - parseFloat(b.publicationDate);
//                });
//            }
//            visibleQuestions: function() {
//                return this.questions.filter((quest) => {
//                    return quest.question.match(this.search) != null; 
//                });                                
//            }
        },
        methods: {
            searchQuestions: function() {
//                console.log(this.questions[0]);
//                           this.visibleQuestions = this.questions[0];
//                           
                this.visibleQuestions = this.questions.filter((quest) => {
                    return quest.question.match(this.search) != null; 
                });                                
            },
            sortByDate: function() {
                this.activeDateBtn = true;
                this.activeVoteBtn = false;
                this.visibleQuestions = this.questions.sort((a, b) => {
                    return b.publicationDate.localeCompare(a.publicationDate); 
                });
            },
            sortByVotes: function() {
                this.activeDateBtn = false;
                this.activeVoteBtn = true;
                this.visibleQuestions = this.questions.sort((a, b) => {
                    return b.votes - a.votes;
                });
            },
            activitiesQuantity: function(quantity, description) {
                if (quantity == 1) {
                    return description;
                } else {
                    return description + "s";
                }
            } 
        }
    }

</script>

<style>
</style>
