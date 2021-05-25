document.getElementById('email').addEventListener('keyup',function(){
    var Email=document.getElementById('email').value
var exp=/^([a-zA-Z0-9])([A-Za-z0-9.-_]{3,})@([a-z]{3,5}).([a-z]{3,5})$/
if(exp.test(Email)){
    document.getElementById('pemail').innerHTML="Valid e-mail ID"
    document.getElementById('pemail').style.color="green"
}
else{
    document.getElementById('pemail').innerHTML="Invalid e-mail ID"
    document.getElementById('pemail').style.color="red"
}
})