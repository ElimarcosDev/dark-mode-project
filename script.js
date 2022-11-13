
function white(){
    
    var white = document.getElementsByName('white')
    document.querySelector("link[rel='shortcut icon']").href = "https://static.vecteezy.com/ti/vetor-gratis/p1/627460-sol-simbolo-sinal-simbolo-gr%C3%A1tis-vetor.jpg";
    document.body.style.backgroundColor = 'aliceblue'
    document.querySelector("title").innerHTML = "White";
    
}

function dark(){
    var dark = document.getElementsByName('dark')
    document.querySelector("link[rel='shortcut icon']").href = "https://emojis.wiki/emoji-pics/microsoft/new-moon-microsoft.png";
    document.body.style.backgroundColor = '#363636'
    document.querySelector("title").innerHTML = "Black";
}
function menu(){
    var menu = document.getElementById('tema')
    menu.style.display = 'block'

    if ( menu.style.display = 'block'){
        menu.style.display = 'block'
    }
    else{
        menu.style.display = 'none'
    }
}

