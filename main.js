//Part 1
//update
function update(){
    var elm = document.getElementById('content');
    elm.classList.add('blue');
}
document.getElementById('btnAddBlue').addEventListener('click', update);

//remove
function remove(){
    var elm = document.getElementById('content');
    elm.classList.remove('blue');
}
document.getElementById('btnRemoveBlue').addEventListener('click', remove);

//toggle
function toggle(){
  document.getElementById("content").classList.toggle('blue');  
}
document.getElementById('btnToggleBlue').addEventListener('click', toggle);



//Part 2
//Add Theme
function addTheme(){
    var elm = document.getElementById('content');
    elm.classList.add('theme');
}
document.getElementById('btnAddTheme').addEventListener('click', addTheme);

//Remove Theme
function removeTheme(){
    var elm = document.getElementById('content');
    elm.classList.remove('theme');
}
document.getElementById('btnRemoveTheme').addEventListener('click', removeTheme);

//Toggle Theme
function toggleTheme(){
    var elm = document.getElementById('content');
    elm.classList.toggle('theme');
}
document.getElementById('btnToggleTheme').addEventListener('click', toggleTheme);

