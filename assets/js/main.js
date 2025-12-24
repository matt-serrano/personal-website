const viewBtn = document.getElementById("viewResumeBtn");
const modal = document.getElementById("resumeModal");
const closeBtn = document.getElementById("closeResumeModal");

// Open modal
viewBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent background scroll
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  closeModal();
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}
