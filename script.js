// Load reports from LocalStorage on page load
window.onload = function () {
  let savedReports = JSON.parse(localStorage.getItem("ewasteReports")) || [];
  savedReports.forEach(report => addReportToTable(report));
};

// Handle form submission
document.getElementById("ewasteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let device = document.getElementById("device").value;
  let location = document.getElementById("location").value;
  let date = document.getElementById("date").value;

  let report = { device, location, date };

  // Save to LocalStorage
  let reports = JSON.parse(localStorage.getItem("ewasteReports")) || [];
  reports.push(report);
  localStorage.setItem("ewasteReports", JSON.stringify(reports));

  // Add to table
  addReportToTable(report);

  // Clear form
  document.getElementById("ewasteForm").reset();
});

// Add report to table
function addReportToTable(report) {
  let tableBody = document.getElementById("wasteBody");
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${report.device}</td>
    <td>${report.location}</td>
    <td>${report.date}</td>
  `;

  tableBody.appendChild(row);
}

// Clear all reports
function clearReports() {
  localStorage.removeItem("ewasteReports");
  document.getElementById("wasteBody").innerHTML = "";
}

// Scroll to form
function scrollToForm() {
  document.getElementById("report").scrollIntoView({ behavior: "smooth" });
}

