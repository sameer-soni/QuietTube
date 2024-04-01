chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.includes("youtube.com") && changeInfo.status === "complete") {
        chrome.tabs.sendMessage(tabId, { message: "runContentScript" });
    }
});