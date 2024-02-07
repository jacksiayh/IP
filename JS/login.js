document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65c212de72864d2bc0dcc9d2";
    const APIURL = "https://chipichapas-a6b7.restdb.io/rest/database";

    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
        e.preventDefault();
        console.log('submitted')

        let userID = document.getElementById("user").value;
        let passID = document.getElementById("password").value;

        console.log("Searching for user:", userID, "with password:", passID);
        let url = `${APIURL}?q={"user": "${userID}", "password": "${passID}"}`;

                
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response Data:', data);
            if (data.length > 0) {
                console.log("User found in database", data);

                const loggedIn = true;

                localStorage.setItem("loggedInUser", JSON.stringify({ user: userID, password: passID, loggedIn }));

                window.location.href = "index.html";

                alert("Logged in as username: " + userID);
                    
            } else {
                console.log("Username not found in database");
                alert("Username or password not found, please register or try again");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    });
});
