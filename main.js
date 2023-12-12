const container = document.querySelector('#container');
const btnContainer = document.querySelector('#btnContainer');
const btn = document.createElement('button');

btn.textContent = 'Create new grid';
btnContainer.classList.add('resetBtn');
btnContainer.append(btn);

let size = 10;

const createGrid = (size) => {
    for (i=0; i < (size); i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < size; j++) {
            const widthAndHeight = 800 / size;
            const gridCol = document.createElement('div');
            gridCol.classList.add('grid-col');
            gridCol.style.width = `${widthAndHeight}px`;
            // mouse listener to change box color
            gridCol.style.height = `${widthAndHeight}px`;
            gridCol.addEventListener('mouseenter', () => {
                gridCol.style.backgroundColor = 'black';
            });
            row.appendChild(gridCol);
        }
        
        container.appendChild(row);
    }
}

createGrid(size);

// Original Idea  
// function createGrid(gridSize) {
//     // Creates 256 divs within the container div. Adds event listener to turn divs black upon mouse entering.
//     for (i=0; i < (amtOfBoxes); i++){
//         const div = document.createElement('div');
//         div.addEventListener('mouseenter', () => {
//             div.style.backgroundColor = 'black';
//         })
//         div.textContent = `TEST`;
//         // div.style.width = (100% / gridSize);
//         // div.style.height = (100% / gridSize);
//         container.appendChild(div);
//     }   
// }