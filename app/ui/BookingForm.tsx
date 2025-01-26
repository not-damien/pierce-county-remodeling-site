import { TextField, Button } from "@mui/material";

export default function BookingForm() {
    return(
<section className="py-10 px-6">
  <h2 className="text-3xl font-semibold text-center mb-6">Schedule an Appointment</h2>
  <form
    className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
    noValidate
  >
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
      id="preferredDate"
      name="preferredDate"
      label="Preferred Date"
      type="date"
      slotProps={{
        inputLabel: { shrink: true },
      }}
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      id="preferredTime"
      name="preferredTime"
      label="Preferred Time"
      type="time"
      slotProps={{
        inputLabel: { shrink: true },
      }}
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
      Book Appointment
    </Button>
  </form>
</section>

    );
}