document.getElementById("submitButton").addEventListener("click",async function () {


    const textBoxValue = document.getElementById("textbox").value;
    const comboBoxValue = document.getElementById("comboBox").value;
    const toggleValue = document.getElementById("toggleButton").checked ? "ON" : "OFF";
    const responseBox = document.getElementById("responseBox");

    if (!textBoxValue) {
        responseBox.innerHTML = "<p style='color: red;'>Please enter text!</p>";
        return;
    }

    const formData = { textBoxValue, comboBoxValue, toggleValue, "message": "This is a test message" };

    try {
        const response = await fetch("http://localhost:6000/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

         responseBox.innerHTML = response;
    } 
        catch (error) {
            responseBox.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }

    responseBox.innerHTML = `
        <p><strong>Text:</strong> ${textBoxValue}</p>
        <p><strong>Selected Option:</strong> ${comboBoxValue}</p>
        <p><strong>Toggle Switch:</strong> ${toggleValue}</p>
    `;
});
