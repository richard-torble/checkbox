const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if user has shift key down and check they are checking list item
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop over all checkboxes
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
