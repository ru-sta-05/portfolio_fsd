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

form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
});

