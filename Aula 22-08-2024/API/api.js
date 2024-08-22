// reqres.in

// https://reqres.in/api/users?page=2

let users = [];
let main = document.getElementById("main");

function getUsers(){
    let url = "https://reqres.in/api/users?page=2";
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        console.log(data.data);
        users = data.data;
        users.map((user) =>{
            let pEmail = document.createElement("p");
            pEmail.innerText = user.email;
            main.appendChild(pEmail);
            let pFirstName = document.createElement("p");
            pFirstName.innerText = user.first_name;
            main.appendChild(pFirstName);

            let lFirstName = document.createElement("p");
            lFirstName.innerText = user.last_name;
            main.appendChild(lFirstName);

            let imgFirstName = document.createElement("img");
            imgFirstName.src = user.avatar;
            main.appendChild(imgFirstName);
        })
    })
}

getUsers();