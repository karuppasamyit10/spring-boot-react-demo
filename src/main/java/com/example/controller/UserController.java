package com.example.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.UserDao;
import com.example.util.CommonUtil;


/**
 * @author Karuppasamy Mariappan
 * @created 23-Aug-2019
 */
@RestController
@RequestMapping("/api/user/")
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserDao userDao;

	@RequestMapping(method = RequestMethod.GET, value = "/logout", produces = "application/json")
	@ResponseBody
	public Map<?, ?> userLogout(@RequestHeader(value="User-Agent", defaultValue="new") String userAgent) throws Exception {
		logger.info("Controller==>Enter==>userLogout<==");
		String methodName = "USER LOGOUT";
		long userId = CommonUtil.getUserId();
		try {
			if(userId>0) {
				return userDao.userLogout(userId, userAgent);
			} else  {
				return  CommonUtil.wrapResultResponse(methodName, 1, "Invalid access token", null);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			logger.info("Controller==>Exception==>userLogout<==");
			return  CommonUtil.wrapResultResponse(methodName, 99, "Error occured into controller userLogout", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get/profile", produces = "application/json")
	@ResponseBody
	public Map<?, ?> getUserProfile() throws Exception {
		logger.info("Controller==>Enter==>getUserProfile<==");
		String methodName = "GET USER PROFILE";
		long userId = CommonUtil.getUserId();
		try {
			if(userId>0) {
				return userDao.getUserProfile(userId);
			} else  {
				return  CommonUtil.wrapResultResponse(methodName, 1, "Invalid access token", null);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.info("Controller==>Exception==>getUserProfile<==");
			return  CommonUtil.wrapResultResponse(methodName, 99, "Error occured into controller getUserProfile", null);
		}
	}
}
