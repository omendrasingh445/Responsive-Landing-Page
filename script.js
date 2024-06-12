// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Handle button click event
        console.log("Button clicked!");
      });
    });
  });
  
  // Add event listeners to the feature buttons
  document.addEventListener("DOMContentLoaded", function() {
    const featureButtons = document.querySelectorAll(".feature button");
    featureButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Handle feature button click event
        console.log("Feature button clicked!");
      });
    });
  });
  
  // Add event listeners