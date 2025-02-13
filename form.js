"use strict";

/* Wait for the window to finish loading before executing the function */
window.addEventListener("load", function()
{
    /* Initialize EmailJS */
    emailjs.init("NKICBVMFnItHvIN6z");

    /* Get necessary elements from the DOM */
    var submitButton = document.getElementById("submit");
    var clearButton = document.getElementById("cancel");

    /* Event listener for the button click to submit order */
    submitButton.addEventListener("click", function (e)
    {

        /* Prevent default value of form submission */
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        /* Only succeed if the required fields are filled out */
        if (name !== "" && email !== "" && message !== "")
        {
            /* Send the email using EmailJS */
            var templateParams =
                {
                    name: name, email: email, message: message
                };

            emailjs.send("service_8k8xc2g","template_f0fnsre", templateParams).then(function (response)
                {
                    /* Send alert for valid info */
                    alert("Your information has been submitted");

                    /* Clear the form */
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                },
                function (error)
                {
                    alert("There was an error sending your message. Please try again.");
                    console.log("Error:", error);
                });
        }

        /* Alert the user if any input fields are incomplete */
        else
        {
            alert("Please enter your name, email, and message.");
        }
    });

    /* Event listener for the button click to cancel */
    clearButton.addEventListener("click", function (e)
    {
        /* Prevent default value of form submission */
        e.preventDefault();

        /* Clear the form */
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});