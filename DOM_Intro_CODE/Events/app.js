const inp = document.querySelector('input');
const h1 = document.querySelector('h1');
inp.addEventListener('input', function(e){
  h1.innerText= `Welcome, ${inp.value}`;
  if(inp.value === '')
  h1.innerText= 'Enter Your Username';
})