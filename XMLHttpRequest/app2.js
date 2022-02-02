// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res => {
//     console.log("PRICEYYY: ",res.data.ticker.price);
// })
// .catch(e => {
//     console.log(e);
// })

// const fetchBitcoinPrice = async () => {
//     try{
//     const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
//     console.log("PRICE ", res.data.ticker.price);
//     }
//     catch(e){
//         console.log("ERROR CAUGHT IS: ", e)
//     }
// }
// fetchBitcoinPrice();

//click button to get new jokes & add them to a list
const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    const newLi = document.createElement("LI");
    newLi.append(jokeText);
    list.append(newLi); 
}
const getDadJokes = async () => {
     const config = { headers: {Accept: 'application/json' } };
     const joke = await axios.get("https://icanhazdadjoke.com/",config);
     return joke.data.joke;
    
}
const list = document.querySelector("#jokes");
const button = document.querySelector("button");
button.addEventListener("click", addNewJoke);