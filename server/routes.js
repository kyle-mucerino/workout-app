const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

module.exports = (collection) => {
  // Define the contact route and handler
  router.post(
    "/api/contact-page",
    [
      body("name").notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Invalid email address")
      // Add more validation rules for other fields
    ],
    (req, res) => {
      // Handle the form data here
      const { name, email, comment } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Validation errors exist
        return res.status(400).json({ errors: errors.array() });
      }

      const contactData = {
        name: name,
        email: email,
        comment: comment
      };

      collection
        .insertOne(contactData)
        .then(() => {
          // Data inserted successfully
          res.status(200).json({ message: "Data inserted successfully" });
        })
        .catch((error) => {
          // Error inserting data
          console.log("Error inserting data:", error);
          res.status(500).json({ message: "Internal server error" });
        });
    }
  );

  return router;
};
