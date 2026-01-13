let modal = document.getElementById("appointmentModal");
let bookBtn = document.getElementById("bookBtn");
let closeBtn = document.getElementById("closeBtn");
let confirmBtn = document.getElementById("confirmBtn");

bookBtn.onclick = function () {
    modal.style.display = "flex";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

confirmBtn.onclick = function () {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!name || !phone || !doctor || !date || !time) {
        alert("Please fill all details");
        return;
    }

    alert(
        "Appointment Confirmed!\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Doctor: " + doctor + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

    modal.style.display = "none";

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("doctor").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
};

