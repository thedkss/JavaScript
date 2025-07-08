const imgBox = document.querySelector('.imageBox')
// console.log(imgBox);
let whiteBoxs = document.getElementsByClassName('whiteBox')
// console.log(whiteBoxs);
whiteBoxs = Array.from(whiteBoxs)
// console.log(whiteBoxs);

imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag Start Triggered");
    setTimeout(() => {
            e.target.setAttribute('display','none')
    }, 0);
})

imgBox.addEventListener('dragend', (e) => {
    console.log("Drag End Triggered");
})

whiteBoxs.forEach(whiteBox => {
    whiteBox.addEventListener('dragover', (e) => {
    e.preventDefault()
    console.log("Drag Over Triggered");
        
    })
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Drag Leave Triggered");
        e.target.removeAttribute('style','background: red; ')
    })
    whiteBox.addEventListener('dragenter', (e) => {
        console.log("Drag Enter Triggered");
        e.target.setAttribute('style','background: red; ')
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop Triggered");
        console.log(e.target);
        e.target.removeAttribute('style','background: red; ')
        imgBox.setAttribute('display','block')
        e.target.append(imgBox)

    })
});
