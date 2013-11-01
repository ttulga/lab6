//on doc ready

$(function(){
	var option;
	var i;
	var state
	var select = $('select[name="state"]');
	for (i = 0; i < usStates.length; i++) {
		state = usStates[i];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		select.append(option);
	}

	$('.signup-form').submit(function(){
		var form = $(this);
		var address1Input = form.find('input[name="addr-1"]');
		var address1Value = address1Input.val();
		var zipInput = form.find('input[name="zip"]');
		var zipValue = zipInput.val();
		if (address1Value.length > 0 && zipValue.length > 0)
			return true;
		else {
			alert("You have not entered a zip code!");
			return false;
		}
	});

	$('.cancel-signup').click(function(){

	}); //cancel signup
}); //on doc ready