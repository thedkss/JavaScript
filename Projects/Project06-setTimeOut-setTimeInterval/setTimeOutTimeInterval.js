// const sayDileep = function(){
//     console.log("Dileep");
// }
// const stopBtn = document.querySelector('#stop')
// const changeH1Text = function(){
//     document.querySelector('h1').innerHTML = 'Learing JavaScript is fun'
// }
// // setTimeout(()=>{
// //      console.log("Dileep");
// // }, 2000)
// // setTimeout(sayDileep, 2000)
// const changeH1SetTime = setTimeout(changeH1Text, 2000)
// stopBtn.addEventListener('click', ()=>{
//     clearTimeout(changeH1SetTime)
// })

// const intervalId = setInterval(() => {
    //     console.log("Dileep");
    // }, 2000);
    
    // clearInterval(intervalId)

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
    // console.log(Math.floor(Math.random() * 16));
}
// console.log(randomColor());
let intervalId 
const startChngingColor =  function(){
    if (!intervalId) {
        intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
        }, 1000);
    }
}
const stopChngingColor =  function(){
    clearInterval(intervalId)
    intervalId = null
}

startBtn.addEventListener('click',startChngingColor)
stopBtn.addEventListener('click',stopChngingColor)
