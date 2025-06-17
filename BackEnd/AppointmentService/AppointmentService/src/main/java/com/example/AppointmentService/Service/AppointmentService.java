package com.example.AppointmentService.Service;

import com.example.AppointmentService.Model.Appointment;
import com.example.AppointmentService.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AppointmentService {
    @Autowired
    private AppointmentRepository repository;

    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Integer id) {
        return repository.findById(id);
    }

    public Appointment saveAppointment(Appointment appointment) {
        return repository.save(appointment);
    }

    public void deleteAppointment(Integer id) {
        repository.deleteById(id);
    }

    public boolean appointmentExists(Integer id) {
        return repository.existsById(id);
    }
}
