$(function(){

	$('.rightBody').load('./pages/user.html');
	$('.leftBody li').click(function(event){
	  var text = $(event.target).text();
		switch(text){
			case '首页':
			$('.rightBody').load('./pages/home.html');
			break;
			case '栏目管理':
			$('.rightBody').load('./pages/category.html');
			break;
			case '资讯管理':
			$('.rightBody').load('./pages/info.html');
			break;
			case '用户管理':
			$('.rightBody').load('./pages/user.html');
			break;		
			default:
				break;
		}
	  
	});
});