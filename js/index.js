	$(function(){
/* 顶部搜索栏事件*/
	$('.user-nav .user-nav-main-right li.hovers').hover(function(){
		$(this).toggleClass('on');
	})

/* 搜索栏事件start*/
		/* 鼠标悬停事件*/
		var $q        = $('#q');
		var $one_li   = $(".logo-nav .logo-nav-content .logo-search .logo-search-one li");
		var $one      = $('.logo-nav .logo-nav-content .logo-search .logo-search-one');
		var $one_span = $(".logo-nav .logo-nav-content .logo-search .logo-search-one span")
		$one_li.click(function(){

			if ($(this).hasClass('tmall')){
				$one.removeClass('dp-on').addClass('tmall-on');
			}else if ($(this).hasClass('dp')){
				$one.removeClass('tmall-on').addClass('dp-on');
			}else if ($(this).hasClass('tb')){
				$one.removeClass('tmall-on dp-on').addClass('logo-search-one');
			}	
		})
		/* 焦点事件 */
		 $one_span.click(function(){
			$q.focus();
		})
		//利用css中的层叠性进行的操作
		$q.on('input',function(){
				if($q.val() !=''){
					$one.addClass('bukong');
				}else{
					$one.removeClass('bukong');
			}
		})

		//滚动事件补白(由于结构问题添加的补白)
		var $bu_fixd = $('.logo-nav>div:first-child')
		$(window).scroll(function(){
			if ($(window).scrollTop() >= search_fixd_top){
				$bu_fixd.addClass('bu-fixd');
			}else {
				$bu_fixd.removeClass('bu-fixd');
			}
		});
		
		//滚动轴事件
		var $search_fixd	=  $('.logo-nav .logo-nav-content>div:first-child');
		var search_fixd_top =  $search_fixd.offset().top;
		$(window).scroll(function(){
			if ($(window).scrollTop() >= search_fixd_top){
				$search_fixd.addClass('search-fixd');
			}else {
				$search_fixd.removeClass('search-fixd');
			}
		});
		var $ul=$('.logo-nav .logo-search-one ul');
		var $li=$('.logo-nav .logo-search-one li');
		$ul.hover(function(){
			$(this).toggleClass('hover');
		});
		//切换天猫效果实现
		$li.click(function(){
			if ($(window).scrollTop() >= search_fixd_top){
					$(this).prependTo($ul);
			}			
		})		
	})




