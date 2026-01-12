/****************************************************
 * 1. PAGE LOAD – REMOVE LOADING SPINNER
 ****************************************************/
window.addEventListener("load", function () {
    const spinner = document.getElementById("loading-spinner");

    if (spinner) {
        spinner.style.display = "none";
    }
});


/****************************************************
 * 2. CONTACT FORM VALIDATION + BOOTSTRAP ALERTS
 ****************************************************/
const form = document.getElementById("contactForm");

// Create alert container dynamically (professional approach)
const alertDiv = document.createElement("div");
alertDiv.className = "container mt-3";
form.parentElement.prepend(alertDiv);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous alerts
    alertDiv.innerHTML = "";

    if (name === "" || email === "" || message === "") {
        showAlert("All fields are required!", "danger");
        return;
    }

    showAlert("Message sent successfully!", "success");
    form.reset();
});

function showAlert(message, type) {
    alertDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}


/****************************************************
 * 3. SCROLL TO TOP BUTTON
 ****************************************************/
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.style.display = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Load saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});