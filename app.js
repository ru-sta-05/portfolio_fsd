//toggle theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "Dark Mode";
    } else {
        themeBtn.textContent = "Light Mode";
    }
});

//validate form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check required fields
    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill in all required fields.");
        return;
    }

    // Check email format
    if (!email.includes("@")) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return;
    }

    // Successful submission for assignment/demo
    event.preventDefault();

    alert("Form submitted successfully!");

    form.reset();
});
