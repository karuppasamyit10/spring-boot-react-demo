package com.example.dao;

import java.util.Map;

import com.example.bean.VehicleRegisterBean;

/**
 * @author Karuppasamy Mariappan
 * @created 24-Aug-2019
 */
public interface UserDao {


	/**
	 * User Logout 
	 * 
	 * @param userAgent
	 * @return Map<String, Object>
	 * @throws Exception
	 */
	Map<?, ?> userLogout(long userId, String userAgent) throws Exception;

	Map<?, ?> getUserProfile(long userId) throws Exception;

	/**
	 * @param userId
	 * @return
	 */
	Map<?, ?> getAllProductsByUser(long userId, VehicleRegisterBean vehicleRegisterBean) throws Exception;
}
