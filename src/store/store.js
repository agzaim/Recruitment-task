import Vue from "vue";
import Vuex from "vuex";
import questionList from "../data/questions.json";


Vue.use(Vuex);


export const store = new Vuex.Store({
   state: {
       questions: questionList.questions,
       visibleQuestions: [],
       chosenQuestion: {},
       showModal: false,
       slicer: 3,
       activeDateBtn: true,
       activeVoteBtn: false       
   },
   getters: {
//       visibleQuestions: state => {
//           return state.questions;
//       }
//       activitiesQuantity: function(quantity, description) {
//           if (quantity == 1) {
//               return description;
//           } else {
//               return description + "s";
//           }
//       }
   
//       partOfQuestions: state => {
//           return state.questions.slice(state.visibleQuestions.length, state.visibleQuestions.length + state.slicer);
//       }
//        
   },
    mutations: {
        loadingPartOfQuestions: state => {
            var partOfQuestions = state.questions.slice(state.visibleQuestions.length, state.visibleQuestions.length + state.slicer);

            state.visibleQuestions = state.visibleQuestions.concat(partOfQuestions);
//              this.sortByDate();
        },
        searchingQuestions: (state, payload) => {
            state.visibleQuestions = state.questions.filter((quest) => {
                return quest.question.toUpperCase().indexOf(payload.toUpperCase()) > -1;
            });
        },
        choosingQuestion: (state, payload) => {
            state.chosenQuestion = state.questions.filter((question) => {
                return question.questionID == payload;
            })[0];
        },
        sortingQuestions: (state, payload)  => {
            switch (payload) {
                case "byDate": 
                    state.activeDateBtn = true;
                    state.activeVoteBtn = false;
                    state.visibleQuestions = state.visibleQuestions.sort((a, b) => {
                    return b.publicationDate.localeCompare(a.publicationDate); 
                });
                    break;
                case "byVotes":
                    state.activeDateBtn = false;
                    state.activeVoteBtn = true;
                    state.visibleQuestions = state.visibleQuestions.sort((a, b) => {
                    return b.votes - a.votes;
                });
                    break;
                default:
                    state.visibleQuestions = state.visibleQuestions.sort((a, b) => {
                    return b.publicationDate.localeCompare(a.publicationDate); 
                    });
            }
        }
    }
    
})