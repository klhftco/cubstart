// BEGIN PART 2

// END PART 2

// BEGIN PART 3

let count = 0;

// END PART 3

// BEGIN PART 5

// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});

// END PART 6

taskName.addEventListener("input", () => {
  if (taskName.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }
});
