package com.example.AppointmentService.Controller;

import com.example.AppointmentService.Model.Appointment;
import com.example.AppointmentService.Repository.AppointmentRepository;
import com.example.AppointmentService.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5176")
@RestController
@RequestMapping("/appointments")
class AppointmentController {
    @Autowired
    private AppointmentService service;

    @GetMapping
    public List<Appointment> getAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/{id}")
    public Optional<Appointment> getAppointment(@PathVariable Integer id) {
        return service.getAppointmentById(id);
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return service.saveAppointment(appointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Integer id) {
        service.deleteAppointment(id);
    }

    @GetMapping("/{id}/exists")
    public boolean checkAppointmentExists(@PathVariable("id") Integer id) {
        return service.appointmentExists(id);
    }

}


