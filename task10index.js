document.getElementById('submt').onmouseover= mover;
document.getElementById('submt').onmouseout= mout;
document.querySelector('#submt').onclick=save;
let name=document.querySelector('#name');
function mover(){
    document.querySelector('#submt').value = "Click Me TO Submit";
}
function mout(){
    document.querySelector('#submt').value = 'Get A Call';
}
function print(event) {
    event.preventDefault();
     console.log(event.target.Name.value);
     console.log(event.target.Email.value);
     console.log(event.target.Phone.value);
     console.log(event.target.Date.value);
     console.log(event.target.Time.value);      
    }
    function save() {
      localStorage.setItem('Name',name.value);
    }
   