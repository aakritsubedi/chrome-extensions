chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
    //console.log(request,sender,sendResponse);
    console.log(request.title,request.url);
    if(request.title === 'Learning Chrome Extensions'){
        document.body.style['background-color']='rgb(118, 125, 146)';
        document.body.style['color']='ffffff';
    }
    let divs = document.querySelectorAll('.bg-light');
    for(let i=0;divs.length;i++){
        divs[i].classList.remove('bg-light');
        divs[i].classList.add('bg-dark');
        divs[i].style['color']='#f4f4f4';
    }
}