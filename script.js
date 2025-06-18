function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill out all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// Dynamic To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.remove(); // Remove task on click

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
