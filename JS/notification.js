document.addEventListener("DOMContentLoaded", function () {
    const switches = document.querySelectorAll('.notification-switch');

    switches.forEach(function(switchElement) {
        const switchKey = switchElement.getAttribute('data-key');
        
        const storedSwitchState = localStorage.getItem(switchKey);

        if (storedSwitchState) {
            switchElement.checked = JSON.parse(storedSwitchState);
        }

        switchElement.addEventListener("change", function () {
            localStorage.setItem(switchKey, JSON.stringify(this.checked));
        });
    });
});
