document.querySelector('.title').innerHTML += ' James'

const rows = document.querySelectorAll('.row');
const colors = ['gold', 'purple', 'navyblue', 'green', 'orangered', 'red'];

const onDragOver = (e) => {
    e.preventDefault();
}

const onDrop = (e) => {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    e.target.appendChild(draggedCard);
    console.log('Dropped the element!');
}

rows.forEach((row, index) => {
    const label = row.querySelector('.label');
    label.style.backgroundColor = colors[index];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})