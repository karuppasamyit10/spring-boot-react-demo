package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.UserInfo;

/**
 * @author Karuppasamy Mariappan
 * @created 09-Feb-2020
 */
public interface UserInfoRepository extends JpaRepository<UserInfo, Long>{

	UserInfo findByUserId(long userId);
}
