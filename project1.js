
function print(event) {
    event.preventDefault();
   const UserName=event.target.Name.value;
   const UserEmail=event.target.Email.value;
   const userNumber=event.target.Phone.value;
       let userDetail={
        UserName,
        UserEmail,
        userNumber,};
    localStorage.setItem(userDetail.UserName,JSON.stringify(userDetail));
    let dis=document.createElement('li');
    let listt=document.querySelector('#display');
    dis.textContent =userDetail.UserName+' - '+userDetail.UserEmail+' - '+userDetail.userNumber;
   listt.appendChild(dis);
   let dbtn= document.createElement('button');
   dbtn.className='btn btn-danger btn-sm float-right delete';
   dbtn.appendChild(document.createTextNode('X'));
   dbtn.addEventListener('click',removeItem);
   dis.appendChild(dbtn);
   let edit=document.createElement('button');
   edit.className='btn btn-success btn-sm float-right';
   edit.appendChild(document.createTextNode('edit'));
   edit.onclick = () => {
    localStorage.removeItem(userDetail.UserName);
    listt.removeChild(dis);
    document.getElementById('name').value = UserName;
    document.getElementById('email').value = UserEmail;
    document.getElementById('phone').value = userNumber;
    }
   dis.appendChild(edit);
    function removeItem(e) {
        if(e.target.classList.contains('delete')){
            if(confirm('are you sure ?')){
                listt.removeChild(dis);
                localStorage.removeItem(userDetail.UserName);
            }
        }
    }
}