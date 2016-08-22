function biquge(){
	if(window.location.host==='www.biquge.la'){
		$("iframe").remove();
	}
}
function dytt(){
	
		// var aa =document.getElementsByTagName("a")[0]
		// aa.parentNode.removeChild(aa);
		$("a")[0].remove();
		$("div iframe").remove();
}
function mp4ba(){
	if(window.location.host==='www.mp4ba.com'){
		$("#cs_left_couplet").remove();
		$("#cs_right_couplet").remove();
		$("div iframe").remove();
	}
}
function loldytt(){
	if(window.location.host==='www.loldytt.com'){
		alert('123');
		$("#qj960a").remove();
		$("#xinnxi").remove();
		$("#xinxi").remove();
		$("#cs_right_bottom").remove();
		$("div iframe").remove();
		$("#xinxi").remove();
		$("script:last").remove();
		alert('123');
		
	}
}
function banyungong(){
	if(window.location.host==='banyungong.net'){
		$("iframe").remove();
		$("#ggDiv2").remove();
		// $("aswift_0_expand").remove();
	}
}
function doing(){
	var func = Array('mp4ba()','loldytt()','dytt()','dytt()','banyungong()','biquge()');
	var aaa = Array('www.mp4ba.com','www.loldytt.com','www.ygdy8.net','www.dytt8.net','banyungong.net','www.biquge.la');
	var numbers = $.inArray(window.location.host,aaa);
		// alert();
	if (numbers>=0){
		str = func[numbers];
		// alert(str);
		eval(str);
			// alert(str);
	}
	console.log('clear');
}
$(function(){
	$(document).ready(function() {
		//为防止ajax异步延时加载的广告隔4s再清除一次
		setTimeout(function() {
			doing();
		}, 4000)
	});
})
