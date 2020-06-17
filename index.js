var x = $("#inputPassword")[0];
$(".eye").on("click", function(){
   if (x.type === "password") {
    x.type = "text";
       $(".eye").removeClass("fa-eye");
       $(".eye").addClass("fa-eye-slash");
  } else {
    x.type = "password";
      $(".eye").removeClass("fa-eye-slash");
       $(".eye").addClass("fa-eye");
  }
});

$("input").placeholder.on("click", function(){
    $("input").placeholder.hide();
});