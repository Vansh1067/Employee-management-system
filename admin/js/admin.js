var toggle=document.getElementById('toggle');
var sideMenu=document.querySelector('aside');
var sideMenuUl=document.querySelector('#sideMenu ul');
function flexmenu(){
    
    sideMenu.classList.toggle('hide');
   
    

}
toggle.addEventListener('click',flexmenu);
