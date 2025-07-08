let users = [
{
    username: "Dileep Kumar Singh",
    affiliation: "Jagran Lakecity University",
    image:'ds-image.jpg'
},
{
    username: "Ajay Bajaj",
    affiliation: "Software Infotech Pvt Ltd",
    image:'ds-image.jpg'
},
{
    username: "Sewaram Deshmukh",
    affiliation: "Bombey Soft Solutions",
    image:'ds-image.jpg'
},
{
    username: "Sachin Chouhan",
    affiliation: "Food Corporation of India",
    image:'ds-image.jpg'
},
{
    username: "Rajesh Tiwari",
    affiliation: "American Soft Solutions",
    image:'ds-image.jpg'
},

];
let mainBox = document.querySelector('.container')


users.forEach((user) => {
    let d = document.createElement('div')
    d.classList.add('item')
    d.setAttribute('draggable', 'true')
    d.innerHTML = `
    <img src=${user.image} alt="user image">
        <div style="line-height: .2; text-indent: 2px;">
            <h2>${user.username}</h2>
            <p>${user.affiliation}</p>
        </div>
        <i class="fa-solid fa-bars"></i>
    `
    mainBox.appendChild(d) 
    
});
let items = document.querySelectorAll('.item')
console.log(items);
items.forEach(item => {
    item.addEventListener('dragstart', (e)=>{
        e.stopPropagation()
        let selected = e.target
        console.log('Drag Started ', selected);
    
        mainBox.addEventListener('dragover', (e)=>{
            e.preventDefault()
            console.log('Drag Over Called');
        })
        mainBox.addEventListener('drop', (e)=>{
            console.log('Drop Called ',  e.target);
            mainBox.insertBefore(selected, e.target.nextSibling)
        })
    })
});




