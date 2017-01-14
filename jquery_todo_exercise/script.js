$("ul").on("click","li",function(){
  	$(this).toggleClass("completed");
  })

  $("ul").on("click","span",function(evt){
  	$(this).parent().fadeOut(500,function(){
  	$(this).remove();
  	});
  	evt.stopPropagation();
  });

  $("input").on("keypress",function(evt){
  	if(evt.which === 13) {
  		var task = $(this).val();
  		$(this).val("");
  		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+task+"</li>");

  	}
  });
