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