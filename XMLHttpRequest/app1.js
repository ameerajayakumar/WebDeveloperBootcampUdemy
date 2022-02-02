// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res => {
//     console.log("RESPONSE waiting to parse",res);
//     return res.json();
// })
// .then(data => {
//     console.log("DATA :::: ",data);
//     console.log("PRICE :::: ",data.ticker.price);

// })
// .catch(e => {
//     console.log("ERROR", e);
// })

//using async & await
const fetchBitcoinPrice = async () => {
    try{
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    const data = await res.json();
    console.log("PRICE ", data.ticker.price);
    }
    catch(e){
        console.log("ERROR CAUGHT IS: ", e)
    }
}
fetchBitcoinPrice();