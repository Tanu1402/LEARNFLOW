function validateRegisterForm(){
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmpassword=document.getElementById('confirmpassword').value;
    if(username===''|| email===''|| password===''|| confirmpassword===''){
        alert("All fields are required");
        return false;
    }
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        alert('please enter a valid mail.');
        return false;
    }
    if(password!==confirmpassword){
        alert('passwords do not match.');
        return false;
    }
    return true;
}