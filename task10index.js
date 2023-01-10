document.getElementById('submt').onmouseover= mover;
document.getElementById('submt').onmouseout= mout;
//document.querySelector('#submt').onclick=save;
//let nam=document.querySelectorAll('input');
function mover(){
    document.querySelector('#submt').value = "Click Me TO Submit";
}
function mout(){
    document.querySelector('#submt').value = 'Get A Call';
}
function print(event) {
    event.preventDefault();
    localStorage.setItem('userName',event.target.Name.value);
    localStorage.setItem('userEmail',event.target.Email.value);
    localStorage.setItem('userNumber',event.target.Phone.value);
    localStorage.setItem('userAppDate',event.target.Date.value);
    localStorage.setItem('userAppTime',event.target.Time.value);
        
    }
   
   