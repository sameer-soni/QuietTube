const contentElement = document.querySelector("#contents");
const notificationButton = document.querySelector(".yt-spec-icon-badge-shape__icon");

// hide subscription
const sidePanel = document.querySelector("#guide-content");
// hide tags
const tagsElement = document.querySelector("#chips-wrapper");

chrome.storage.local.get("feed", function(data) {
    if (data.feed === true) {
        if (contentElement) {
            contentElement.style.display = "none";
        }
    }
})

chrome.storage.local.get("notifications", function(data) {
    if (data.notifications === true) {
        if (contentElement) {
            notificationButton.style.display = "none";
        }
    }
})

chrome.storage.local.get("sidePanel", function(data) {
    if (data.sidePanel === true) {
        if (sidePanel) {
            sidePanel.style.display = "none";
        }
    }
})

chrome.storage.local.get("tags", function(data) {
    if (data.tags === true) {
        if (tagsElement) {
            tagsElement.style.display = "none";
        }
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "hide-feed") {
        contentElement.style.display = contentElement.style.display === "none" ? "block" : "none";
    } else if (request.message === "hide-notifications") {
        notificationButton.style.display = notificationButton.style.display === "none" ? "block" : "none";
    }else if(request.message === "hide-side-panel"){
        sidePanel.style.display = sidePanel.style.display === "none" ? "block" : "none"
    }else if(request.message === "hide-tags"){
        tagsElement.style.display = tagsElement.style.display === "none" ? "block" : "none"
    }
});
