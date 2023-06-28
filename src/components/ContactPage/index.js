import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary form submission logic here
    // For this example, we will just log the form data
    console.log({ name, email, comment });

    // Reset the form fields
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <Box sx={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
