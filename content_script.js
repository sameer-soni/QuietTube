const contentElement = document.querySelector("#contents");
const notificationButton = document.querySelector(".yt-spec-icon-badge-shape__icon");

// hide subscitpion
const subscriptionElement = document.querySelectorAll("#sections #items")[1];
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

chrome.storage.local.get("subscriptions", function(data) {
    if (data.subscriptions === true) {
        if (subscriptionElement) {
            subscriptionElement.style.display = "none";
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
        console.log("hola hola")
        console.log(notificationButton)
        notificationButton.style.display = notificationButton.style.display === "none" ? "block" : "none";
    }else if(request.message === "hide-subscriptions"){
        subscriptionElement.style.display = subscriptionElement.style.display === "none" ? "block" : "none"
    }else if(request.message === "hide-tags"){
        tagsElement.style.display = tagsElement.style.display === "none" ? "block" : "none"
    }
});
