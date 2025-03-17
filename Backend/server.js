const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 6000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serves frontend files

// POST API to receive form data
app.post("/submit-form", (req, res) => {
    console.log("Received Data:", req.body); // Debugging

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    res.json({
        success: true,
        message: "Form submitted successfully!",
        receivedData: { name, email, message }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
