$(function(){
	//粒子背景动画
	$('.particleground').particleground({
		dotColor: '#d3efe1',
		lineColor: '#d3efe1'
	});
	//登录
	$('#submit').click(function(){
		var user = $('#user').val();
		var passWord = $('#passWord').val();
		if (user == '') {
			$('.userTip').removeClass('none');
			$('#user').css('border','1px solid red');
		}else{
			$('.userTip').addClass('none');
			$('#user').css('border','1px solid #ccc');
		}
		if (passWord == '') {
			$('.passWordTip').removeClass('none');
			$('#passWord').css('border','1px solid red');
		}else{
			$('.passWordTip').addClass('none');
			$('#passWord').css('border','1px solid #ccc');
		}
	});
});