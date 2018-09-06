


// Listen to the click on the "watch on bittube!" button and start popup1() function
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('gotobittube').addEventListener("click", popup1);
});

//Sends message to active tab on content.js with content "start1" and waits for the reply 
 function popup1() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	
    chrome.tabs.sendMessage(activeTab.id, {from: 'popup', subject: 'start1'}, function(Link) {
		if(!Link.includes("undefined")){
			chrome.tabs.create({ url: Link });
		}
		else {
				popup2();
		}
		
   });
});
}

//Sends message to active tab on content.js with content "start2" and waits for the reply
function popup2() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	
		chrome.tabs.sendMessage(activeTab.id, {from: 'popup', subject: 'start2'},function(Link) {
			if(!Link.includes("undefined")){
				chrome.tabs.create({ url: Link });
			}
			else {
					popup3();
			}
			
			
		});

   });
}

//Sends message to active tab on content.js with content "start3" and waits for the reply
function popup3() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	
			chrome.tabs.sendMessage(activeTab.id, {from: 'popup', subject: 'start3'},function(Link) {
				if(!Link.includes("undefined")){
					chrome.tabs.create({ url: Link });
				}
				else {
					api();
				}
				
				
			});

   });
}

// Makes an api call and opens bittube link in new tab
function api () {
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
	var url = tabs[0].url;
		var Felder = url.split("=");		
		var VideoID = Felder[1].split("&")[0];
			$.get(
				"https://www.googleapis.com/youtube/v3/videos", {
					part: 'snippet',
					id: VideoID,
					key: 'AIzaSyA5OCWYGS1xirf9gH7ptC-1gtXRMHD2Oq8'},
					function(data) {
						$.each(data.items, function(i, item){
							console.log(item);
							var channelID = item.snippet.channelId;
							var Link = "https://bit.tube/play?hash="+VideoID+"&channel="+channelID+"&isyt=true";
							chrome.tabs.create({ url: Link });
						})
						
				
					}
			
			);
	});
}




