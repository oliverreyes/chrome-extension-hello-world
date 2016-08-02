
/* var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

function dragon(){
while (slaying) {
    if (youHit) {
        console.log("Congrats you hit!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You killed it!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("Dragon ate you");
        slaying = false;
    }
}
}

dragon();
*/

function getText(){
    return document.body.innerText;
}

console.log(getText());