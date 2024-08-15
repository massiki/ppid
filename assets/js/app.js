function toggleForm() {
  const selectElement = document.getElementById('kuasa');
  const hiddenForm = document.getElementById('hiddenForm');

  if (selectElement.value == "2") {
    hiddenForm.style.display = "block";
  } else {
    hiddenForm.style.display = "none";
  }
}