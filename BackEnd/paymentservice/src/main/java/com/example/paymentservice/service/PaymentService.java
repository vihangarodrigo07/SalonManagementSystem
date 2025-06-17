package com.example.paymentservice.service;

import com.example.paymentservice.feign.AppointmentClient;
import com.example.paymentservice.model.Payment;
import com.example.paymentservice.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private AppointmentClient appointmentClient; // Inject Feign Client

    public Payment processPayment(Payment payment) {
        // Check if the appointment exists
        boolean appointmentExists = appointmentClient.checkAppointmentExists(payment.getAppointmentId());

        if (!appointmentExists) {
            throw new RuntimeException("Invalid appointment ID: " + payment.getAppointmentId());
        }

        // Save payment only if appointment exists
        return paymentRepository.save(payment);
    }
}
