const login=document.getElementById('listitem');

dropdownloginindex.addEventListener('click',(e)=>{
    element=e.target;
    target=e.target.value;
    console.log(element)
    displaylogin(target);
})
function displaylogin(t){
  if(t==01){
      name="Employee";
      
  }
  else if(t==00){
      name="Admin"
    
  }

  window.location.href="login.html";
}