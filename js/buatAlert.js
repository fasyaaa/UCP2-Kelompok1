document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Extracting form values
      var firstName = document.getElementById("fname").value;
      var lastName = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Displaying the SweetAlert
      Swal.fire({
        title: "Sent!",
        html: `First Name: ${firstName}<br>Last Name: ${lastName}<br>Email: ${email}<br>Message: ${message}`,
        icon: "success",
      });
    });
});
