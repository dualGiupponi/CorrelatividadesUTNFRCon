$(document).ready(function(){
$(".btn-civil").click(function(){
  $("#desp-civil").slideToggle("slow");
});
$(".btn-electrica").click(function(){
  $("#desp-electrica").slideToggle("slow");
});
$(".btn-industrial").click(function(){
  $("#desp-industrial").slideToggle("slow");
});
$(".btn-rural").click(function(){
  $("#desp-rural").slideToggle("slow");
});

//Clase CSS de los desplegables
$("#desp-civil").css({ display: 'none' });
$("#desp-electrica").css({ display: 'none' });
$("#desp-industrial").css({ display: 'none' });
$("#desp-rural").css({ display: 'none' });

//Script botones tipo toogle
$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }

    $(this).find('.btn').toggleClass('btn-default');

});

});
