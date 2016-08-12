/*
document.addEventListener('DOMContentLoaded', function() {
	//console.log(frames[0])
	console.log("went to listener");
	changeBackground();
}) */

//window.onload = changeBackground();
/*
chrome.tabs.onCreated.addListener( function(tab){
	console.log("activated");
	changeBackground();
})
*/

/* Listen for message */
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		// if message matches, call pickNewCountry function
		if (request.greeting == "This is a request") {
			var country = pickNewCountry();
			console.log("Request received. Country picked is " + country);
			// send response back to override.js
			sendResponse({country});
		}
	});

/* Uses random number generator to pick a random country from list */
function pickNewCountry(){
	

	
	//list of all countries recognized by United States 
	// images currently downloaded from PixaBay (royalty-free) or Flickr (links in notes)
	var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
	"Antigua+and+Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
	"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
	"Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia+and+Herzegovina", 
	"Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina+Faso", "Burma", "Burundi", 
	"Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central+African+Republic", "Chad", 
	"Chile", "China", "Colombia", "Comoros", "Democratic+Republic+of+the+Congo", 
	"Republic+of+the+Congo", "Costa+Rica", "Cote+d'Ivoire", "Croatia", "Cuba", "Cyprus", 
	"Czechia", "Denmark", "Djibouti", "Dominica", "Dominican+Republic", "Ecuador", 
	"Egypt", "El+Salvador", "Equatorial+Guinea", "Eritrea", "Estonia", "Ethiopia", 
	"Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
	"Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
	"Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
	"Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
	"Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
	"Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", 
	"Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall+Islands", "Mauritania", 
	"Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
	"Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New+Zealand", 
	"Nicaragua", "Niger", "Nigeria", "North+Korea", "Norway", "Oman", "Pakistan", "Palau", 
	"Panama", "Papua+New+Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
	"Qatar", "Romania", "Russia", "Rwanda", "Saint+Kitts+and+Nevis", "Saint+Lucia", 
	"Saint+Vincent+and+the+Grenadines", "Samoa", "San+Marino", "Sao+Tome+and+Principe", 
	"Saudi+Arabia", "Senegal", "Serbia", "Seychelles", "Sierra+Leone", "Singapore", 
	"Slovakia","Slovenia", "Solomon+Islands", "Somalia", "South+Africa", "South+Korea", 
	"South+Sudan", "Spain", "Sri+Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", 
	"Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
	"Tonga", "Trinidad+and+Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
	"Ukraine", "United+Arab+Emirates", "United+Kingdom", "United+States+of+America", 
	"Uruguay", "Uzbekistan", "Vanuatu", "Vatican+City", "Venezuela", "Vietnam", "Yemen", 
	"Zambia", "Zimbabwe"];

	// pick a number
	var randNumber = numberGenerator();
	// search country on google maps 
	console.log(countries[randNumber]);

	return countries[randNumber];
	//return "United+States"; 

	//chrome.tabs.update(null, {url: "http://google.com/maps/place/" + countries[randNumber]});
}

// function numberGenerator returns number between 0-194 
function numberGenerator() {
	return Math.floor(Math.random() * 29);
	//return Math.floor(Math.random() * 195);
}

/* Maybe this function is not needed 
function changeBackground(){
	console.log("change background func");
	//document.body.style.backgroundImage = "url(" + pickNewCountry() + ".jpg)";
	alert(document.body.style.backgroundImage);
	return "United+States";
}
*/


