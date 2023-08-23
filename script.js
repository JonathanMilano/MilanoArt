// Function to open the modal
function openModal(title, description, paper, size, year, imageSrc) {
    const modal = document.querySelector("#modal");
    const modalImage = document.querySelector("#modal-image");
    const modalTitle = document.querySelector("#modal-title");
    const modalDescription = document.querySelector("#modal-description");
    const modalDetails = document.querySelector("#modal-details");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalDetails.innerHTML = `${paper}<br>${size}<br>${year}`;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
}

// Close the modal when clicking on the modal overlay
const modal = document.querySelector("#modal");
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the ID "current-year"
const currentYearElement = document.querySelector('#current-year');

// Update the text content of the element with the current year
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = event.target;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(response => response.text())
      .then(result => {
        if (result === "success") {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("An error occurred. Please try again.");
        }
      });
});
