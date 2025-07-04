package com.rushi.zeromile.controller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


import com.rushi.zeromile.dto.LoginRequest;
import com.rushi.zeromile.dto.UserDTO;
import com.rushi.zeromile.model.Role;
import com.rushi.zeromile.model.User;
import com.rushi.zeromile.service.UserService;
import com.rushi.zeromile.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
  


@CrossOrigin(origins = "http://localhost:5173") // React app ke port ke saath
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public User registerUser(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setRole(Role.valueOf(userDTO.getRole().toUpperCase()));
        return userService.createUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        boolean isValid = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
        if (isValid) {
            String token = jwtUtil.generateToken(loginRequest.getUsername());
            return ResponseEntity.ok("Bearer " + token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }
}
