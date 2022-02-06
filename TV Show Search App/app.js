const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function(e){
    deleteImages();
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params : {q : searchTerm}}; // const config = { params : {q : searchTerm}, headers: {}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    createImages(res.data);
   //one way of doing this is -->  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    form.elements.query.value = "";
})

const createImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
    let img = document.createElement("IMG");
    img.src = result.show.image.medium;
    document.body.append(img);
    }
}
}

const deleteImages = () => {
    const imgs = document.querySelectorAll("IMG");
    for(let img of imgs){
        img.remove();
    }
}