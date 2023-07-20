// Selecting necessary DOM elements
const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// Variable to store generated captcha
let captchaText = null;

// Function to genrate captcha
const genrateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split(" ");
    const changeString = randomStringArray.map((char) =>
    (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");
    captchaTextBox.value = captchaText;
    console.log("mycaptcha:  "+captchaText);
}
const refreshButtonClick = () => { //......
    genrateCaptcha();
    captchInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    //Toggle submit button disable class based on captcha input field.
    submitButton.classList.toggle("disabled", !captchInputBox.value);

    if (!captchInputBox.value) message.classList.remove("active");
};

//Function to validate the entered captcha
const submitButtonclick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
    message.classList.add("active");

    //Check if the entered captcha text is correct or not
    if (captchInputBox.value === captchaText) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#006400";
    } else {
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF0000";
    }
};

/* Add event listners for the refresh button, captchaInputBox, submit button */

refreshButton.addEventListener("click", refreshButtonClick);
captchInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitButtonclick);

// Generate a captcha when page loads
genrateCaptcha();