package com.stacklab.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stacklab.Model.User;
import com.stacklab.Repository.UserRepository;



@RestController
@CrossOrigin({"*"})
//@CrossOrigin(origins = "http://localhost:5173")
public class MainController {
	
	@Autowired UserRepository userRepository;
	
	@GetMapping("/data")
	public List<User> getData() {
		return userRepository.findAll();
	}
	
	@PostMapping("/save")
	public ResponseEntity<User> saveUser(@ModelAttribute User user) {
		userRepository.save(user);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	
	

}
