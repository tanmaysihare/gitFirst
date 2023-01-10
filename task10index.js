document.getElementById('submt').onmouseover= mover;
document.getElementById('submt').onmouseout= mout;
//let nam=document.querySelectorAll('input');
function mover(){
    document.querySelector('#submt').value = "Click Me TO Submit";
}
function mout(){
    document.querySelector('#submt').value = 'Get A Call';
}
function print(event) {
    event.preventDefault();
   // let multid=[];
   const UserName=event.target.Name.value;
   const UserEmail=event.target.Email.value;
   const userNumber=event.target.Phone.value;
   const userAppDate=event.target.Date.value;
   const userAppTime=event.target.Time.value;
    let userDetail={
        UserName,
        UserEmail,
        userNumber,
        userAppDate,
        userAppTime,};
    localStorage.setItem(userDetail.UserEmail,JSON.stringify(userDetail));
    let dis=document.createElement('li');
    let listt=document.querySelector('#display');
    dis.textContent =userDetail.UserName+' - '+userDetail.UserEmail+' - '+userDetail.userNumber+' - '+userDetail.userAppDate+' - '+userDetail.userAppTime;
   listt.appendChild(dis);
   let dbtn= document.createElement('button');
   dbtn.className='btn btn-danger btn-sm float-right delete';
   dbtn.appendChild(document.createTextNode('X'));
   dbtn.addEventListener('click',removeItem);
   dis.appendChild(dbtn);
    }
    function removeItem(e) {
        if(e.target.classList.contains('delete')){
            if(confirm('are you sure ?')){
                let listt=document.querySelector('#display');
                let dis = document.querySelector('li');
                listt.removeChild(dis);
                let x=document.querySelector('#email').value;
                localStorage.removeItem(x);
            }
        }
    }