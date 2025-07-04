package com.rushi.zeromile.service;

import com.rushi.zeromile.model.User;
import com.rushi.zeromile.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // encode password
        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
   

    public boolean loginUser(String username, String rawPassword) {
    User user = userRepository.findByUsername(username);
    if (user == null) return false;

    return passwordEncoder.matches(rawPassword, user.getPassword());
}

   

}
