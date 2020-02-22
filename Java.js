$(document).ready(function(){
	
	//console.log('helloworld');
	$('#header').find('div').css({
		'background-color':'lightblue',
		'color':'white',
		'font-size':'24px'
	});

	$.ajax({
  		url: 'https://randomuser.me/api/',
  		dataType: 'json',
  		success: function(data){
    	console.log('這是抓下來的資料: ',data);

    	var email = data.results[0].email;
    	var gender = data.results[0].gender;

    		//console.log(email);
    		$('#test').append(email);
    		//console.log(gender);
 		
    	
	}});
	

});