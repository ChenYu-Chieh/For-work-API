$(document).ready(function(){
	
	//console.log('helloworld');
	$('#header').find('div').css({
		'background-color':'lightblue',
		'color':'white',
		'font-size':'24px'
	});

	$.ajax({
		
		url:'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=12&key=[AIzaSyBfWFKkPVwJcR5LrA-g5_tuwMdIBmP_LzU] HTTP/1.1' +

		'Authorization: Bearer [YOUR_ACCESS_TOKEN]' +
		'Accept: application/json' ,
		
		dataType: 'json',
  		success: function(data){
    	console.log('這是抓下來的資料: ',data);

    	// var email = data.results[0].email;
    	// var gender = data.results[0].gender;

    	// 	console.log(email);
    	// 	$('#test').append(email);
    	// 	console.log(gender);
 		
    	
	}});
	

});