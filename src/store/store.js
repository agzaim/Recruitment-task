import Vue from "vue";
import Vuex from "vuex";
import questionList from "../data/questions.json";


Vue.use(Vuex);


export const store = new Vuex.Store({
   state: {
       questions: questionList.questions,
//       search: "",
       visibleQuestions: [],
       showModal: false,
        slicer: 3
//       visibleQuestions: .questions,
       
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
   
       partOfQuestions: state => {
           return state.questions.slice(state.visibleQuestions.length, state.visibleQuestions.length + state.slicer);
       }
        
   },
    mutations: {
        loadingPartOfQuestions: state => {
            var partOfQuestions = state.questions.slice(state.visibleQuestions.length, state.visibleQuestions.length + state.slicer);

//            return state.visibleQuestions.concat(partOfQuestions);
            state.visibleQuestions = state.visibleQuestions.concat(partOfQuestions);
//              this.sortByDate();
        }
    }
})