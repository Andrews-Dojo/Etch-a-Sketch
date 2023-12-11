// Creates 256 divs within the container div
for (i=0; i<256; i++){
    const body = document.querySelector('#container');
    const div = document.createElement('div');
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black';
    })
    div.textContent = `TEST`;
    div.style.width = '50px';
    div.style.height = '50px';
    body.appendChild(div);
}



