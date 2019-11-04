(function(){
    console.log("Hello from my first chrome extensions.");
    let p = document.getElementsByTagName('p');
    for(let i=0;i<p.length;i++){
        p[i].style.backgroundColor='#f4f4f4';
    }
    let imgs = document.getElementsByTagName('img');
    for(let i=0;i<imgs.length;i++){
        imgs[i].setAttribute('src','http://aakritsubedi.com.np/images/profile_new.jpg');
    }
})();