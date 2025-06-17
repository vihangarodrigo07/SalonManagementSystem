package com.example.paymentservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "APPOINTMENTSERVICE")
public interface AppointmentClient {
    @GetMapping("/appointments/{id}/exists")
    boolean checkAppointmentExists(@PathVariable("id") Integer appointmentId);
}
