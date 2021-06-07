$(function () {
   $("button").click(function () {
       $("h1").addClass("red");
       $("h1").removeClass("red");
       $(".big").toggleClass("red");
   })
})