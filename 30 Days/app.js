document.addEventListener("DOMContentLoaded", function () {
    const habitInput = document.getElementById("habitInput");
    const calendarGrid = document.getElementById("calendarGrid");

    // Initialize calendar grid
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            const day = document.createElement("div");
            day.classList.add("day-box");
            day.addEventListener("click", toggleDay);
            calendarGrid.appendChild(day);
        }
    }
});

function toggleDay(event) {
    const dayBox = event.target;
    dayBox.classList.toggle("checked");

    // Check if the habit is completed for the week
    checkHabitCompletion();
}

function checkHabitCompletion() {
    const checkedBoxes = document.querySelectorAll(".day-box.checked");

    if (checkedBoxes.length === 7) {
        alert("Congratulations! You completed the habit for the week!");
        // You can add additional actions here, such as resetting the checkboxes.
    }

    if (checkedBoxes.length === 14) {
        alert("Congratulations! You completed the habit for two week, keep it up!");
        // You can add additional actions here, such as resetting the checkboxes.
    }
}
