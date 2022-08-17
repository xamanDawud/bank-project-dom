document.getElementById("submit-btn").addEventListener("click", function() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value === "xaman@gmail.com" && password.value === "123") {
        window.location.href = "bank.html";
    } else {
        alert("You are not real User");
    }
});