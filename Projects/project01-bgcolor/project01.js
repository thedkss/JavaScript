const body = document.querySelector('body')
const grayBox = document.getElementById('gray')

let container = document.querySelector('.container').children
container = Array.from(container)
// console.log(container);
container.forEach((item)=>{
    item.addEventListener('click', (e)=>{
    console.log(e.target.id);   
    body.style.backgroundColor = e.target.id
})
})
