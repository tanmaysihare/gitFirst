async function print(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const usermail = document.getElementById("Email").value;
    let userDetail = { username, usermail };
    await post(userDetail);
  }
  
  async function post(userDetail) {
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail",
        userDetail
      );
      console.log(response);
      display(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  async function get() {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail"
      );
      console.log(response);
      // let total = document.createElement("div");
      //total.id = "total";
     // let totalprice = 0;
      for (var i = 0; i < response.data.length; i++) {
        display(response.data[i]);
       // totalprice += Number(response.data[i].username);
      }
     // total.innerHTML = "YOUR TOTAL SELLING PRICE = " + totalprice;
      //let tprice = document.querySelector("#box1");
    //  tprice.appendChild(total);
    } catch (err) {
      console.log(err);
    }
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
  
    async function remove(e) {
      if (confirm("are you sure ???")) {
        let id = response._id;
        list.removeChild(li);
        try {
          const res = await axios.delete(
            `https://crudcrud.com/api/829801be5e904286b7c490a092fce107/userdetail/${id}`
          );
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  
 
  