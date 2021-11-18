//Votre code ci dessous

let element = document.getElementById('cat-pic');


function miaou(){
    document.getElementById('cat-chat').innerHTML = '<span>Miaou</span>';

}

element.addEventListener('click', miaou)

miaou()








