// script.js

// Add event listeners to table rows for highlighting and displaying channel details
document.addEventListener("DOMContentLoaded", () => {
    const tables = document.querySelectorAll("table tbody");

    tables.forEach((tbody) => {
        const rows = tbody.querySelectorAll("tr");

        rows.forEach((row) => {
            row.addEventListener("click", () => {
                // Remove highlight from previously selected rows
                rows.forEach((r) => r.classList.remove("highlight"));

                // Highlight the selected row
                row.classList.add("highlight");

                // Extract channel details from the row
                const columns = row.querySelectorAll("td");
                const channelDetails = `
                    Channel 1: ${columns[0].textContent} (Number: ${columns[1].textContent})
                    Channel 2: ${columns[2].textContent} (Number: ${columns[3].textContent})
                `;

                // Display the channel details in an alert
                alert(channelDetails);
            });
        });
    });
});
