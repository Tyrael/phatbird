/*
 * easterEgg.js
 * 
 * author: eFBe
 * Copyright 2011, The Weird Syndicate	
 * 
 * just a small test function to test jquery init
 * from the browser console
 *
 */

jQuery(document).ready(function($) { // global scope ftw
	var body = $("body"),
		duration = 500,

		// let's say it's a dumb template, don't wanna fuck with createElement
		devListTemplate = '<div id="devList">' +
				'<h6>phat birds:</h6>' +
				'<dl>' +
					'<dt>The Evil Genius under da hood:</dt>' +
					'<dd>Tyrael (Kovács Ferenc)</dd>' +
					'<dt>Master of Surfaces:</dt>' +
					'<dd>eFBé (Balázs Foky)</dd>' +
				'</dl>' +
				'<button id="HideAuthors">don\'t care</button>'
			'</div>';

	// methods in the jquery namespace look like this
	$.showDevelopers = function () {
		body.prepend(devListTemplate);
		
		var elem = $('#devList'),
			hide = $('#HideAuthors');
			
		if (elem.length) { // only when it's already exist
			elem.fadeIn(duration);
		}
		
		hide.bind('click', function() {
		  $.hideDevelopers();
		});
	}
	
	$.hideDevelopers = function () {
		var elem = $('#devList');
		
		if (elem.css('display', 'block')) {
			elem.fadeOut(duration, function() {
				elem.remove();
			});
		}
	}
	
		
})