var toggle=document.getElementById('toggle');
var sideMenu=document.querySelector('aside');
var sideMenuUl=document.querySelector('#sideMenu ul');
var dropDown=document.querySelectorAll('.dropdown')
var parentDiv;
function flexmenu(){
    
    sideMenu.classList.toggle('hide');
    dropDown.forEach((e)=>{
        e.classList.toggle('hiden');
    });
   
    

}
toggle.addEventListener('click',flexmenu);
