const grid = document.querySelector('#grid');
//const content = document.createElement('div');

grid.addEventListener('mouseover', function(e) {
    console.log(e)
    //for(let i = 0; i < 16; i++){
        const content = document.createElement('div');
        content.classList.add('grid');
        content.style.height = '31.25px'
        content.style.width = '31.25px'
        content.style.border = '2px solid red'
        content.style.display = 'flex'
        content.style.flexDirection = 'row'
        grid.appendChild(content)
})

content.addEventListener('mouseover', function(e){
    e.target.style.background = 'red'
})
