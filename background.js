chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({'on': 'true'});
});