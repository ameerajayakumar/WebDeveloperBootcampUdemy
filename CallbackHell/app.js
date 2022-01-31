// setTimeout(() =>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() =>{
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() =>{
//     document.body.style.backgroundColor = 'yellow';
//     setTimeout(() =>{
//     document.body.style.backgroundColor = 'green';
//     setTimeout(() =>{
//     document.body.style.backgroundColor = 'blue';
//     setTimeout(() =>{
//     document.body.style.backgroundColor = 'violet';
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)

// const delayedColorChange = (color,delay,doNext)=> {
// setTimeout(() =>{
//   document.body.style.backgroundColor = color;
//   doNext && doNext();
// },delay)
// }

// delayedColorChange('red',1000,() =>{
//     delayedColorChange('orange',1000,() =>{
//     delayedColorChange('yellow',1000,() =>{
//     delayedColorChange('green',1000,() =>{
//     delayedColorChange('blue',1000,() =>{
//     delayedColorChange('purple',1000,() =>{
// })
// })
// })
// })
// })
// })

const delayedColorChange = (color,delay) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

// delayedColorChange('red', 1000)
// .then(() => delayedColorChange('orange', 1000))
// .then(() => delayedColorChange('yellow', 1000))
// .then(() => delayedColorChange('green', 1000))
// .then(() => delayedColorChange('blue', 1000))
// .then(() => delayedColorChange('indigo', 1000))
// .then(() => delayedColorChange('purple', 1000))

async function rainbow(){
  await delayedColorChange('red', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('yellow', 1000)
  await delayedColorChange('green', 1000)
  await delayedColorChange('blue', 1000)
  await delayedColorChange('indigo', 1000)
  await delayedColorChange('purple', 1000)

}

// rainbow().then(() => { console.log("End of rainbow!"); })

async function printRain(){
  await rainbow();
  console.log("End of rainbow!");
}

printRain();