document.addEventListener("DOMContentLoaded", function() {
    fetch("data.txt")
        .then(response => response.text())
        .then(data => {
            if (data.trim().length > 0) {
                const rows = data.trim().split("\n");
                let tableHTML = "<table><tr><th>Nama</th><th>NIM</th><th>Alamat Asal</th><th>Alamat Kos</th><th>Jenis Kelamin</th><th>No HP</th><th>Email</th></tr>";
                rows.forEach(row => {
                    const cols = row.split(",");
                    tableHTML += "<tr>";
                    cols.forEach(col => {
                        tableHTML += `<td>${col}</td>`;
                    });
                    tableHTML += "</tr>";
                });
                tableHTML += "</table>";
                document.getElementById("dataTable").innerHTML = tableHTML;
            } else {
                document.getElementById("dataTable").innerHTML = "No data available.";
            }
        })
        .catch(error => console.error("Error loading data:", error));
});
