document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        var remove_reacts = document.querySelectorAll('*[aria-label="Love"], *[aria-label="Haha"], *[aria-label="Wow"], *[aria-label="Angry"], *[aria-label="Like"]'); 
        // var remove_reacts = document.querySelectorAll('.uiContextualLayerParent'); 
        Array.prototype.forEach.call(remove_reacts, function( node ) {
            node.parentNode.removeChild(node);
        });

        // var remove_icons = document.getElementsByClassName('_3j7l _2p78 _9-- _hly');
        let reacts = ['_3j7l', '_3j7m', '_3j7n', '_3j7o', '_3j7q'];
        var remove_icons = document.querySelectorAll('._3j7l, ._3j7m, ._3j7n, ._3j7o, ._3j7q');
        Array.prototype.forEach.call(remove_icons, function( node ) {
            for (let i = 0; i < reacts.length; i++) {
                node.classList.remove(reacts[i]);
            }
            node.classList.add('_3j7r');
        });

        var like_buttons = document.querySelectorAll('i.sp_Gxq2MXbT8dg_2x'); 
        Array.prototype.forEach.call(like_buttons, function( node ) {
            node.classList.remove("sx_43c42c"); 
            node.classList.remove("sp_Gxq2MXbT8dg_2x"); 
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

        // var like_texts_alt = document.querySelectorAll('a[data-testid="fb-ufi-likelink"], a[data-testid="ufi_comment_like_link"]'); 
        var like_texts_alt = document.querySelectorAll('a[data-testid="fb-ufi-likelink"], .UFILikeLink.UFIReactionLink'); 
        Array.prototype.forEach.call(like_texts_alt, function( node ) {
            node.lastChild.nodeValue = "Sad"; 
        });

        var emojis = document.querySelectorAll('span._6qdm, ._47e3._5mfr'); 
        console.log("Emoji number: " + emojis.length); 
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
});







/*
.sp_Gxq2MXbT8dg_2x.sx_43c42c
    width: 18px;
    height: 18px;
    background-position: -38px -1187px;


    .sp_Gxq2MXbT8dg_2x
    background-image: url(/rsrc.php/v3/ym/r/Z2RVuHqAilK.png);
    background-size: 97px 2042px;
    background-repeat: no-repeat;
    display: inline-block;
    height: 16px;
    width: 16px;

    data-testid="UFI2ReactionLink"  -> innerhtml Sad

    */