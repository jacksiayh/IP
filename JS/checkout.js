document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Clear the input fields
        clearForm();

        // Alert the user about the successful payment
        alert('Payment successful! Thank you for your purchase.');
    });

    // Function to clear the form fields, excluding the submit button
    function clearForm() {
        var formInputs = form.querySelectorAll('input:not([type="submit"])');
        formInputs.forEach(function (input) {
            input.value = '';
        });
    }
});