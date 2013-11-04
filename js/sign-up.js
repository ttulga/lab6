//on doc ready

$(function(){
	var option;
	var i;
	var state
	var select = $('select[name="state"]');
	//loads the state drop down by utilizing for loop
	for (i = 0; i < usStates.length; i++) {
		state = usStates[i];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		select.append(option);
	} //load states
	
	$('.signup-form').submit(function(){
		var form = $(this);
		//gets the value for the address 1 input
		var address1Input = form.find('input[name="addr-1"]');
		var address1Value = address1Input.val();
		//gets the value for zip input
		var zipInput = form.find('input[name="zip"]');
		var zipValue = zipInput.val();
		//tests to see if address 1 and zip have values
		//if address has a value but not zip, gives alert
		if (address1Value.length > 0){
			if (zipValue.length == 0) {
				alert("You have not entered a zip code!");
				return false;
			}
		}
	}); //zip validation

	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function

	$('.cancel-signup').click(function(){
		//shows a confirmation modal when signup is cancelled
		$('.cancel-signup-modal').modal();
	}); //cancel signup

	//if user confirms cancel signup after confirmation, redirects to homepage
	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});
}); //on doc ready