//int round = 0;

function init(){
	//send message to background.js
	chrome.runtime.sendMessage({"greeting": "This is a request"}, function(response) {
		console.log("Response received:" + response.result.name);
		console.log(response.result.factNum);
		console.log("Fact is " + response.result.facts[response.factNum]);
		// make variables
		var bg = document.getElementById('bg-img');
		var name = document.getElementById('name');
		var pop = document.getElementById('pop');
		var att = document.getElementById('att');
		var map = document.getElementById('map');
		// set image, cover keeps aspect ratio
		bg.style.backgroundImage = "url(images/" + response.result.url + ".jpg)";
		// country name text font characteristics 
		if (response.result.name.length > 19) {
			name.innerHTML = "<h1>" + response.result.name + "</h1>";
			name.style.fontSize = "24pt";
			name.style.wordSpacing = "-9px";
			name.style.lineHeight = "0.4";
		}
		else if (response.result.name.length > 10) {
			name.innerHTML = "<h1>" + response.result.name + "</h1>";
			name.style.fontSize = "38pt";
			name.style.wordSpacing = "-9px";
		}
		else {
			name.innerHTML = "<h1>" + response.result.name + "</h1>";
		}
		pop.innerHTML = "<h3>Population of " + response.result.pop + "</h3>";
		att.innerHTML = "<a href='" + response.result.link + "'>Photo</a> by " + response.result.author + "/<a href='https://creativecommons.org/licenses/by" + response.result.cc + "/2.0/legalcode'>CC BY</a>"; 
		map.innerHTML = "<a href='http://google.com/maps/place/" + response.result.url + "'>Map</a>"; 

		console.log("it passed it");
	});
}

init();
/*
function moveCounter() {
	if (round > 3) {
		init();
	}
	else if(round == 0) {
		init();
	}
	round++;
	
}

moveCounter(); */
