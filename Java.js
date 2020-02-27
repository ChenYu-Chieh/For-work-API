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
    	
    		var dataItems = data.items;
    		[i] = Array();
    		
    		for( i = 0; i < dataItems.length; i++){
    		
	    		//data.items[i] = i;
	    		//var timeCode = (data.items[i].contentDetails.duration);
				alert(data.items[i].contentDetails.duration);
				//$('.timeCode').text(dataItems[i].contentDetails.duration);
				
				// $('.timeCode').text(data.items[0].contentDetails.duration);
				// $('.timeCode').text(data.items[1].contentDetails.duration);
				// $('.timeCode').text(data.items[2].contentDetails.duration);
				// $('.timeCode').text(data.items[3].contentDetails.duration);
				// $('.timeCode').text(data.items[4].contentDetails.duration);
				// $('.timeCode').text(data.items[5].contentDetails.duration);
				// $('.timeCode').text(data.items[6].contentDetails.duration);
				// $('.timeCode').text(data.items[7].contentDetails.duration);
				// $('.timeCode').text(data.items[8].contentDetails.duration);
				// $('.timeCode').text(data.items[9].contentDetails.duration);
				// $('.timeCode').text(data.items[10].contentDetails.duration);
				// $('.timeCode').text(data.items[11].contentDetails.duration);
				// $('.timeCode').text(data.items[12].contentDetails.duration);
			
			};
			for (i = 0; i < dataItems.length; i++){
				
				document.getElementByClass('timeCode').innerHTML = (data.items[i].contentDetails.duration);
				$("p:eq(i)").text(data.items[i].contentDetails.duration);
			};//為什麼這裡不能這樣寫?

    			// v.text([1]);
    			// v[2];
    			// v[3];
    			// v[4];
    			// v[5];
    			// v[6];
    			// v[7];
    			// v[8];
    			// v[9];
    			// v[10];
    			// v[11];
    			// v[12];

    		// 	v.each(function(){
    			
    		// 	$(this).text('時長: ' + data.items[i].contentDetails.duration)

  				// });

	    		//var myVedio = $('#vedio');
	    		//var myTimeCode = $('#timeCode');
	    		//var myTitle = $('#title');
	    		//var myViewCount = $('#viewCount');
	    		//var myPublishedAt = $('publishedAt');

	    		// myVedio.val(data.items[i].id);
	    		// myTimeCode.text('時長: ' + data.items[i].contentDetails.duration);
	    		// myTitle.text(data.items[i].snippet.title);
	    		// myViewCount.text('觀看人次: '+ data.items[i].statistics.viewCount);
	    		// myPublishedAt.text(data.items[i].snippet.publishedAt);
    		
    	
    	//var title1 = data.items[0].snippet.title;
    	//console.log(title1);
    	
 		//成功取到JSON
 		//$("#title1").text(title1);
		}


	});
	

});