

const loginContent=document.getElementById('listItem');
loginContent.addEventListener('click',(e)=>{
    target=e.target.value;
    console.log(target)
    displaylogin(target);
})
function displaylogin(t){
    if(t==01){
        name="Employee"
    }
    else if(t==00){
        name="Admin"
    }
    createloginDiv(name);
}
function createloginDiv(n){
    document.getElementById('heading').innerHTML=`${n.toUpperCase()}`;
    document.getElementById('loginForm').innerHTML=`<label>${n} User Id</label><br>
    <input type="text" placeholder="Enter ${n} Id">
    <br>  <label>${n} Password</label><br>
    <input type="password" placeholder="Enter ${n} Password">
    <button type="submit">Login</button>
`
}
createloginDiv(name);
