
function print(event) {
    event.preventDefault();
   const UserName=event.target.Name.value;
   const UserEmail=event.target.Email.value;
   const userNumber=event.target.Phone.value;
       let userDetail={
        UserName,
        UserEmail,
        userNumber,};
        post();
    function post(){
        axios.post("https://crudcrud.com/api/f301d533620d4ff988405c702b6fc863/expences",userDetail)
        .then((response)=>{
            console.log(response)
            display(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
      //  localStorage.setItem(userDetail.UserName,JSON.stringify(userDetail));
     function get(){
      document.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/f301d533620d4ff988405c702b6fc863/expences")
        .then((response)=>{
            console.log(response)
                 for(var i=0; i<response.data.length; i++){
                display(response.data[i])
             }
               
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }
    
   
    
    function display(response){
    let dis=document.createElement('li');
    let listt=document.querySelector('#display');
    dis.textContent =response.UserName+' - '+response.UserEmail+' - '+response.userNumber;
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
   // localStorage.removeItem(userDetail.UserName);
    listt.removeChild(dis);
    document.getElementById('name').value = UserName;
    document.getElementById('email').value = UserEmail;
    document.getElementById('phone').value = userNumber;
    }
   dis.appendChild(edit);
    function removeItem(e) {
        if(e.target.classList.contains('delete')){
            if(confirm('are you sure ?')){
                let id = response._id;
                listt.removeChild(dis);
               // localStorage.removeItem(userDetail.UserName);
               axios.delete(`https://crudcrud.com/api/f301d533620d4ff988405c702b6fc863/expences/${id}`)
               .then((res)=>{
                   console.log(res);
               })
               .catch((err)=>{
                   console.log(err);
               })
            }
        }
    }
  }
get();