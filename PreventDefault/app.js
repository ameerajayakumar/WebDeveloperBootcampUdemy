const form = document.querySelector("#shelterForm");
const input = document.querySelector("#dogName");
const list = document.querySelector("#dogs");

console.log(form)
form.addEventListener("submit", function(e){
   e.preventDefault();
   const dog = input.value;
   const newLi = document.createElement("LI");
   newLi.innerText = dog;
   list.append(newLi);
   input.value = "";
})