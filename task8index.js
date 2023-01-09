let add=document.querySelector('#addForm');
let itemlist=document.querySelector('#items');
let filter = document.querySelector('#filter');

add.addEventListener('submit', addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#item').value;
    let dItem = document.querySelector('#item-dis').value;
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(dItem));
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
function filterItem(e){
    let text=e.target.value.toLowerCase();
    let items=itemlist.querySelectorAll('li');
    Array.from(items).forEach(function(item){
        let itemName= item.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
        
    });
    
}