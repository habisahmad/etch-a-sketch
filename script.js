const grid = document.querySelector('#grid');

for(let i = 0; i < 16*16; i++){
    const content = document.createElement('div');
    content.classList.add('grid');
    content.style.border = '0.5px solid red'

    grid.appendChild(content)
}


grid.addEventListener('mouseover', function(e) {
    e.target.style.background = 'blue'

})


