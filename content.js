console.log("Start"); 
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
    console.log("trying");
    var remove_reacts = document.querySelectorAll('*[aria-label="Love"], *[aria-label="Haha"], *[aria-label="Wow"], *[aria-label="Angry"], *[aria-label="Like"]'); 
    // var remove_reacts = document.querySelectorAll('.uiContextualLayerParent'); 
    console.log(remove_reacts); 
    console.log("Number of items to remove: " + remove_reacts.length); 
    Array.prototype.forEach.call(remove_reacts, function( node ) {
        node.parentNode.removeChild(node);
    });}
    , 33); 
});