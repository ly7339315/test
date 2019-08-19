$(function(){
	$a = $('.aaa');
	$b = $('.bbb');
	$c = $('.ccc');
	$a.css({
		backgroundColor:'red',
		width:'200px',
		height:'200px',
		float:'left'

		
	});
	$b.css({
		backgroundColor:'pink',
		width:'100px',
		height:'100px',
		margin: '50px',
		float:'left'
	});
	$c.css({
		backgroundColor:'blue',
		width:'50px',
		height:'50px',
		margin: '25px',
		float:'left'

		
	});

	
	$a.click(function(){
		alert('aaa');
	});
	$b.click(function(){
		alert('bbb');
	});
	$c.click(function(){
		alert('ccc');
	});
});