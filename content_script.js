const contentElement = document.querySelector("#contents");
const notificationButton = document.querySelector(".yt-spec-icon-badge-shape__icon");
const sidePanel = document.querySelector("#guide-content");
const tagsElement = document.querySelector("#chips-wrapper");
const recommended_videosElement = document.querySelector("#columns #secondary");
const commentElement = document.querySelector('#columns #comments');
const descriptionElement = document.querySelector('#columns #description');

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

chrome.storage.local.get("recommended_videos", function(data) {
    if (data.recommended_videos === true) {
        if (recommended_videosElement) {
            recommended_videosElement.style.display = "none";
        }
    }
})

chrome.storage.local.get("comments", function(data) {
    if (data.comments === true) {
        if (commentElement) {
            commentElement.style.display = "none";
        }
    }
})

chrome.storage.local.get("description", function(data) {
    if (data.description === true) {
        if (descriptionElement) {
            descriptionElement.style.display = "none";
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
    }else if(request.message === "hide-recommended_videos"){
        recommended_videosElement.style.display = recommended_videosElement.style.display === "none" ? "block" : "none"
    }else if(request.message === "hide-comments"){
        commentElement.style.display = commentElement.style.display === "none" ? "block" : "none"
    }else if(request.message === "hide-description"){
        descriptionElement.style.display = descriptionElement.style.display === "none" ? "block" : "none"
    }
});
