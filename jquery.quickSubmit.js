$.fn.quickSubmit = function() {
	return this.each(function(){
		$.fn.quickSubmit.form = $(this);
		$(':input', $(this)).live('keypress', function(e){
			if (e.which == 13 && $.fn.quickSubmit.isCtrl) {
				if ($('input[type="submit"]', $.fn.quickSubmit.form).length == 0)
					$('input[type="button"]:last', $.fn.quickSubmit.form).click();
				else
					$('input[type="submit"]', $.fn.quickSubmit.form).click();
			}
		});
	});
}
$(document).keyup(function (e) {
	if((e.which == 17) || (e.which == 91) || (e.which == 93) || (e.which == 224)) 
		$.fn.quickSubmit.isCtrl=false;
}).keydown(function (e) {
	if((e.which == 17) || (e.which == 91) || (e.which == 93) || (e.which == 224)) $.fn.quickSubmit.isCtrl=true;
});