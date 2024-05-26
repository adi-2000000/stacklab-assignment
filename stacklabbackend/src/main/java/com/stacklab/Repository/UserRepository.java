package com.stacklab.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stacklab.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
