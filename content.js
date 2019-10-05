function sad_reacts_only() {
    setInterval(() => {
        var remove_reacts = document.querySelectorAll('*[aria-label="Love"], *[aria-label="Haha"], *[aria-label="Wow"], *[aria-label="Angry"], *[aria-label="Like"]'); 
        Array.prototype.forEach.call(remove_reacts, function( node ) {
            node.parentNode.removeChild(node);
        });

        let reacts = ['sx_25391b', 'sx_e2d83e', 'sx_65b9e6', 'sx_fa72ce', 'sx_2d729c'];
        var remove_icons = document.querySelectorAll('.sx_25391b, .sx_e2d83e, .sx_65b9e6, .sx_fa72ce, .sx_2d729c');
        Array.prototype.forEach.call(remove_icons, function( node ) {
            for (let i = 0; i < reacts.length; i++) {
                node.classList.remove(reacts[i]);
            }
            node.classList.add('sx_93d34c');
        });

        let reacts_comments = ['_3j7l', '_3j7m', '_3j7n', '_3j7o', '_3j7q'];
        var remove_icons_comments = document.querySelectorAll('._3j7l, ._3j7m, ._3j7n, ._3j7o, ._3j7q');
        Array.prototype.forEach.call(remove_icons_comments, function( node ) {
            for (let i = 0; i < reacts_comments.length; i++) {
                node.classList.remove(reacts[i]);
            }
            node.classList.add('_3j7r');
        });


        var like_buttons = document.querySelectorAll('i.sp_da4kKK250Ge_2x'); 
        Array.prototype.forEach.call(like_buttons, function( node ) {
            node.classList.remove("sx_4435ad"); 
            node.classList.remove("sp_da4kKK250Ge_2x"); 
            node.classList.add("sad-icon-solo"); 
        });

        var like_texts = document.querySelectorAll('a[data-testid="UFI2ReactionLink"]'); 
        Array.prototype.forEach.call(like_texts, function( node ) {
            node.lastChild.nodeValue = "Sad"; 
        });

        var like_buttons_alt = document.querySelectorAll('.UFILikeLink'); 
        Array.prototype.forEach.call(like_buttons_alt, function( node ) {
            node.classList.add("sad-icon"); 
            if (node.classList.contains('UFILinkBright')) {
                node.style.color = "rgb(240, 186, 21)";
                node.classList.remove('UFILinkBright');
            }
        });

        var like_texts_alt = document.querySelectorAll('a[data-testid="fb-ufi-likelink"], .UFILikeLink.UFIReactionLink'); 
        Array.prototype.forEach.call(like_texts_alt, function( node ) {
            node.lastChild.nodeValue = "Sad"; 
        });

        var emojis = document.querySelectorAll('span._6qdm, ._47e3._5mfr'); 
        Array.prototype.forEach.call(emojis, function( node ) {
            node.innerHTML = ""; 
            if(!node.classList.contains('_6qdm')){
                node.classList.add('_6qdm'); 
                node.style.height = "16px"; 
                node.style.width = "16px"; 
                node.style.fontSize = "16px"; 
            }
            node.style.backgroundImage = `url("https://static.xx.fbcdn.net/images/emoji.php/v9/tad/2/16/1f622.png")`; 
        });
    }, 10); 
}

document.addEventListener('DOMContentLoaded', () => {
        let sad_reacts_run = false;
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                console.log("received toggle message"); 
                chrome.storage.local.get('on', (response) => {
                    if (request.task == 'toggle') {
                        if (response.on === 'false') {
                            sad_reacts_only();
                            sad_reacts_run = true;
                        } 
                    }
                });
        });
        chrome.storage.local.get('on', (response) => {
            console.log("status: " + response.on); 
            if (response.on === 'true') {
                if (!sad_reacts_run) sad_reacts_only();
                sad_reacts_run = true;
            } 
        });
});