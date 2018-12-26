chrome.webNavigation.onHistoryStateUpdated.addListener(function(details){
    console.log("script tiriggered"); 
    chrome.tabs.executeScript(null, {file:"content.js"}, _=> chrome.runtime.lastError); 
});