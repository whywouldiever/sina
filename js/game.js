// JavaScript Document
<!--导航条-->
$(function() {
	$("#aa2 ul li a:gt(0)").hover(function(){
		$(this).css("border-bottom","5px solid #007eff");								 
	},function(){
		$(this).css("border-bottom","");
		});
});
<!--搜索框-->
$(function() {
	$("#myinput").click(function(){
		$(this).css("color","#000");//设置文本框文字颜色为黑色
		var txt_value=$(this).val();//得到当前文本框的值
		if(txt_value==this.defaultValue){
			$(this).val("");//如果符合条件，则清空文本框内容
		}
		$("#hot_1").css("display","block");
		event.stopPropagation();
	});
	$("body").click(function(){
		var txt_value=$("#myinput").val();
		if(txt_value==""){
			$("#myinput").val("大天使之剑");
			$("#myinput").css("color","#cbcbcb");
		}
		$("#hot").hide();			   
		});
	$("#hot").click(function(){
			return false;		   
		});
	
	$("#hot_1 li:gt(6)").hide();
		$("#li-genduo").click(function(){
			$(this).hide();
			$("#li-xians").show();
			$("#hot_1 li:gt(6)").slideDown("fast");
		});
		$("#li-xians").click(function(){
			$(this).hide();
			$("#li-genduo").show();
			$("#hot_1 li:gt(6)").slideUp("fast");
		});
});
$(function(){
$("#hot_1>li").bind("click","li",function(){
		$("#myinput").val($(this).text());
	});	
});


<!--轮播图-->
$(function() {
    var size = $('.img li').size();
    for (var i = 1; i < size + 1; i++) {
        var li = '<li>' + i + '</li>';
        $('.num').append(li);
    }
    $('.img li').first().show();
    $('.num li').first().addClass('active');
    /*手动轮播*/
    $('.num li').mouseover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        i = index;
        $('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })
    /*核心向左运动函数*/
    function moveL() {
        i--;
        if (i == -1) i = size - 1;
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    };
    /*自动播放*/
    var i = 0;
    var t = setInterval(move, 1500);
    /*核心向右运动函数*/
    function move() {
        i++;
        if (i == size) i = 0;
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    };
    $('.wrap').hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(move, 1500);
    })
    $('.btn-left').click(function() {
        moveL();
    })
    $('.btn-right').click(function() {
        move();
    })
})


<!--随鼠标移动-->
$(function(){
	var x=10;
	var y=20;
	$("#gameRecommendList a.tooltip").mouseover(function(e){
		var tooltip="<div id='tooltip'><img src='"+this.href+"'><\/div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			position: "absolute",
			"z-index":"999",
			top:e.pageY+y,
			left:e.pageX+x
			}).show("fast");
	}).mouseout(function(){
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			position: "absolute",
			top:e.pageY+y,
			left:e.pageX+x
		});
	});
});


<!--内容折叠-->
	$(function(){
	    $("dl dt:even").css("backgroundColor","#dcdcdc");
		$("dl dt").click(function(){
			$(this).next().toggle("slow");
		});	
		$(".one").click(function(){
			$(this).next().show();
			$("dt:not(.two)").next().hide("slow");
		});
	});
	
	
<!--更多-->
function gd(t){
 if(t==1){
    document.getElementById("list-d_1").style.display="block";
	 document.getElementById("list-d_2").style.display="none";
	  document.getElementById("list-d_3").style.display="none";
 }else if(t==2){
     document.getElementById("list-d_1").style.display="none";
	  document.getElementById("list-d_2").style.display="block";
	   document.getElementById("list-d_3").style.display="none";
 }else{
     document.getElementById("list-d_1").style.display="none";
	  document.getElementById("list-d_2").style.display="none";
	   document.getElementById("list-d_3").style.display="block";
 }
}

<!--插件-->
$(function(){
	$("a.fan1").fancybox();
	$("a.fan2").fancybox({
				'titlePosition'		: 'outside',
				'overlayColor'		: '#000',
				'overlayOpacity'	: 0.9
			});
	$("a[rel=example_group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
		});
	});