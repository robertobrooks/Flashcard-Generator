//create BasicCard constructor function
function BasicCard (front, back) {
   this.front = front;
   this.back = back;

   this.studyCard = function() {
       console.log(`Question: ${this.front} - Response: ${this.back}`);
   }
}

module.exports = BasicCard;