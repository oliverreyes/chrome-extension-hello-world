function init(){
	//alert("override.js executed");
	//send message to background.js
	chrome.runtime.sendMessage({"greeting": "This is a request"}, function(response) {
		console.log("Response received:" + response.country);
		document.body.style.backgroundImage = "url(images/" + response.country + ".jpg)";
		document.body.style.backgroundSize = "cover";
		var div = getElementById("body");
		div.textContent = response.country;
		//document.body.style.backgroundImage = "url(United+States.jpg)";
	});
}

init();