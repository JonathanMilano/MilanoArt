// Function to open the modal
function openModal(title, description, paper, size, year, imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalDetails = document.getElementById("modal-details");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalDetails.innerHTML = `${paper}<br>${size}<br>${year}`;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when clicking on the modal overlay
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the ID "current-year"
const currentYearElement = document.getElementById('current-year');

// Update the text content of the element with the current year
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}