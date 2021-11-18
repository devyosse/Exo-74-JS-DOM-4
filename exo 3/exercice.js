let libButton = document.getElementById('lib-button');

let libIt = function() {
    let none = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let name= document.getElementById('person').value;
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = none + " " + adjective + " " + name;
};
libButton.addEventListener('click', libIt);

let input = document.getElementsByTagName('input');






