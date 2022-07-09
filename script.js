const grid = document.querySelector('#grid');

for(let i = 0; i < 16*16; i++){
    const content = document.createElement('div');
    content.classList.add('grid');
    content.style.height = '31.25px'
    content.style.width = '31.25px'
    content.style.border = '0.5px solid red'
    content.style.display = 'grid'
    grid.appendChild(content)
}


function getCoordinates(event){
    var bounds = event.target.getBoundingClientRect();
    let x = event.clientX - bounds.left;
    let y = event.clientY - bounds.top;
} 

grid.addEventListener('mouseover', function(e) {
    e.target.style.background = 'blue'

})


