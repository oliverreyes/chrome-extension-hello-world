function init(){
	//send message to background.js
	chrome.runtime.sendMessage({"greeting": "This is a request"}, function(response) {
		console.log("Response received:" + response.result.name);
		console.log(response.result.factNum);
		console.log("Fact is " + response.result.facts[response.factNum]);
		// set image, cover keeps aspect ratio
		document.getElementById("bg-img").style.backgroundImage = "url(images/" + response.result.url + ".jpg)";
		document.getElementById("bg-img").style.backgroundSize = "cover";
		document.getElementById('name').innerHTML = response.result.name;
		document.getElementById('pop').innerHTML = response.result.pop;

		console.log("it passed it");
	});
}

init();