console.log("Background Running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log('Button CLicked',tab);
    let msg = {
        subject: 'Hello'
    }
    console.log(tab.id,msg);
    chrome.tabs.sendMessage(tab.id,msg);
}