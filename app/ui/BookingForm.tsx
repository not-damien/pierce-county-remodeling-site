"use client"
import { TextField, Button } from "@mui/material";
import { FormEvent } from "react";

export default function BookingForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
        console.log(formData.get('name'))
        console.log(formData.get('email'))
        console.log(formData.get('phone'))
        console.log(formData.get('projectDescription'))
    }
    return(
<section className="py-10 px-6">
  <h2 className="text-3xl font-semibold text-center mb-6">Request a Call</h2>
  <form
    onSubmit={handleSubmit}
    className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
  >
    <legend>
    Please provide your contact information and a description of your project and we'll contact you as soon as possible to schedule a free estimate
    </legend>
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      id="email"
      name="email"
      label="Email"
      type="email"
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      id="phone"
      name="phone"
      label="Phone"
      type="tel"
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      id="projectDescription"
      name="projectDescription"
      label="Project Description"
      multiline
      rows={4}
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <Button
      type="submit"
      color="primary"
      fullWidth
      variant="outlined"
      sx={{ padding: "12px 0", textTransform: "none", fontSize: "16px" }}
    >
      Schedule a Call
    </Button>
  </form>
</section>
    );
}
