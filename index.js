
function askname() {
            let name = prompt("Please enter your name:", "");

            if (name !== null && name !== "") {
                document.getElementById("greeting").textContent = "Hello, " + name + "!";
            } 
            else {
                document.getElementById("greeting").textContent = "Hello, user (name canceled or empty)!";
            }
        
}

  function checkAge() {
    // 1. Get the value from the birthdate input field
    const birthdateInput = document.getElementById('birthdate').value;
    const messageArea = document.getElementById('message');

    // 2. Check if the input is empty
    if (!birthdateInput) {
        messageArea.textContent = "Please enter your birthdate.";
        return;
    }

    // 3. Calculate the age
    const today = new Date();
    const birthdate = new Date(birthdateInput);
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if the birthday hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // 4. Check if the age is 18 or above
    if (age >= 18) {
        messageArea.textContent = "You are 18 or above. Welcome!";
        messageArea.style.color = "green";
        // You can add further actions here, e.g., redirect to another page
    } else {
        messageArea.textContent = "You must be 18 or above to proceed.";
        messageArea.style.color = "red";
    }
}

 // JavaScript code goes here
        const outputDiv = document.getElementById("output");
        let htmlString = ""; // Initialize an empty string to build the HTML content

        // The for loop counts from i = 1 up to and including 10
        for (let i = 1; i <= 5; i++) {
            // Append a new paragraph tag with the current count to the string
            htmlString += `<p>Count: ${i}</p>`;
        }

        // After the loop finishes, update the HTML element once
        outputDiv.innerHTML = htmlString;


        let button = document.getElementById('greetbtn');

        button.addEventListener('click', () => {
            alert('Thanks for clicking!');
        });
