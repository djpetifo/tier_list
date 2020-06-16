document.querySelector('.title').innerHTML += ' Petifort'

const cards = document.querySelectorAll('.card');
const addCard = document.querySelector('#addCard');

/* Add card logic */
const addcardToBank = (e) => {
    const card = createCard();
    const bank = document.querySelector('#bank');
    bank.appendChild(card);
}

addCard.onclick = addcardToBank;

/* Card logic */
const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('draggable', 'true');
    card.id = Date.now();
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
    card.onclick = deleteCard;
    appendImage(card);
    return card;
}

const appendImage = (card) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/x-png,image/gif,image/jpeg');
    input.style.visibility = "hidden";
    input.onchange = () => {
        const image = new Image(100, 70);
        const file = input.files[0];
        console.log(file);

        const reader = new FileReader();
        reader.onload = (e) => {
            image.src = e.target.result;
            image.style.pointerEvents = 'none';
            card.appendChild(image);
        }
        reader.readAsDataURL(file);
    }
    input.click();

}

const deleteCard = (e) => {
    const willDeleteCard = confirm('Do you want to delete this card?');
    if(willDeleteCard){
        e.target.remove();
    }
}

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