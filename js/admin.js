var listOfAdmins = {
    "user": "password",
    "noahc": "123login"
}

function tryLogin(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (password == listOfAdmins[username]){
        window.location.assign('createBlog.html');
    }else{
        alert("Login Failed");
    }

}