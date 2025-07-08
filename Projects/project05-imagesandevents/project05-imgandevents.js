// const images = document.querySelector('#images')
// images.addEventListener('click', (e)=>{
//     // alert("LIST")
//     console.log('List!!!');
    
// }, false)

// const hourse = document.querySelector('#hourse')
// hourse.addEventListener('click', (e)=>{
//     // alert("HOURSE")
//     e.stopPropagation() // Stop Bubbling or Capturing events 
//     console.log('Hourse!!!');
    
// }, false)

document.querySelector('#images').addEventListener('click', (e)=>{
    // console.log(e.target.id);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName == 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})
    
    
    