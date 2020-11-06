$(document).ready(function(){
      $(document).scroll(function(){
      	if($(this).scrollTop() > 170)
      	{
      		$("nav").addClass("fixed-top-nav");
      		$(".adjust-image").show();
      		
      	}else{
      		$("nav").removeClass("fixed-top-nav");
                  $(".adjust-image").hide();
      		
      		
      	}

      });
});