function print(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const usermail = document.getElementById("Email").value;
    let userDetail = { username, usermail};
    Post(userDetail);
  }
  
  function Post(userDetail) {
    axios
      .post(
        "https://crudcrud.com/api/2e47421d337c44a29d15893a03f301c3/userdetail",
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
      let total= document.createElement("div");
        total.id= "total";
       
      
      axios.get("https://crudcrud.com/api/2e47421d337c44a29d15893a03f301c3/userdetail")
        .then((response) => {
          console.log(response);
          let totalprice=0;
          for (var i = 0; i < response.data.length; i++) {
            display(response.data[i]);
            totalprice += Number(response.data[i].username);
          }
          total.innerHTML="YOUR TOTAL SELLING PRICE = "+totalprice;
        });
        let tprice=document.querySelector("#box1");
        tprice.appendChild(total);
    });
  }
  
  function display(response) {
    let li = document.createElement("li");
    let list = document.querySelector("#display");
    li.textContent =
      response.username + "-" + response.usermail;
  
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
            `https://crudcrud.com/api/2e47421d337c44a29d15893a03f301c3/userdetail/${id}`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
   
  }
  
  Get();
  