chrome.browserAction.onClicked.addListener(extensionClicked);

function extensionClicked(tab){
    let msg = {
        url : tab.url,
        title : tab.title
    }
    chrome.tabs.sendMessage(tab.id,msg);
}