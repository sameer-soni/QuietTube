//
// const contentElement = document.querySelector("#contents");
//
// chrome.storage.local.get("isHidden", function(data) {
//     console.log(data.hasOwnProperty("isHidden"))
//     if(data.hasOwnProperty("isHidden")) {
//         isHidden = data.isHidden;
//         contentElement.style.display = "none";
//     } else {
//         isHidden = null;
//     }
// })
//
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//
//     if (request.message === "hide-feed") {
//         isHidden = !isHidden;
//         contentElement.style.display = contentElement.style.display === "none" ? "block" : "none";
//         chrome.storage.local.set({ isHidden: isHidden });
//     }
// });
