let add=document.querySelector('#addForm');
let itemlist=document.querySelector('#items');

add.addEventListener('submit', addItem);
itemlist.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#item').value;
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    let dbtn= document.createElement('button');
    let ebtn = document.createElement('button');
    dbtn.className='btn btn-danger btn-sm float-right delete';
    ebtn.className='btn btn-success btn-sm float-right';
    dbtn.appendChild(document.createTextNode('X'));
    ebtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(dbtn);
    li.appendChild(ebtn);
    itemlist.appendChild(li);
}
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure ?')){
            let li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}