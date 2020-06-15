document.querySelector('.title').innerHTML += ' Petifort'

const cards = document.querySelectorAll('.card');

const onDragStart = (e) => {
    console.log('Draggin the element!')
    e.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        e.target.style.visibility = "hidden";
    }, 50)
}

const onDragEnd = (e) => {
    e.target.style.visibility = "visible";
    console.log('End of drag!')
}

cards.forEach(card => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})