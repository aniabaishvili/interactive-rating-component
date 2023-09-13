
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".numbers button");
    const submitButton = document.querySelector(".btn");
    const thankDiv = document.querySelector(".thank");
    const ratingSpan = document.getElementById("rating");
    const containerDiv = document.querySelector(".container");
    
    

    let selectedRating = null;

    // Event listener for rating buttons
    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        selectedRating = index + 1;
        buttons.forEach(function (btn, i) {
            if (i === index) {
                btn.style.backgroundColor = "var(--Light-Orange)";
                btn.style.color = "var(--White)";
              } else {
                btn.style.backgroundColor = ""; // Reset background color
                btn.style.color = ""; // Reset text color
              }
            });
          
          
        
        

        // Toggle the selected class for the rating buttons
        buttons.forEach(function (btn, i) {
          btn.classList.toggle("selected", i <= index);
        });
      });
    });

    // Event listener for the submit button
    submitButton.addEventListener("click", function () {
      if (selectedRating !== null) {
        // Display the thank you message with the selected rating
        ratingSpan.textContent = selectedRating;
        thankDiv.style.display = "block";
        containerDiv.remove();
        thankDiv.classList.add("thank-visible");
        
        

        // Hide the rating buttons and submit button
        buttons.forEach(function (button) {
          button.style.display = "none";
        });
        submitButton.style.display = "none";

        // You can send the selected rating to your server here for further processing if needed
      } else {
        // Display an error message if no rating is selected
        alert("Please select a rating before submitting.");
      }
    });
  });

