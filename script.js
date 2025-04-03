// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
  const textElement = document.getElementById("dynamic-text");
  textElement.textContent = "The text has been changed dynamically!";
  textElement.classList.add("highlight");
});

// Add a new element dynamically
document.getElementById("add-element-btn").addEventListener("click", () => {
  const container = document.getElementById("new-element-container");
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new dynamically added element.";
  container.appendChild(newElement);
});
