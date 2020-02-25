$(document).ready(function(){
	
	//console.log('helloworld');
	// $('#header').find('div').css({
	// 	'background-color':'lightblue',
	// 	'color':'white',
	// 	'font-size':'24px',
	// 	'background-size':'100%'
	// });

	$.ajax({
		
		url:'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=12&key=AIzaSyBfWFKkPVwJcR5LrA-g5_tuwMdIBmP_LzU',
		type:'Get',
		dataType: 'json',
  		success: function(data){
    	console.log('這是抓下來的資料: ',data);

    	// var email = data.results[0].email;
    	// var gender = data.results[0].gender;

    	// 	console.log(email);
    	// 	$('#test').append(email);
    	// 	console.log(gender);
    	var title1 = data.items[0].snippet.title;
    	console.log(title1);
 		$("section:first div h3").html(title1.responseText);
		}


	});
	

});