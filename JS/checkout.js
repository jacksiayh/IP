document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Clear the input fields
        clearForm();

        window.location.href = 'redirect.html';
    });

    // Function to clear the form fields, excluding the submit button
    function clearForm() {
        var formInputs = form.querySelectorAll('input:not([type="submit"])');
        formInputs.forEach(function (input) {
            input.value = '';
        });
    }

    if (localStorage.getItem('redirected') === 'true') {
        // Display an alert indicating successful transaction
        alert('Successful transaction!');

        // Reset the 'redirected' variable to false
        localStorage.setItem('redirected', 'false');
    }
});