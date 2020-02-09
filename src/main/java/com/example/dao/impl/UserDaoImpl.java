package com.example.dao.impl;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.config.CommonConfig;
import com.example.dao.UserDao;
import com.example.entity.User;
import com.example.entity.UserInfo;
import com.example.repository.UserInfoRepository;
import com.example.repository.UserRepository;
import com.example.util.CommonUtil;


/**
 * @author Karuppasamy Mariappan
 * @created 24-Aug-2019
 */
@Component
public class UserDaoImpl implements UserDao {

	private static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	@Autowired
	CommonConfig commonConfig;
		
	@Override
	@Transactional(rollbackOn = { Exception.class})
	public Map<?, ?> userLogout(long userId, String userAgent) throws Exception {
		logger.info("::::Enter(daoImpl)==>userRegistration::::");
		String methodName = "USER LOGOUT";
		User userObj = null;
		
		try {
			//Check username 
			userObj = userRepository.findByUserId(userId);
			if(userObj==null) {
				return CommonUtil.wrapResultResponse(methodName, 1, "User does not exists", null);
			}
			return CommonUtil.wrapResultResponse(methodName, 0, "Success", null);
		} catch (Exception e) {
			logger.error("::::Exception(daoImpl)==>updateLogoutUser::::");
			e.printStackTrace();
			return  CommonUtil.wrapResultResponse(methodName, 99, "Error occured", null);
		}
	}
	
	@Override
	@Transactional(rollbackOn = { Exception.class})
	public Map<?, ?> getUserProfile(long userId) throws Exception {
		logger.info("::::Enter(daoImpl)==>userRegistration::::");
		String methodName = "USER LOGOUT";
		User userObj = null;
		
		try {
			//Check username 
			userObj = userRepository.findByUserId(userId);
			if(userObj==null) {
				return CommonUtil.wrapResultResponse(methodName, 1, "User does not exists", null);
			}
			UserInfo userInfo =userInfoRepository.findByUserId(userObj.getUserId());
			if(userInfo==null){
				return CommonUtil.wrapResultResponse(methodName, 1, "User does not exists", null);	
			}
			Map<String, Object> params = new LinkedHashMap<String, Object>();
			params.put("userId", userObj.getUserId());
			params.put("userName", userObj.getUserName());
			params.put("email", userObj.getEmail());
			params.put("mobile_number", userObj.getMobileNumber());
			params.put("address", userInfo.getAddress());
			params.put("city", userInfo.getCity());
			params.put("country", userInfo.getCountry());
			params.put("membershipId", userObj.getMembershipId());
			params.put("firstName", userInfo.getFirstName());
			params.put("lastName", userInfo.getLastName());
			params.put("zipCode", userInfo.getZipCode());
			params.put("photo", commonConfig.getHostBaseUrl()+userInfo.getPhoto());
			return CommonUtil.wrapResultResponse(methodName, 0, "Success", params);
		} catch (Exception e) {
			logger.error("::::Exception(daoImpl)==>updateLogoutUser::::");
			e.printStackTrace();
			return  CommonUtil.wrapResultResponse(methodName, 99, "Error occured", null);
		}
	}
}
