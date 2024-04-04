function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = taskInput.value;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(" "));
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
