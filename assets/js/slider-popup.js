(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),//slider
		overlay = document.querySelector( 'div.overlay1' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}


	triggerBttn.addEventListener( 'click', toggleOverlay );

	closeBttn.addEventListener( 'click', toggleOverlay );

	
	     /* -------- info-slider -------- */
                  $('.slider-info').click(function(e){
				  $(".vbox-overlay").toggleClass("vbox-overlay-new");
				  $(".slider-video-content").toggleClass("visible");
				  $("#slider_content").removeClass("hidden");
				  $(".wraper-slider-content").toggleClass("animated slideInRight show");
				 
		         
				 });
				$('.close-info-bt').click(function(e){
				 $(".slider-video-content").toggleClass("visible");
				$(".wraper-slider-content").toggleClass("animated slideInRight show");
				});
         /* -------- close-slider -------- */
				$('.overlay-close').click(function(e){
				$(vars.thumb_tray).css('opacity','0')
});
})();
