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
        });

        // var remove_icons = document.getElementsByClassName('_3j7l _2p78 _9-- _hly');
        let reacts = ['_3j7l', '_3j7m', '_3j7n', '_3j7o', '_3j7q'];
        var remove_icons = document.querySelectorAll('._3j7l, ._3j7m, ._3j7n, ._3j7o, ._3j7q');
        console.log(remove_icons);
        Array.prototype.forEach.call(remove_icons, function( node ) {
            for (let i = 0; i < reacts.length; i++) {
                node.classList.remove(reacts[i]);
            }
            node.classList.add('_3j7r');
        });
    }, 10); 
});