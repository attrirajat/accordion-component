function openTab(event) {
  const clickedAccordion = event.currentTarget;
  const panel = clickedAccordion.nextElementSibling;

  const allPanels = document.querySelectorAll(".panel");
  allPanels.forEach((otherPanel) => {
    if (otherPanel !== panel && otherPanel.style.display === "block") {
      otherPanel.style.display = "none";
    }
  });

  // Toggle the clicked panel
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
