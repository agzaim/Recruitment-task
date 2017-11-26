import Vue from "vue";
import Vuex from "vuex";
import questionList from "../data/questions.json";


Vue.use(Vuex);


export const store = new Vuex.Store({
   state: {
       questions: questionList.questions,
//       search: "",
      
       showModal: false,
//       visibleQuestions: .questions,
       slicer: 3
   },
   getters: {
       visibleQuestions: state => {
           return state.questions;
       }
//       activitiesQuantity: function(quantity, description) {
//           if (quantity == 1) {
//               return description;
//           } else {
//               return description + "s";
//           }
//       }
   }
})