var $ = require("jquery");
var validator = require("email-validator");

$('#btn-forgot').click(function (e) {
	$('#login').hide();
	$('#forgot').show();
});

$('#btn-send-forgot').click(function (e) {
	var forgotEmail = $('#forgot-email');
	forgotEmail.attr('disabled', true);
	$(this).attr('disabled', true);
	$('#msg-wrapper').show();
});

$('#btn-back').click(function (e) {
	$('#login').show();
	$('#forgot').hide();
});