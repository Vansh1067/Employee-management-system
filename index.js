var listItems=document.getElementById('listItem');
var toggle=document.getElementById('toggle');
function flexmenu(){
    listItems.classList.toggle('hide')
}
toggle.addEventListener('click',flexmenu);