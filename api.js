var ul = document.querySelector("ul");

function github() {
  fetch("https://api.github.com/users/CarolinaJIMENEZ90/repos")
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      var data = await res.json();
      data.map((item) => {
        let li = document.createElement("li");
        li.innerHTML = ` <strong>${item.name}</strong> <span>url: ${item.url}</span>`;

        ul.appendChild(li);
      });
    })
    .catch((e) => console.log(e));
}

github();