function dytt(){
	if(window.location.host==='www.ygdy8.net'){
		// var aa =document.getElementsByTagName("a")[0]
		// aa.parentNode.removeChild(aa);
		$("a")[0].remove();
		$("iframe").remove();
	}
}
function mp4ba(){
	if(window.location.host==='www.mp4ba.com'){
		$("#cs_left_couplet").remove();
		$("#cs_right_couplet").remove();
		$("#cs_right_bottom").remove();
		$("#cs_right_bottom").remove();
		$("iframe").remove();
	}
}
function loldytt(){
	if(window.location.host==='www.loldytt.com'){
		$("#cs_right_bottom").remove();
		$("#qj960a").remove();
		$("#xinnxi").remove();
		$("#xinxi").remove();
		$("iframe").remove();
		$("#xinxi").remove();
	}
}
function banyungong(){
	if(window.location.host==='www.loldytt.com'){
		$("iframe").remove();
	}
}
$(function(){
	// alert('123123');
	var func = Array('mp4ba()','loldytt()','dytt()','banyungong()');
	var aaa = Array('www.mp4ba.com','www.loldytt.com','www.ygdy8.net','banyungong.net');
	var numbers = $.inArray(window.location.host,aaa);
	if (numbers>=0){
		str = func[numbers];
		eval(str);
		// alert(str);
	}
})
