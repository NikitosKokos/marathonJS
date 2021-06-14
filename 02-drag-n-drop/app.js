const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragover = (e) => {
    e.preventDefault();
}

const dragenter = (e) => {
    e.target.classList.add('hovered');
}

const dragleave = (e) => {
    e.target.classList.remove('hovered');
}

const dragdrop = (e) => {
    e.target.classList.remove('hovered');
    e.target.append(item);
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});

const dragstart = (e) => {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    });
}

const dragend = (e) => {
    e.target.classList.remove('hold', 'hide');
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);