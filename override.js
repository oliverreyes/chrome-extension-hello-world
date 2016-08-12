function init(){
	//alert("override.js executed");
	//send message to background.js
	chrome.runtime.sendMessage({"greeting": "This is a request"}, function(response) {
		console.log("Response received:" + response.result.name);
		console.log(response.result.factNum);
		console.log("Fact is " + response.result.facts[response.factNum]);
		document.body.style.backgroundImage = "url(images/" + response.result.url + ".jpg)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('name').innerHTML = response.result.name;
		console.log("it passed it");
		//document.body.style.backgroundImage = "url(United+States.jpg)";
	});
}

init();