// JavaScript Document

function check_all(){
	
	var name = document.getElementById("user_name").value;
	if(name.length > 30){
		alert("Tên của bạn quá dài.\nVui lòng nhập dưới 30 ký tự.");
		return;
	}
	
	var gender_radio = document.getElementsByName("gender");
	var sex = "";
	for(var i = 0, length = gender_radio.length; i < length; i++){
		if(gender_radio[i].checked) sex = gender_radio[i].value;
	}
	if(!sex ){
		alert("Vui lòng chọn giới tinh.");
		return;
	}
	
	var pass = document.getElementById("password").value;
	var re_pass = document.getElementById("password-repeat").value;
	if(!pass || !re_pass){
		alert("Vui lòng điền đầy đủ 2 lần mật khẩu.");
		return;
	}else{
		if(pass.localeCompare(re_pass) != 0){
			alert("Mật khẩu không đồng nhất.\nVui lòng nhập lại mật khẩu.");
			return;
		}
	}
	
	var home = document.getElementById("user_home").value;
	if(home.length > 100 || home.length < 0){
		alert("Địa chỉ không hợp lệ.\nVui lòng nhập trên 0 và dưới 100 ký tự.");
		return;
	}
	
	var user_phone = document.getElementById("phone").value;
	if(user_phone.length > 11 || user_phone.length < 10){
		alert("Số điện thoại không hợp lệ.");
		return;
	}else{
		if(user_phone.indexOf(0) != 0){
			alert("Định dạng không hợp lệ");
			return;
		}else{
			if(user_phone.length == 10){
				if(user_phone.indexOf(9) != 1){
					alert("Định dạng với SĐT 10 số là: 09xx.\nVui lòng nhập lại.");
					return;
				}
			}
		}
	}
	
	var email = document.getElementById("email").value;
	var atPos = email.indexOf("@");
	var dotPos = email.lastIndexOf(".");
	
	if(atPos < 1 || dotPos < (atPos +2 ) || (dotPos +2 ) >= email.length){
		alert("Định dạng email không hợp lệ");
		return;
	}
		
	var date_onside = new Date(document.getElementById("date_onside").value);
	var day = date_onside.getDate();
	var month = date_onside.getMonth() + 1;
	var year = date_onside.getFullYear();
	var date = [day,month,year].join('/');
	if(!name || !sex || !date || !home || !user_phone ||!email ||!pass){
		alert("Vui lòng điền đầy đủ thông tin");
		return;
	}else{
		alert("Thông tin đăng ký:\nHọ tên:" +name+"\nGiới tính:"+sex+"\nDOB: "+date+"\nQuê quán: "+home+"\nSĐT: " +user_phone+"\nEmail: "+email+"\n Mật khẩu: "+pass);
		document.getElementById("myForm").submit();
	}
}