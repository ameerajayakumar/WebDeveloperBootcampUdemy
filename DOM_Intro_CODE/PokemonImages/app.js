//const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

const div = document.querySelector('#container');

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let i=1;i<=100;i++){
    const poke = document.createElement('div');
    const label = document.createElement('span');
    poke.classList.add('pokemon')
    label.innerText=`#${i}`;
    const image = document.createElement('img');
    image.src = `${baseURL}${i}.png`;
    poke.appendChild(image);
    poke.appendChild(label);
    div.append(poke);
}