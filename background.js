chrome.runtime.onInstalled.addListener(() => {
    console.log("set to on "); 
    chrome.storage.local.set({'on': 'true'});
});


chrome.browserAction.onClicked.addListener((tab) => {
    console.log("icon clicked"); 
     chrome.storage.local.get('on', (data) => {
        console.log("Current status: " + data.on); 
        if (data.on === 'false') {
            //send message
            chrome.browserAction.setIcon({path: "/sad-icons/sad-128.png"});
            chrome.storage.local.set({'on': 'true'});
        } else {
            chrome.browserAction.setIcon({path: "/sad-icons/sad-128-grey.png"});
            chrome.storage.local.set({'on': 'false'});
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {'task':'toggle'}, function(response) {
            });
        });
    });
}); 