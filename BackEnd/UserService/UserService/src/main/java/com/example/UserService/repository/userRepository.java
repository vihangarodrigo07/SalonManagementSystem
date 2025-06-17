package com.example.UserService.repository;

import com.example.UserService.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userRepository extends JpaRepository<user, Integer> {
    Optional<user> findByUsername(String username);
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);


}
