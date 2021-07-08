// JavaScript Document
function check_user(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if(!user || !pass){
		alert("Vui lòng điền đầy đủ thông tin.")
	}else{
		alert("Đăng nhập thành công !"+"\nTài Khoản: "+user+"\nMật khẩu: "+pass);
	}	
}