
function tema(){
    var dark = document.getElementById('dark')
    var white = document.getElementById('white')
    
    if (dark = 'checked'){
        document.querySelector("link[rel='shortcut icon']").href = "https://emojis.wiki/emoji-pics/microsoft/new-moon-microsoft.png";
        
        
        
    }
    else if (white = 'checked'){
        document.body.style.backgroundColor = 'white';
        document.querySelector("link[rel='shortcut icon']").href = "https://static.vecteezy.com/ti/vetor-gratis/p1/627460-sol-simbolo-sinal-simbolo-gr%C3%A1tis-vetor.jpg";
    }

    
}

