
export default {
     methods: {
         
         // I assumed that word "discussion" occuring in every question regardless of what is idicated by the number (on the sent view) was just a little bug :) 
         activitiesQuantity: function(quantity, description) {
            if (quantity == 1) {
                return description;
            } else {
                return description + "s";
            }
        },
         modalTrigger: function(authorID) {
                this.showModal = true;
                this.authorID = authorID;
        }
     }
}