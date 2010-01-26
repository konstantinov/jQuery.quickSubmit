$.fn.quickSubmit = function() {
	return this.each(function(){
		var form = $(this);
		$(':input', $(this)).live('keypress', function(e){
			if ($.fn.quickSubmit.enterCheck[e.which] && $.fn.quickSubmit.isCtrl) {
				if ($('input[type="submit"]', form).length == 0)
					$('input[type="button"]:last', $.fn.quickSubmit.form).click();
				else
					$('input[type="submit"]', form).click();
			}
		});
	});
}
$.fn.quickSubmit.enterCheck = {
	"10":1,
	"13":1
};
$.fn.quickSubmit.ctrlCheck = {
	"17":1,
	"91":1,
	"93":1,
	"224":1
};
$(document).keyup(function (e) {
	if ($.fn.quickSubmit.ctrlCheck[e.which])
		$.fn.quickSubmit.isCtrl=false;
}).keydown(function (e) {
	if ($.fn.quickSubmit.ctrlCheck[e.which])
		$.fn.quickSubmit.isCtrl=true;
});