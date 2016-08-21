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
		// set image, cover keeps aspect ratio
		bg.style.backgroundImage = "url(images/" + response.result.url + ".jpg)";
		bg.style.backgroundSize = "cover";
		// country name text font characteristics 
		name.innerHTML = "<h1>" + response.result.name + "</h1>";
		pop.innerHTML = "<h3>Population of " + response.result.pop + "</h3>";

		console.log("it passed it");
	});
}

init();