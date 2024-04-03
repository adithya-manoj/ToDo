let todo = () => {
    let value = document.getElementById('item').value.trim(); 

    if (value === '') {
        alert('Please enter a Task !');
        return; 
    }

    let check = document.createElement('input');
    check.type = 'checkbox';

    let element = document.createElement('li');
    let text = document.createTextNode(value);

    element.appendChild(check);
    element.appendChild(text);

    let close = document.createElement('i');
    close.className = 'trash fa fa-trash';

    element.appendChild(close);

    element.className = 'list';

    let container = document.getElementById('containerbody');
    container.appendChild(element);

    close.addEventListener('click', () => {
        element.remove();
    });

    document.getElementById('item').value = '';
};
