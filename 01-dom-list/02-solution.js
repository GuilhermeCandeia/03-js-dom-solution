function displayUsers(users) {
  // 1
  const div = document.getElementById("app");
  const ul = document.createElement("ul");
  div.appendChild(ul);

  // 2
  users.forEach((item, i) => {
    // 3
    const isEven = i % 2 === 0;
    const className = isEven ? "even" : "odd";
    ul.innerHTML += `<li class="${className}"> ${item}</li>`;
  });
};




/* Environment setup. Do not modify the below code. */
/****************************************************/
window.displayUsers = displayUsers;
/****************************************************/