package com.example.UserService.Service;

import com.example.UserService.model.LoginRequest;
import com.example.UserService.model.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class userService {

    @Autowired
    private com.example.UserService.repository.userRepository userRepository;



    public List<user> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<user> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    public user createUser(user user) {
        if (userRepository.existsByUsername(user.getUsername()) || userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Username or email already exists");
        }
        return userRepository.save(user);
    }

    public user updateUser(Integer id, user updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPhoneNumber(updatedUser.getPhoneNumber());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    public user loginUser(LoginRequest loginRequest) {
        Optional<user> existingUser = userRepository.findByUsername(loginRequest.getUsername());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(loginRequest.getPassword())) {
            return existingUser.get();
        } else {
            throw new RuntimeException("Invalid username or password!");
        }
    }


}

