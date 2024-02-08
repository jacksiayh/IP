document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c212de72864d2bc0dcc9d2";
    const APIURL = "https://chipichapas-a6b7.restdb.io/rest/database";

    document.getElementById("formsubmitbtn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log('submitted')

        let userID = document.getElementById("user").value;
        let passID = document.getElementById("password").value;
        let emailID = document.getElementById("email").value;

        let jsondata = {
            "user": userID,
            "password": passID,
            "email": emailID,
            "points": 0
        };

        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
        }

        fetch(APIURL, settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // Display success message
                alert("Registered successfully! Please login.");

                // Redirect to login.html
                window.location.href = "login.html";
            })
            .catch(error => {
                console.error('Error:', error);
                // Display error message if needed
            });
    });
});
