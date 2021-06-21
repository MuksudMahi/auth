/*
*app.js
*Muksud Hussain Mahi
*ID: 301155894
*June 20, 2021
*/

//testing if app is running
(function () {
    function Start() {
        console.log("App started...");

        //Adding alert functionality for all delete buttons
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm('Are you sure?')) {
                    event.preventDefault();
                    window.location.assign('/business_contact');
                }
            });
        }
    }
    window.addEventListener("load", Start)
})();