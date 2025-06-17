import { useEffect, useState } from "react";
import axios from "axios";
import "./Appointments.css";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    customerName: "",
    date: "",
    time: "",
    staffAssigned: "",
  });

  // Fetch Existing Appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:8081/appointments");
        setAppointments(response.data);
      } catch (error) {
        console.error("Failed to fetch appointments", error);
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit New Appointment
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.date || !formData.time || !formData.staffAssigned) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/appointments", formData);
      setAppointments([...appointments, response.data]); // Update UI instantly
      setFormData({ customerName: "", date: "", time: "", staffAssigned: "" }); // Reset form
    } catch (error) {
      console.error("Failed to book appointment", error);
      alert("Error booking appointment, please try again.");
    }
  };

  return (
    <div className="appointments-container">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="staffAssigned"
          placeholder="Staff Assigned"
          value={formData.staffAssigned}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>

      <h2>Your Appointments</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments scheduled yet.</p>
      ) : (
        <div className="appointments-grid">
          {appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.id}>
              <p><strong>Customer:</strong> {appointment.customerName}</p>
              <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Staff:</strong> {appointment.staffAssigned}</p>
              <p className={`status-badge ${appointment.status || 'pending'}`}>
                {appointment.status === "confirmed" ? "✓ Confirmed" : "⌛ Pending"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Appointments;
