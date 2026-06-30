const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html"; 
}); 




function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });

  const section = document.getElementById(id);
  if (section) {
    section.style.display = "block";
  }
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name && email && message) {
    status.textContent = "✅ Thank you, your message has been sent!";
    status.style.color = "green";

    // Clear form
    document.getElementById("contactForm").reset();
  } else {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "red";
  }
});