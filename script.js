document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      displayAlert("Please fill in all fields.", "error");
      return;
    }
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    displayAlert("Thank you for contacting us! We'll get back to you soon.", "success");
  });
  
  function displayAlert(message, type) {
    var alertElement = document.createElement
  }