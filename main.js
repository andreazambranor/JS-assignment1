//get estimate
document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault(); //avoid refreshing after submit

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {

        var num3 = num1 * num2;
        var num4 = num3 * 19;

        var formattedCurrency = new Intl.NumberFormat('en-US', {//Formatting as currency
            style: 'currency',
            currency: 'USD'
          }).format(num4);

        document.getElementById("result").textContent = formattedCurrency;//result message
    } else {

        document.getElementById("result").textContent = "Invalid input. Please enter valid numbers.";//error message
    }
});

//call number when open, message when closed
const phoneNumber = '+12898283361';

        function callNow() {

            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const currentDay = currentDate.getDay();

            if (currentDay === 0 || currentDay === 6) { // Saturday or sunday
                alert('Sorry, we are closed on weekends.');
            } else if (currentHour < 9 || currentHour >= 17) { //after 5 of before 9
                alert('Sorry, we are currently closed.');
            } else {
                window.location.href = 'tel:' + phoneNumber;
            }
        }

        // Add a click event listener to the button
        document.getElementById('callbutton').addEventListener('click', callNow);