



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('gotobittube').addEventListener("click", popup1);
});

 function popup1() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	
    chrome.tabs.sendMessage(activeTab.id, {from: 'popup', subject: 'start1'},openLink1);
	openLink1(openLink1);
   });
}
function popup2() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
	
    chrome.tabs.sendMessage(activeTab.id, {from: 'popup', subject: 'start2'},openLink2);
	openLink2(openLink2);
   });
}



function openLink1(Link) {
	if(Link&&!(Link.includes("undefined"))){
	chrome.tabs.create({ url: Link });
	}
	else if (Link.includes("undefined")){
		popup2();
	}
	else {
		alert("Please go to a video on youtube :) !");
	}

	
}

function openLink2(Link) {
	if(Link&&!(Link.includes("undefined"))){
	chrome.tabs.create({ url: Link });
	}
	else if (Link.includes("undefined")) {
		api();
		
	}
	else {
		alert("Please go to a video on youtube :) !");
	}

	
}

function api () {
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
	var url = tabs[0].url;
		var Felder = url.split("=");
		
		var VideoID = Felder[1].split("&")[0];
	$.get(
		"https://www.googleapis.com/youtube/v3/videos", {
			part: 'snippet',
			id: VideoID,
			key: 'Create an Youtube API Key and paste it here'},
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




