const form = document.getElementById("form");
const age = document.getElementById("age");
const name = document.getElementById("name");

form.addEventListener("submit", function (e) {

    // Prevent page refresh
    e.preventDefault();

    const userAge = age.value;
    const userName = name.value;

    // Validation
    if (userAge === "" || userName === "") {
        alert("Please enter valid details");
        return;
    }

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Number(userAge) > 18) {
                resolve();
            } else {
                reject();
            }

        }, 4000);

    });

    promise
        .then(() => {
            alert(`Welcome, ${userName}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${userName}. You aren't old enough.`);
        });

});