// Table 1 Data
const tableData = {
  A1: 41, A2: 18, A3: 21, A4: 63, A5: 2, A6: 53, A7: 5, A8: 57, A9: 60,
  A10: 93, A11: 28, A12: 3, A13: 90, A14: 39, A15: 80, A16: 88,
  A17: 49, A18: 60, A19: 26, A20: 28
};

// Populate Table 1
const table1Body = document.querySelector("#table1 tbody");
Object.entries(tableData).forEach(([index, value]) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${index}</td><td>${value}</td>`;
  table1Body.appendChild(row);
});

// Compute Table 2 values
const alpha = tableData["A5"] + tableData["A20"];
const beta = Math.floor(tableData["A15"] / tableData["A7"]);
const charlie = tableData["A13"] * tableData["A12"];

// Populate Table 2 values
document.getElementById("alphaValue").textContent = alpha;
document.getElementById("betaValue").textContent = beta;
document.getElementById("charlieValue").textContent = charlie;
