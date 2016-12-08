$( function() {
    		$( "#slider-range" ).slider({
      			range: true,
      			min: 0,
      			max: 4000,
      			values: [ 0, 3000 ],
      			slide: function( event, ui ) {
        			$( "#amount" ).val( "от " + ui.values[ 0 ]);
        			$( "#amount1" ).val( "до " + ui.values[ 1 ]);
      			}
    	});
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount1" ).val( "до " + $( "#slider-range" ).slider( "values", 1 ));
  } );