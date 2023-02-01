function test(){
    var uid = document.getElementById("username").value;
    alert(uid)
var pw = document.getElementById("pass")

var user  = localStorage.setItem("uid",uid)

var pass = localStorage.setItem("pw",pw) 
}
