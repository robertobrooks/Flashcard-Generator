//create BasicCard constructor function
function ClozeCard (text, cloze) {
   this.cloze = cloze;
   this.partial = text.replace(cloze, "...");
   this.fullText = text;

   this.clozeFc = function() {
       console.log(`Cloze: ${this.cloze} - Partial: ${this.partial} - fullText: ${this.fullText}`);
   }
}

module.exports = ClozeCard;