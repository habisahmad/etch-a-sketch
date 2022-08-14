const grid = document.querySelector('#grid');

let val = 0
let isUsed = false;

document.getElementById("16x16").onclick = function() {
    //disable
    //this.disabled = true;
    for(let i = 0; i < 16*16; i++){
        const content = document.createElement('div');
        content.classList.add('grid');
        content.style.border = '0.5px solid red'
        content.setAttribute('style', 'flex: 1; flex-basis: 32px;')
        grid.appendChild(content)
    }
}

document.getElementById("32x32").onclick = function() {
    //disable
    //this.disabled = true;
    for(let i = 0; i < 32*32; i++){
        const content = document.createElement('div');
        content.classList.add('grid');
        content.style.border = '0.5px solid red'
        content.setAttribute('style', 'flex: 1; flex-basis: 16px;')
        grid.appendChild(content)
    }
}

function myFunc(){
    $('#grid div').empty()
}

const colorpicker = document.querySelector('#color');
const hexInput = document.querySelector('#hex')
const clearButton = document.querySelector('#clear');

let isTrue = false;

if(isTrue == false){ 
    grid.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black'; 
        clearButton.addEventListener('click', () =>{
            e.target.style.background = 'white'
        })
    })  
} // This if statement is used to make black the standard for when the user does not input a color.
colorpicker.addEventListener('input', () =>{
    let color = colorpicker.value
    hexInput.value = color;
    isTrue = true;
    grid.addEventListener('mouseover', function(e) {
        e.target.style.background = color; 
        clearButton.addEventListener('click', () =>{
            e.target.style.background = 'white'
        })
    })   
})


