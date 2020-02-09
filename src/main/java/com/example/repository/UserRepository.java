package com.example.repository;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.entity.User;

/**
 * @author Karuppasamy Mariappan
 * @created 24-Aug-2019
 */
public interface UserRepository extends JpaRepository<User, Long>{

	@Query(value = "SELECT UTC_TIMESTAMP()", nativeQuery = true)
	public Date getUTC_DateTime();
	
	public User findByEmailAndIsDeleted(String email, int isDeleted);

	public User findByUserNameIgnoreCaseOrEmailIgnoreCase(String username, String upperCase);

	public User findByEmail(String email);
	
	public User findByMobileNumber(String mobileNumber);

	public User findByUserId(long userId);

	public User findByUserName(String string);
	
	@Query(value = "SELECT u.user_id, u.user_name, u.user_type, u.email, u.membership_id, u.is_verify, ui.country, ui.first_name, ui.last_name, ui.photo, u.mobile_number from users u "
			+ " LEFT JOIN user_info ui ON ui.user_id = u.user_id "
			+ " WHERE (u.user_name LIKE %:search% OR u.email LIKE %:search% OR ui.first_name LIKE %:search% OR ui.last_name LIKE %:search% OR u.mobile_number LIKE %:search%) AND u.user_type = 'USER' "
			+ " ORDER BY ui.first_name ASC \n#pageable\n ",
			countQuery =" SELECT count(*) from users u "
			+ " LEFT JOIN user_info ui ON ui.user_id = u.user_id "
			+ " WHERE (u.user_name LIKE %:search% OR u.email LIKE %:search% OR ui.first_name LIKE %:search% OR ui.last_name LIKE %:search% OR u.mobile_number LIKE %:search%) AND u.user_type = 'USER' ",
			nativeQuery = true)
	Page<Object> getUserListBySearch(@Param("search") String search, Pageable pageable);
}
