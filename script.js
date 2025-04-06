function handleFormSubmit(event) {
  event.preventDefault();
  const course = document.getElementById("course").value;
  const location = document.getElementById("location").value;
  alert("Searching scholarships for " + course + " in " + location);
  return false;
}

function donate(name) {
  alert("Thank you for choosing to support " + name + "!");
}
