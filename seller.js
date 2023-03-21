function print(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const usermail = document.getElementById("Email").value;
    let userDetail = { username, usermail};
    Post(userDetail);
    Get();
  }
  
  function Post(userDetail) {
    axios
      .post(
        "https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail",
        userDetail
      )
      .then((response) => {
        console.log(response);
        display(response.data, userDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function Get() {
    document.addEventListener("DOMContentLoaded", () => {    
      axios.get("https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail")
        .then((response) => {
          console.log(response);

          let totalprice=0;
          let list = document.querySelector("#display");
          list.innerHTML="";
          for (var i = 0; i < response.data.length; i++) {
            display(response.data[i]);
            totalprice += Number(response.data[i].username);
          }
          let total = document.querySelector("#total");
          if(total){
            total.innerHTML="YOUR TOTAL SELLING PRICE = "+totalprice;  
          }else{
            total= document.createElement("div");
            total.id = "total";
            total.innerHTML = "YOUR TOTAL SELLING PRICE = " + totalprice;
            let tprice = document.querySelector("#box1");
            tprice.appendChild(total);
          }
        });
        
    });
  }
  
  function display(response) {
    let li = document.createElement("li");
    let list = document.querySelector("#display");
    li.textContent = response.username + "-" + response.usermail;
  
    let delet = document.createElement("button");
    delet.className = "btn btn-danger btn-sm float-right delete";
    delet.appendChild(document.createTextNode("X"));
    delet.addEventListener("click", remove);
    li.appendChild(delet);
  
  
  
    list.appendChild(li);
  
    function remove(e) {
      if (confirm("are you sure ???")) {
        let id = response._id;
        list.removeChild(li);
        axios
          .delete(
            `https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail/${id}`
          )
          .then((res) => {
            console.log(res);
            Get();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
   
  }
  
  Get();
  