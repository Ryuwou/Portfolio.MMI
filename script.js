document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".project-link");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const projectDetailsSection = document.getElementById("projectDetails");
  const projectContentContainer = document.getElementById("projectContent");
  const backButton = document.getElementById("backButton");
  const closeButton = document.querySelector(".close-button");
  const grid = document.querySelector(".grid");


  if (grid) {
    document.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      grid.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
  }

  function closeModal() {
    if (modal) {
      modal.style.opacity = "0";
      setTimeout(() => (modal.style.display = "none"), 300);
    }
  }


  projectLinks.forEach(link => {
    link.addEventListener("click", function (e) {

      if (link.href.includes("canva.com")) return;

      e.preventDefault();
      
      const projectItem = this.closest(".project-item");
      if (!projectItem) return;

      const title = projectItem.getAttribute("data-title");
      const filePath = projectItem.getAttribute("data-file");
      const description = projectItem.getAttribute("data-description");

  
      if (filePath && filePath !== "#") {
        window.location.href = filePath;
      } 

      else {
        modalTitle.textContent = title || "Projet";
        modalDescription.textContent = description || "Détails à venir...";
        modal.style.display = "block";
        setTimeout(() => modal.style.opacity = "1", 10);
      }
    });
  });


  if (closeButton) closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });


  const retourBtn = document.getElementById("retourButton");
  if (retourBtn) {
    retourBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }
});


function toggleDetails(btn) {
  const card = btn.closest(".affiche-card");
  const details = card?.querySelector(".affiche-details");

  if (details) {
    details.classList.toggle("show");
    btn.textContent = details.classList.contains("show") ? "Moins" : "Plus";
  }
}