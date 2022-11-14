
function white(){
    var white = document.getElementsByName('white')
    var menu = document.getElementById('tema')
    var titulo = document.getElementById('principal')
    var paragrafo = document.getElementById('txt')
    document.querySelector("link[rel='shortcut icon']").href = "https://i.pinimg.com/originals/02/ed/f4/02edf4e428d6fedc372e8d4fc7b25d6e.png";
    document.body.style.backgroundColor = 'aliceblue'
    document.querySelector("title").innerHTML = "White";
    titulo.style.color = 'black'
    paragrafo.style.color= 'black'
    menu.style.display = 'none'
}

function dark(){
    var dark = document.getElementsByName('dark')
    var menu = document.getElementById('tema')
    var titulo = document.getElementById('principal')
    var paragrafo = document.getElementById('txt')
    document.querySelector("link[rel='shortcut icon']").href = "https://emojis.wiki/emoji-pics/microsoft/new-moon-microsoft.png";
    document.body.style.backgroundColor = '#363636'
    document.querySelector("title").innerHTML = "Black";
    titulo.style.color = 'white'
    paragrafo.style.color= 'white'
    menu.style.display = 'none'
}
function menu(){
    var menu = document.getElementById('tema')
    

    if ( menu.style.display == 'inline-block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'inline-block'
    }
    
}
function main(){
    var menu = document.getElementById('tema')
    menu.style.display = 'none'
    
}

