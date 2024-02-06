document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65c212de72864d2bc0dcc9d2";
    const APIURL = "https://chipichapas-a6b7.restdb.io/rest/database";

    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
        e.preventDefault();
        console.log('form submitted!')

        let passID = document.getElementById("password").value;
        let userID = document.getElementById("username").value;

        let url = `${APIURL}?q={"password": "${passID}", "username": "${userID}"}`;
                
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                console.log("User found in database", data);

                const userLogged = true;

                // Store in localStorage
                localStorage.setItem("loggedInUser", JSON.stringify({ username: userID, password: passID, userLogged }));

                // Redirect to home page
                window.location.href = "index.html";

                // tell user he/she is logged in
                alert("Logged in as username: " + userID);
                    
            } else {
                console.log("Username not found in database");
                alert("Username or password not found, please register or try again");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    });
});
