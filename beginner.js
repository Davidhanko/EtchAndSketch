const container     = document.querySelector(".container")
const containerSize=600
const configSize = document.querySelector(".configSize")
const infoBox= document.querySelector(".inputText");
const resetButton= document.querySelector(".reset")
let size = configSize.value;


resetButton.addEventListener("click", () => resetGrid())
configSize.addEventListener("input", function writeSize() {
    infoBox.textContent = `${this.value}x${this.value}`;
}, false);
configSize.addEventListener("change", function writeSize() {
    resetGrid()
}, false);

createGrid(size);
onCreation();

function changeSize(){
    size = configSize.value;
}
function removeGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
}
function resetGrid(){
    changeSize()
    removeGrid()
    createGrid(size)
    onCreation()

}
function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.minWidth = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            container.appendChild(createDiv(containerSize / (size)));
        }
    }
}
function onCreation() {
    const divs = document.querySelectorAll(".box")
    divs.forEach(div => {
        div.addEventListener('mouseover', event => {
            // When the cursor enters the div, change its background color to black
            event.target.style.backgroundColor = 'black';
        });
    });
}


