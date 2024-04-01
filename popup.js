// import strt from './content_script';

const optionsSelectors = document.querySelectorAll(".options-selector");
optionsSelectors.forEach(el => {
    const button = el;
    const toggleDot = button.querySelector("span")
    if (button.name === "hide-feed") {
        chrome.storage.local.get("feed", function(data) {
            if (data.feed === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-notifications") {
        chrome.storage.local.get("notifications", function(data) {
            if (data.notifications === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-side-panel") {
        chrome.storage.local.get("sidePanel", function (data) {
            if (data.sidePanel === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-tags") {
        chrome.storage.local.get("tags", function (data) {
            if (data.tags === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-recommended_videos") {
        chrome.storage.local.get("recommended_videos", function (data) {
            if (data.recommended_videos === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-comments") {
        chrome.storage.local.get("comments", function (data) {
            if (data.comments === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    } else if (button.name === "hide-description") {
        chrome.storage.local.get("description", function (data) {
            if (data.description === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
                chrome.tabs.sendMessage(tabs[0].id, { message: "updateStorage", key: button.name, value: toggleDot.ariaHidden === "true" });
            }
        })
    }

    button.addEventListener("click", function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            button.classList.toggle("bg-secondary")
            toggleDot.classList.toggle("translate-x-5");
            toggleDot.ariaHidden = toggleDot.ariaHidden === "true" ? "false" : "true"
            if (button.name === "hide-notifications") {
                chrome.storage.local.set({ notifications: toggleDot.ariaHidden === "true" });
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            } else if (button.name === "hide-feed") {
                // strt()
                chrome.storage.local.set({ feed: toggleDot.ariaHidden === "true" });
                
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            } else if (button.name === "hide-side-panel") {
                chrome.storage.local.set({ sidePanel: toggleDot.ariaHidden === "true" });
                
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            } else if (button.name === "hide-tags") {
                chrome.storage.local.set({ tags: toggleDot.ariaHidden === "true" });
                
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            } else if (button.name === "hide-recommended_videos") {
                chrome.storage.local.set({ recommended_videos: toggleDot.ariaHidden === "true" });
                
                
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            } else if (button.name === "hide-comments") {
                
                // strt();
                chrome.storage.local.set({ comments: toggleDot.ariaHidden === "true" });
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });             
                
            } else if (button.name === "hide-description") {
                chrome.storage.local.set({ description: toggleDot.ariaHidden === "true" });
                
                chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
                chrome.tabs.sendMessage(tabs[0].id, { message: "runContentScript" });
            }
        })

    })
})

