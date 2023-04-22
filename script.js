const users = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  const container = document.querySelector(".container");
  const usersList = container.querySelector(".users");
  const filterBtn = container.querySelector("#filter");
  const addBtn = container.querySelector("#add");
  const professionSelect = container.querySelector("#profession");
  const nameInput = container.querySelector("#name");
  const ageInput = container.querySelector("#age");
  const newProfessionInput = container.querySelector("#new-profession");
  
  // function to render the list of users
  function renderUsers(users) {
    let html = "";
    users.forEach((user) => {
      html += `<div class="card">
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.profession}</p>
      </div>`;
    });
    usersList.innerHTML = html;
  }
  
  // initial rendering of users list
  renderUsers(users);
  
  // function to filter users by profession
  function filterUsersByProfession(users, profession) {
    return users.filter((user) => user.profession === profession);
  }
  
  // add user function
  function addUser() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const profession = newProfessionInput.value.trim();
  
    if (!name || !age || !profession) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession,
    };
  
    users.push(newUser);
  
    renderUsers(users);
    nameInput.value = "";
    ageInput.value = "";
    newProfessionInput.value = "";
  }
  
  // event listeners
  filterBtn.addEventListener("click", () => {
    const selectedProfession = professionSelect.value;
  
    if (!selectedProfession) {
      alert("Please select a profession before clicking the button.");
      return;
    }
  
    const filteredUsers = filterUsersByProfession(users, selectedProfession);
    renderUsers(filteredUsers);
  });
  
  addBtn.addEventListener("click", addUser);