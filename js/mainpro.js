	function MainLeftPage(){
		this.classNames=arguments[0];
		this.ziduan = arguments[1];
		this.zhi = arguments[2];
		this.setValue = function(){
			return '<p>'+this.ziduan+'</p><span></span><p>'+this.zhi+'</p>';
		};
		this.setHtmlDemo=function(msgvalue){
			return '<div class="'+this.classNames+'">'+msgvalue+'</div>';
		}
	}
	function addMainLeftPage(MainLeftObject){
		var ccc = MainLeftObject;
		return ccc.setHtmlDemo(ccc.setValue());
	}

	function mainFigurePage(){
		
		this.tipstitles =arguments[0];
		var arraylist=['类型：','情况：','提示：']
		
		console.log(this.tipstitles);
		this.msgHtmlValue=function(argu,values){
			return '<div class="main-left-content"><p>'+argu+'</p><span></span><p title=\''+values+'\'>'+values+'</p></div>';
		};
		this.getHtml=function(){
			var msgvalues = '';
			for (i in this.tipstitles){
				var msgvalues=msgvalues+this.msgHtmlValue(arraylist[i],this.tipstitles[i]);
			}
			return msgvalues;
		}
		this.setFigureHtmlDemo=function(htmlValue){
			// this.tipstitles=null;
			var arraylist=null;
			return '<div class="main-figure-page">'+htmlValue+'</div>';

		}

	}
	function addFigurePage(figurePage){
		var mssss = figurePage;
		return mssss.setFigureHtmlDemo(mssss.getHtml());
	}
	function MainRightPage(arrays){

		this.setMainHtml=function(){
			return '<h3>日期：'+arrays[0]+'</h3><h4>'+arrays[1]+'</h4><h4>'+arrays[2]+'</h4><h4>'+arrays[3]+'</h4><span></span><img src="'+arrays[4]+'" alt=""><span></span><img src="'+arrays[5]+'" alt="">';
		}
	}
	function MakeRightHtml(valueObject){
		if(valueObject.setMainHtml()=='undefined'){
			return;
		}
		return '<div class="main-weather-page-3">'+valueObject.setMainHtml()+'</div>';
	}

	$(function(){
		$.ajax({
			           type:"GET",
			           url:'http://api.jirengu.com/weather.php',
			           dataType:"json",
			           async:false,
			           success:function(data){
			           	$("#main-page").append(addMainLeftPage(new MainLeftPage("main-left-page",'日期：',data.date)));
			           	$("#main-page").append(addMainLeftPage(new MainLeftPage("main-left-page",'城市：',data.results[0].currentCity)));
			           	$("#main-page").append(addMainLeftPage(new MainLeftPage("main-left-page",'PM2.5:',data.results[0].pm25)));
			           	// alert(data.results[0].index.length);

			           	(function(){
			           		// for 
			           		for (i in data.results[0].index){
			           			$("#main-figure").append(addFigurePage(new mainFigurePage(new Array(data.results[0].index[i].title,data.results[0].index[i].zs,data.results[0].index[i].des))));
			           		}
			           		// i = null;
			           		
			           	})();
			           	MAXARR = 3;
			           	console.log(data.results[0].weather_data);
			           	(function(){
			           		for (i in data.results[0].weather_data){
			           			// console.log(data.results[0].weather_data[i].date);
			           			if(i==MAXARR){return;}
			           			$("#main-right").append(MakeRightHtml(new MainRightPage(new Array(data.results[0].weather_data[i].date,data.results[0].weather_data[i].temperature,data.results[0].weather_data[i].weather,data.results[0].weather_data[i].wind,data.results[0].weather_data[i].dayPictureUrl,data.results[0].weather_data[i].nightPictureUrl))));
			           		}
			           	})();
			           	
			           }
			          //  error:function(datas){
			          //  	if(confirm('请求错误   关闭页面？')){
			          //  		window.close();
			          //  	}else{
			          //  		alert("okokok");
			          //  	}
			           	
			          // }
			})

		});



$(document).ready(
	function(){
		var MainFigureNumber  = $("#main-figure > div").length; 
		var numberlist = new Array();
		// alert(MainFigureNumber);
		for(var i =0;i<MainFigureNumber;i++){
			numberlist.push(i*-510+'px');
		}
		console.log(numberlist);
		$("#right-button").click(function(){
			var ThisNum = $.inArray($("#main-figure").css("marginLeft"),numberlist);
			if(ThisNum<(numberlist.length-1)){
				$("#main-figure").animate({marginLeft:numberlist[(ThisNum+1)]});
			}else if(ThisNum==(numberlist.length-1)){
				$("#main-figure").animate({marginLeft:'0px'});
			}
			var ThisNum=null;
		});

		$("#left-button").click(function(){
			var ThisNum = $.inArray($("#main-figure").css("marginLeft"),numberlist);
			var sumnumbers = numberlist.length; 
			if(ThisNum>0){
				$("#main-figure").animate({marginLeft:numberlist[ThisNum-1]});
			}else if(ThisNum==0){
				$("#main-figure").animate({marginLeft:numberlist[sumnumbers-1]});
			}
			var ThisNum=null;
		});
		$("#show-left-content").mouseover(function(){
			
			$("#show-left-content > #left-button").show();
		}).mouseout(function(){
			// ee.hide();
			$("#show-left-content > #left-button").hide();
		});

		$("#show-right-content").mouseover(function(){
			$("#show-right-content > #right-button").show();
		}).mouseout(function(){
			$("#show-right-content > #right-button").hide();
		});
	}
);
