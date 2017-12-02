
export default {
     methods: { 
         activitiesQuantity: function(quantity, description) {
            if (quantity == 1) {
                return description;
            } else {
                return description + "s";
            }
         }
//         modalTrigger: function(authorID) {
//                this.showModal = true;
//                this.authorID = authorID;
//        }
     }
}