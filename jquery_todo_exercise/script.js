$("document").ready(function() {
  $("li").on("click",function(){
  	$(this).toggleClass("completed");
  })
});