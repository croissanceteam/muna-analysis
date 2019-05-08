package com.datavisualzer.regideso.repositories;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

import com.datavisualzer.regideso.models.Users;

public interface UserRepository extends CrudRepository<Users,Long> {

	@Query("SELECT users FROM Users users WHERE users.username=?1 AND users.password=?2 AND users.status=1")
	Users findByusernameAndpassword(String username,String password);
	
	@Query("SELECT username FROM Users users WHERE users.id=?1")
	String findusernameById(int id);

	Users findByUsername(String username);
	Optional<Users> findById(Long id);
	
}
