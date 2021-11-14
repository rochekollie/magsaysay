window.onload = function () {

  // Get all h2 elements and append the array to the select element with the id "sort-list" within an option element.

  let h2 = document.getElementsByTagName("h2");
  let select = document.getElementById("sort-list");
  let defaultOption = document.createElement("option");
  defaultOption.text = "Select merch";
  select.add(defaultOption);

  // Select and disable the default option.
  defaultOption.selectedIndex = 0;
  defaultOption.disabled = true;
  defaultOption.selected = true;

  // Add the h2 elements to the select element.
  for (let heading of h2) {
    let option = document.createElement("option");
    option.text = heading.innerText;
    select.add(option);
  }

  // Add the event listener to the select element.
  select.addEventListener("change", function () {
    // Get the selected option.
    let selectedOption = this.options[this.selectedIndex];

    // Get the selected option's text.
    let selectedOptionText = selectedOption.text;

    // Get all h2 elements.
    let sectionTitle = document.getElementsByTagName("h2");

    // Loop through the h2 elements and check if the text of the selected option matches the text of the h2 element.
    for (let heading of sectionTitle) {
      if (heading.innerText === selectedOptionText) {
        // If the text matches, scroll to the h2 element.
        heading.scrollIntoView();
      }
    }
  });
};
