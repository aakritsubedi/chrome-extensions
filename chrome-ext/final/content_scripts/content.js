
console.log('Content.js');
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
    //console.log(request.subject);
    if(request.subject === 'Hello'){
        console.log("Hello from my final chrome extensions.");
    }
}