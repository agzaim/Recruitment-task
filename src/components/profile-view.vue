<template>
  <transition name="modal">
    <div class="modal-background"  
         v-on:click.self="close">
        <div class="modal">
            <div class="close-mark" v-on:click="close">
                &times;
            </div>
            <div class="clearfix"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <img class="user-profile-photo" 
                         alt="" 
                         v-bind:src="user.authorPhoto">
                    <div class="user-profile-name">
                            {{ user.author }}
                    </div>
                    <div class="user-data-box">
                        <user-data v-bind:dataValue="user.membershipPeriod">
                            MEMBER FOR 
                        </user-data>
                        <user-data v-bind:dataValue="user.lastVisit">
                            LAST SEEN 
                        </user-data>
                        <user-data v-bind:activityLevel="user.activityLevel">
                            ACTIVITY LEVEL 
                        </user-data>
                    </div>
                </div>  
                <div class="modal-navigation-container">
                    <modal-arrow class="arr-left"
                                 v-bind:direction="left">
                        &lt;
                    </modal-arrow>
                    <h2 class="modal-title">
                        How it all started
                    </h2>
                    <modal-arrow class="arr-right"
                                 v-bind:direction="right">
                        &gt;
                    </modal-arrow>
                </div>
                <modal-subtitle v-bind:membershipPeriod="user.membershipPeriod">
                    That's where we have been these 
                </modal-subtitle>
                   
                <div class="statistics-squares-container">
                    <stat-square v-bind:quantity="user.peersNumber"
                                 v-bind:description="peer">
                    </stat-square>
                    <stat-square v-bind:quantity="user.discussionNumber"
                                 v-bind:description="discussion">
                    </stat-square>
                    <stat-square v-bind:quantity="user.findingsNumber"
                                 v-bind:description="finding">
                    </stat-square>
                    <stat-square v-bind:quantity="user.questionNumber"
                                 v-bind:description="question">
                    </stat-square>
                    
                </div>
                
                <modal-subtitle>
                    Who joined the platform that same period
                </modal-subtitle>
                
                <div class="modal-user-container">
                    <modal-user-box v-for="peer in user.otherPeers" 
                                    v-bind:key="peer.authorID" 
                                    v-bind:peer="peer">
                    </modal-user-box>                     
                </div>
                
                <modal-subtitle>
                        The hottest discussion these days
                </modal-subtitle>
            </div>
            <div class="modal-footer">
                <user-photo v-bind:input="users[2]"
                            class="footer-user-photo">
                </user-photo>
                <p class="footer-subtitle modal-subtitle">
                    <user-name v-bind:input="users[2]"
                               class="footer-user-name">
                    </user-name> 
                    found the guardian article
                </p>
                <h4 class="footer-article">
                    Vegan diet to stop diabetes progress
                </h4>
                <div class="footer-statistics-container">                    
                            <activities-summary 
                                    v-bind:quantity="quantity + 6"
                                    v-bind:description="peer">
                            </activities-summary>
                            <activities-summary 
                                    v-bind:quantity="quantity + 3"
                                    v-bind:description="discussion">
                            </activities-summary>
                            <activities-summary 
                                    v-bind:quantity="quantity + 3"
                                    v-bind:description="conversation">
                            </activities-summary>
                            <activities-summary 
                                    v-bind:quantity="quantity + 19"
                                    v-bind:description="upvote">
                            </activities-summary>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
    
    import methodMixins from "../mixins/methodMixins";
    import userData from "./subcomponents/user-data.vue";
    import modalSubtitle from "./subcomponents/modal-subtitle.vue";
    import modalArrow from "./subcomponents/modal-arrow.vue";
    import statSquare from "./subcomponents/stat-square.vue";
    import modalUserBox from "./subcomponents/modal-user-box.vue";
    import userPhoto from "./subcomponents/user-photo.vue";
    import userName from "./subcomponents/user-name.vue";
    import activitiesSummary from "./subcomponents/activities-summary.vue";


    export default {
        data () {
            return {
                right: 1,
                left: -1,
                discussion: "discussion",
                peer: "peer",
                finding: "finding",
                question: "question",
                conversation: "conversation",
                upvote: "upvote",
                quantity: 0
            }
        },
        
        methods: {
            close() {
                return this.$store.commit("closingModal");
            }
        },

        computed: {
            user() {
                return this.$store.state.chosenUser;
            },
            users() {
                return this.$store.state.users;
            }         
        },  
        
        components: {
            "userData": userData,
            "modalSubtitle": modalSubtitle,
            "modalArrow": modalArrow,
            "statSquare": statSquare,
            "modalUserBox": modalUserBox,
            "userPhoto": userPhoto,
            "userName": userName,
            "activitiesSummary": activitiesSummary
        },
            
        
        //following 2 functions hiding and showing the main page scroll when modal is visible
        created() {
            window.document.body.classList.add("hideScroll");
        },
        
        beforeDestroy() {
            window.document.body.classList.remove("hideScroll");
        },
        
        mixins: [methodMixins]
    }

</script>

<style lang="scss">
    
/*@import "../../scss/fonts.scss";
@import "../../scss/mixins.scss";
@import "../../scss/variables.scss";*/
   
/*@import "../assets/styles/scss/fonts.scss";*/
@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.modal-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%; 
    height: 100%;
    background-color: rgb(0, 0, 0); 
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 20px;
      @include mobiles {
        padding: 0;
    }
}


.modal {
    background-color: #fff;
    margin: 0 auto;
    width: 880px;
    padding-bottom: 25px;
    margin-bottom: 50px;
    @include tablets {
        width: 100%;
        padding-bottom: 0;
        margin-bottom: 0;
    }
}
 
    
.modal-container {
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
     @include tablets {
        width: 90%;
    }
}
    

.close-mark {
    color: $color-grey-blue;
    float: right;
    font-size: 24px;
    padding-right: 15px;
    padding-top: 8px;
}


.close-mark:hover,
.close-mark:focus {
    color: #000;
    cursor: pointer;
}
    
    
.modal-header {
    border-bottom: 1px solid $color-grey-light;
    padding: 15px 0;
    padding-bottom: 25px;
    @include mobiles {
        padding-top: 0;
    }
}


.user-profile-photo {
    height: 85px;
    width: 85px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
}


.user-profile-name {
    padding: 14px 0;
    color: $color-blue-dark;
    text-align: center;
    font-family: $sans-serif-medium-font;
    font-size: 20px;
}


.user-data-box {
    display: flex;
    justify-content: space-between;
    @include mobiles {
        display: block;
    }
}

    
.modal-navigation-container {
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    
    
.modal-title {
    font-family: $main-serif-font;
    font-size: 42px;
    font-weight: 500;
    color: $color-almost-black;
    letter-spacing: 1.5px;
}
  
    
.statistics-squares-container {
    width: 72%;
    margin: 42px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @include mobiles {
        width: 220px;
    }
}
    
    
.modal-user-container {
    width: 48%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 20px;
    @include mobiles {
        width: 80%;
    }
}
    

.modal-footer {
    width: 100%;
    background-image: url(../../items/skelatal_weave.png);
    margin-top: 40px;
    position: relative;
    padding-top: 3px;
    padding-bottom: 25px;
    @include mobiles {
        padding-bottom: 55px;
    }
}
   
    
.footer-article {
    font-family: $main-serif-font;
    font-weight: 800;
    color: $color-blue-dark;
    font-size: 20px;
    letter-spacing: 1.5px;
    text-align: center;
    margin-bottom: 25px;
}
    
.modal-footer {   
    .footer-subtitle {
        font-size: 11px;
        margin-bottom: 2px;
    }
}
    
    
.footer-statistics-container {
    display: flex;
    justify-content: space-around;
    width: 67%;
    margin: 0 auto;
    flex-wrap: wrap;
    .activity-description {
        &:nth-child(3) {
            @include mobiles {
                order: 3;
            }
        }
        span {
            font-weight: bold;
            padding-right: 6px;
        }
    }
    @include tabletsOnly {
        width: 80%;
    }
    @include mobiles {
        height: 55px;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: flex-start;
        align-content: space-between;
    }
}

</style>
