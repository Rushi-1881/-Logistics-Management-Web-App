package com.rushi.zeromile.repository;

import com.rushi.zeromile.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    
}
