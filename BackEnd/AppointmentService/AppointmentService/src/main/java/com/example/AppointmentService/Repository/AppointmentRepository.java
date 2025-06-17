package com.example.AppointmentService.Repository;

import com.example.AppointmentService.Model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

}
