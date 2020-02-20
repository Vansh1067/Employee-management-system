var toggle=document.getElementById('toggle');
var sideMenu=document.querySelector('aside');
var sideMenuUl=document.querySelector('#sideMenu ul');
var parentDiv;
function flexmenu(){
    
    sideMenu.classList.toggle('hide');
   
    

}
toggle.addEventListener('click',flexmenu);
