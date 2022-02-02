const req = new XMLHttpRequest();
req.onload = function() {
    console.log("Done with request!");
    let data = JSON.parse(this.responseText); 
    console.log("Price: ",data.ticker.price);
}

req.onerror = function(){
    console.log("ERROR!");
    console.log(this);//prints the request
}
req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();