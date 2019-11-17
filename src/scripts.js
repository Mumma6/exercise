console.log("startar...");

const tablebody = document.querySelector("#my-table > tbody");
const titleDiv = document.getElementById("title-info");

// Make AJAX request and populate table
function loadData() {
  const request = new XMLHttpRequest();

  // Make a Get request to the json data
  request.open("get", "./data.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateData(json);
    } catch (error) {
      console.log(error);
    }
  };
  request.send();
}

// Create table with json data
function populateData(json) {
  const items = json.lists;
  const h1 = document.createElement("h1");
  h1.innerHTML = `<h1>${json.title}</h1>`;

  const h3 = document.createElement("h3");
  h3.innerHTML = `<h3>${json.description}</h3>`;

  const hr = document.createElement("hr");

  // All the lists of the json object "list-1, list-2, list-3"
  console.log(items);
  // Each List. 3 in total
  items.forEach(row => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = `<h2>${row.title}</h2>`;

    // Each item from the list. (4 in totalt for each list)
    row.items.forEach(cell => {
      const td = document.createElement("td");
      const img = document.createElement("img");
      img.src = cell.image;

      const div = document.createElement("div")
     
      div.appendChild(img)
      div.innerHTML = `<p>${cell.id}</p>`
      div.insertAdjacentElement("afterbegin", img)
      
      td.appendChild(div);
      tr.appendChild(td);

    });

    // ta bort tablehead o kör vanliga divvar
    titleDiv.appendChild(h1);
    titleDiv.appendChild(hr);
    titleDiv.appendChild(h3);

    tablebody.appendChild(td);
    tablebody.appendChild(tr);
  });
}

// Load the function when windows load
document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
