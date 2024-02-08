document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        clearForm();

        window.location.href = 'redirect.html';
    });

    function clearForm() {
        var formInputs = form.querySelectorAll('input:not([type="submit"])');
        formInputs.forEach(function (input) {
            input.value = '';
        });
    }

    if (localStorage.getItem('redirected') === 'true') {
        alert('Successful transaction!');

        localStorage.removeItem('shoppingCart');

        localStorage.setItem('redirected', 'false');

        window.location.href = 'cart.html';
    }
});