var listItems=document.getElementById('listItem');
var toggle=document.getElementById('toggle');
var name;
const dropdownloginindex=document.getElementById('dropdown');

function flexmenu(){
    listItems.classList.toggle('hide')
}
toggle.addEventListener('click',flexmenu);
const login=document.getElementById('listitem');

dropdownloginindex.addEventListener('click',(e)=>{
    target=e.target.value;
    displaylogin(target);
})
function displaylogin(t){
  if(t==01){
      name="Employee"
  }
  else if(t==00){
      name="Admin"
  }

  window.location.href="login.html";
}
  

  



