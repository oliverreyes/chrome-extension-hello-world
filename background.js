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
			var result = pickNewCountry();
			console.log("Request received. Country picked is " + result.name);
			// send response back to override.js
			sendResponse({result});
		}
	});

/* Uses random number generator to pick a random country from list */
function pickNewCountry(){
	// create JSON Object to store country information
	var countryObj = { "countries": [
		{"name":"Afghanistan", "pop":"32.53 Million", "url":"Afghanistan", "link":" ", "author":" ", 
			"facts":["fun","great"]},
		{"name":"Albania", "pop":"2.89 Million", "url": "Albania", "link":" ", "author":" ", 
			"facts":["kinda fun","kinda great"]},
		{"name":"Algeria", "pop":"39.67 Million", "url":"Algeria", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Andorra", "pop":"70 Thousand", "url":"Andorra", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Angola", "pop":"25.02 Million", "url":"Angola", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Antigua and Barbuda", "pop":"91 Thousand", "url":"Antigua+and+Barbuda", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Argentina", "pop":"43.42 Million", "url":"Argentina", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Armenia", "pop":"3.02 Million", "url":"Armenia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Australia", "pop":"23.78 Million", "url":"Australia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Austria", "pop":"8.61 Million", "url":"Austria", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Azerbaijan", "pop":"9.65 Million", "url":"Azerbaijan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bahamas", "pop":"388 Thousand", "url":"Bahamas", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bahrain", "pop":"1.38 Million", "url":"Bahrain", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bangladesh", "pop":"161 Million", "url":"Bangladesh", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Barbados", "pop":"284 Thousand", "url":"Barbados", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Belarus", "pop":"9.51 Million", "url":"Belarus", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Belgium", "pop":"11.29 Million", "url":"Belgium", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Belize", "pop":"359 Thousand", "url":"Belize", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Benin", "pop":"10.88 Million", "url":"Benin", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bhutan", "pop":"774 Thousand", "url":"Bhutan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bolivia", "pop":"10.72 Million", "url":"Bolivia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bosnia and Herzegovina", "pop":"3.81 Million", "url":"Bosnia+and+Herzegovina", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Botswana", "pop":"2.26 Million", "url":"Botswana", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Brazil", "pop":"207.85 Million", "url":"Brazil", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Brunei", "pop":"423 Thousand", "url":"Brunei", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Bulgaria", "pop":"7.18 Million", "url":"Bulgaria", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Burkina Faso", "pop":"18.11 Million", "url":"Burkina+Faso", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Burma (Myanmar)", "pop":"53.9 Million", "url":"Burma", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Burundi", "pop":"11.18 Million", "url":"Burundi", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cabo Verde", "pop":"520 Thousand", "url":"Cabo+Verde", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cambodia", "pop":"15.58 Million", "url":"Cambodia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cameroon", "pop":"23.34 Million", "url":"Cameroon", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Canada", "pop":"35.85 Million", "url":"Canada", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Central African Republic", "pop":"4.9 Million", "url":"Central+African+Republic", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Chad", "pop":"14.04 Million", "url":"Chad", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Chile", "pop":"17.95 Million", "url":"Chile", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"China", "pop":"1.37 Billion", "url":"China", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Colombia", "pop":"48.23 Million", "url":"Colombia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Comoros", "pop":"788 Thousand", "url":"Comoros", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Democratic Republic of the Congo", "pop":"77.27 Million", "url":"Democratic+Republic+of+the+Congo", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Republic of the Congo", "pop":"4.62 Million", "url":"Republic+of+the+Congo", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Costa Rica", "pop":"4.81 Million", "url":"Costa+Rica", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cote d'Ivoire", "pop":"22.7 Million", "url":"Cote+d'Ivoire", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Croatia", "pop":"4.22 Million", "url":"Croatia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cuba", "pop":"11.39 Million", "url":"Cuba", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Cyprus", "pop":"1.17 Million", "url":"Cyprus", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Czechia", "pop":"10.55 Million", "url":"Czechia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Denmark", "pop":"5.68 Million", "url":"Denmark", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Djibouti", "pop":"888 Thousand", "url":"Djibouti", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Dominica", "pop":"73 Thousand", "url":"Dominica", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Dominican Republic", "pop":"10.53 Million", "url":"Dominican+Republic", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Ecuador", "pop":"16.14 Million", "url":"Ecuador", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Egypt", "pop":"91.51 Million", "url":"Egypt", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"El Salvador", "pop":"845 Thousand", "url":"El+Salvador", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Equatorial Guinea", "pop":"35.85 Million", "url":"Equatorial+Guinea", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Eritrea", "pop":"4.79 Million", "url":"Eritrea", "link":" ", "author":" ", 
			"facts":["a","b"]}, // pop as of 2011
		{"name":"Estonia", "pop":"1.31 Million", "url":"Estonia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Ethiopia", "pop":"99.39 Million", "url":"Ethiopia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Fiji", "pop":"892 Thousand", "url":"Fiji", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Finland", "pop":"5.48 Million", "url":"Finland", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"France", "pop":"66.81 Million", "url":"France", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Gabon", "pop":"1.73 Million", "url":"Gabon", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Gambia", "pop":"1.99 Million", "url":"Gambia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Georgia", "pop":"3.68 Million", "url":"Georgia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Germany", "pop":"81.41 Million", "url":"Germany", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Ghana", "pop":"27.41 Million", "url":"Ghana", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Greece", "pop":"10.82 Million", "url":"Greece", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Grenada", "pop":"107 Thousand", "url":"Grenada", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Guatemala", "pop":"16.34 Million", "url":"Guatemala", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Guinea", "pop":"12.61 Million", "url":"Guinea", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Guinea-Bissau", "pop":"1.84 Million", "url":"Guinea-Bissau", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Guyana", "pop":"767 Thousand", "url":"Guyana", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Haiti", "pop":"10.71 Million", "url":"Haiti", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Honduras", "pop":"8.08 Million", "url":"Honduras", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Hungary", "pop":"9.84 Million", "url":"Hungary", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Iceland", "pop":"331 Thousand", "url":"Iceland", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"India", "pop":"1.31 Billion", "url":"India", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Indonesia", "pop":"257.56 Million", "url":"Indonesia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Iran", "pop":"79.11 Million", "url":"Iran", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Iraq", "pop":"36.42 Million", "url":"Iraq", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Ireland", "pop":"4.64 Million", "url":"Ireland", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Israel", "pop":"8.38 Million", "url":"Israel", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Italy", "pop":"60.8 Million", "url":"Italy", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Jamaica", "pop":"2.73 Million", "url":"Jamaica", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Japan", "pop":"126.96 Million", "url":"Japan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Jordan", "pop":"7.59 Million", "url":"Jordan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kazakhstan", "pop":"17.54 Million", "url":"Kazakhstan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kenya", "pop":"46.05 Million", "url":"Kenya", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kiribati", "pop":"112 Thousand", "url":"Kiribati", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kosovo", "pop":"1.8 Million", "url":"Kosovo", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kuwait", "pop":"3.89 Million", "url":"Kuwait", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Kyrgyzstan", "pop":"5.96 Million", "url":"Kyrgyzstan", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Laos", "pop":"6.8 Million", "url":"Laos", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Latvia", "pop":"1.98 Million", "url":"Latvia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Lebanon", "pop":"5.85 Million", "url":"Lebanon", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Lesotho", "pop":"2.14 Million", "url":"Lesotho", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Liberia", "pop":"4.5 Million", "url":"Liberia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Libya", "pop":"6.28 Million", "url":"Libya", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Liechtenstein", "pop":"38 Thousand", "url":"Liechtenstein", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Lithuania", "pop":"2.91 Million", "url":"Lithuania", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Luxembourg", "pop":"570 Thousand", "url":"Luxembourg", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Macedonia", "pop":"2.08 Million", "url":"Macedonia", "link":" ", "author":" ", 
			"facts":["a","b"]},
		{"name":"Madagascar", "pop":"24.24 Million", "url":"Madagascar", "link":" ", "author":" ", 
			"facts":["a","b"]},


		]
	};

/*
	//list of all countries recognized by United States 
	// images currently downloaded from PixaBay (royalty-free) or Flickr (links in notes)
	 
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
*/
	// pick a number
	var randNum = numberGenerator(countryObj.countries.length);
	//var randFact = numberGenerator(countryObj.countries[randNum].facts.length);
	//var randImg = numberGenerator(countryObj.countries[randNum].url.length);
	// search country on google maps 
	//console.log(countries[randNumber]);

	countryObj.countries["factNum"] = numberGenerator(countryObj.countries[randNum].facts.length); // MIGHT HAVE TO DO IN OVERRIDE.JS

	console.log("Name is " + countryObj.countries[randNum].name);
	console.log("Pop is " + countryObj.countries[randNum].pop);
	console.log("Length is " + countryObj.countries.length);
	console.log("Fact is " + countryObj.countries[randNum].facts[countryObj.countries.factNum]);


	return countryObj.countries[randNum];
	//return countries[randNum];
	//return "United+States"; 

	//chrome.tabs.update(null, {url: "http://google.com/maps/place/" + countries[randNumber]});
}

// function numberGenerator returns number between 0-194 
// Need to implement with variable parameter
function numberGenerator(n) {
	return Math.floor(Math.random() * n);

	//return Math.floor(Math.random() * 29);
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


