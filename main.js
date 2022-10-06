const container=document.querySelector('.container');

function populate(size){
    container.style.setProperty('--size', size)
    for (let i=0; i<size*size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
}
populate(4);