//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function() {
    // What kind of interface we want at the start 
    const APIKEY = "65c212de72864d2bc0dcc9d2";
    const APIURL = "https://chipichapas-a6b7.restdb.io/rest/database";

    //[STEP 1]: Create our submit form listener
    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {

      // Prevent default action of the button 
      e.preventDefault();


    let userID = document.getElementById("user").value;
    let passID = document.getElementById("password").value;
    let emailID = document.getElementById("email").value;


      //[STEP 3]: Get form values when the user clicks on send
      // Adapted from restdb API
      let jsondata = {
        "user": userID,
        "password": passID,
        "email": emailID,
 
      };
      let settings = {
        method: "POST", //[cher] we will use post to send info
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
    }
    fetch("https://chipichapas-a6b7.restdb.io/rest/database", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("formsubmitbtn").disabled = false;
        });
    });//end click 


})