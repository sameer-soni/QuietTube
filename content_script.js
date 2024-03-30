const contentElement = document.querySelector("#contents");
const notificationButton = document.querySelector(".yt-spec-icon-badge-shape__icon")

// div with #item id is child of #section div but not direct child
const subscriptionElement = document.querySelector("#sections #items")

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

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "hide-feed") {
        contentElement.style.display = contentElement.style.display === "none" ? "block" : "none";
    } else if (request.message === "hide-notifications") {
        console.log("hola hola")
        console.log(notificationButton)
        notificationButton.style.display = notificationButton.style.display === "none" ? "block" : "none";
    }else if(request.message === "hide-subscriptions"){
        subscriptionElement.style.display = subscriptionElement.style.display === "none" ? "block" : "none"
    }
});
