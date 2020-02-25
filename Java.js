$(document).ready(function(){
	
	//console.log('helloworld');
	// $('#header').find('div').css({
	// 	'background-color':'lightblue',
	// 	'color':'white',
	// 	'font-size':'24px',
	// 	'background-size':'100%'
	// });

	$.ajax({
		
		//url:'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=12&key=AIzaSyBfWFKkPVwJcR5LrA-g5_tuwMdIBmP_LzU',
		url:'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&key=AIzaSyBfWFKkPVwJcR5LrA-g5_tuwMdIBmP_LzU',
		type:'Get',
		dataType: 'json',
  		success: function(data){

    	console.log('這是抓下來的資料: ',data);

    	// var email = data.results[0].email;
    	// var gender = data.results[0].gender;

    	// 	console.log(email);
    	// 	$('#test').append(email);
    	// 	console.log(gender);
    	
    	var dataItem = data.item[i];
    	
    	for( i = 0; i < dataItem.length; i++){
    		var myVedio = $('#vedio');
    		var mytimeCode = $('#timeCode');
    		var mytitle = $('#title');
    		var myViewCount = $('#viewCount');

    		myvedio.val(data.items[i].id);
    		mytimeCode.text(data.items[i].contentDetails.duration);
    		mytilte.text(data.items[i].snippet.title);
    		myViewCount.text(data.items[i].statistics.viewCount);
    	}
    	
    	//var title1 = data.items[0].snippet.title;
    	//console.log(title1);
    	
 		//成功取到JSON
 		//$("#title1").text(title1);
		}


	});
	

});