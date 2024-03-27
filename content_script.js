const contentElement = document.querySelector("#contents");

chrome.storage.local.get("feed", function(data) {
    if (data.feed === true) {
        if (contentElement) {
            contentElement.style.display = "none";
        }
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "hide-feed") {
        contentElement.style.display = contentElement.style.display === "none" ? "block" : "none";
    }
});
