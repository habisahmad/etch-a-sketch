const grid = document.querySelector('#grid');
const slider = document.querySelector('#pixelslider')
var output = document.querySelector(".slider");
output.innerHTML = slider.value

slider.oninput = function(){
    output.innerHTML = this.value;
}

for(let i = 0; i < 16*16; i++){
    const content = document.createElement('div');
    content.classList.add('grid');
    content.style.border = '0.5px solid red'
    grid.appendChild(content)
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


