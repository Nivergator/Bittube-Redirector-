chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});


chrome.runtime.onMessage.addListener(
      function(msg, sender, response) {
		  
        if( (msg.from === 'popup')&& (msg.subject === 'start1')) {
         
		var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		var Chan = elems[0].pathname;
		var Vid = elems[0].baseURI;
		
		
		var Array1 = Vid.split("=");
		var preVid = Array1[1];
		var VideoID = preVid.split("&")[0];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
             }
			 
		else if ( (msg.from === 'popup')&& (msg.subject === 'start2')) {
			
			var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		var Chan = elems[0].href;
		var Vid = elems[0].baseURI;
		
		
		var Array1 = Vid.split("=");
		var VideoID = Array1[1];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
			
		}
		
		else if((msg.from === 'popup')&& (msg.subject === 'start3')) {
         //searches for the class with the channel and vidID on youtube
		var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		
		
		var Chan = elems[0].pathname;
		var Vid = elems[0].baseURI;
		for(  i=0; i<elems.length; i++) {
			if(elems[i].pathname.includes("channel/")) {
				Chan = elems[i].pathname;
				break;
			}
		}
		//creates Url from channel and vidID
		var Array1 = Vid.split("=");
		var preVid = Array1[1];
		var VideoID = preVid.split("&")[0];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
             }
      }
    );

/*//Listens to messages 
chrome.runtime.onMessage.addListener(
alert("Chan");
      function(msg, sender, response) {
		 //If message sent from popup1() try this version
        if( (msg.from === 'popup')&& (msg.subject === 'start1')) {
			
         //searches for the class with the channel and vidID on youtube
		var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		
		
		var Chan = elems[0].pathname;
		var Vid = elems[0].baseURI;
		
		//creates Url from channel and vidID
		var Array1 = Vid.split("=");
		var preVid = Array1[1];
		var VideoID = preVid.split("&")[0];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
        }
		
		//If message sent from popup2() try this version 
		else if ( (msg.from === 'popup')&& (msg.subject === 'start2')) {
			
		//searches for the class with the channel and vidID on youtube
		var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		var Chan = elems[0].href;
		var Vid = elems[0].baseURI;
		
		//creates Url from channel and vidID
		var Array1 = Vid.split("=");
		var VideoID = Array1[1];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
			
		}
		 else if((msg.from === 'popup')&& (msg.subject === 'start3')) {
         //searches for the class with the channel and vidID on youtube
		var elems = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
		
		
		var Chan = elems[0].pathname;
		var Vid = elems[0].baseURI;
		for( int i=0, i<elems.length, i++) {
			if(elems[i].pathname.includes("channel/")) {
				Chan = elems[i].pathname;
				alert(Chan);
				break;
			}
		}
		alert(Chan);
		//creates Url from channel and vidID
		var Array1 = Vid.split("=");
		var preVid = Array1[1];
		var VideoID = preVid.split("&")[0];
		var Array2 = Chan.split("channel/");
		var ChannelID = Array2[1];
		var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+ChannelID+"&isyt=true";
				
				response(Link);
		 
             }
		
		
			
		}
		
      
    );*/

    
		
		
	
	
