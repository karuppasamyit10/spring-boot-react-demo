package com.example.dao.impl;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.example.bean.VehicleRegisterBean;
import com.example.config.CommonConfig;
import com.example.dao.UserDao;
import com.example.entity.SavedMySearch;
import com.example.entity.User;
import com.example.entity.UserInfo;
import com.example.entity.VehicleDetail;
import com.example.repository.SavedMySearchRepository;
import com.example.repository.UserInfoRepository;
import com.example.repository.UserRepository;
import com.example.repository.VehicleDetailRepository;
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
	VehicleDetailRepository vehicleDetailRepository;
	
	@Autowired
	SavedMySearchRepository savedMySearchRepository;
	
	@Autowired
	CommonUtil commonUtil;
	
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
	
	@Override
	@Transactional(rollbackOn = { Exception.class})
	public Map<?, ?> getAllProductsByUser(long userId, VehicleRegisterBean vehicleRegisterBean) throws Exception {
		logger.info("::::Enter(daoImpl)==>getAllProductsByUser::::");
		String methodName = "USER LOGOUT";
		User userObj = null;
		Map<String, Object> rootParams = new LinkedHashMap<String, Object>();
		try {
			//Check username 
			userObj = userRepository.findByUserId(userId);
			if(userObj==null) {
				return CommonUtil.wrapResultResponse(methodName, 1, "User does not exists", null);
			}
			Page<VehicleDetail> vehicleDetailList = vehicleDetailRepository.findByUserIdOrderByVehicleId(userId, commonUtil.pageable(vehicleRegisterBean.getPageNo(), vehicleRegisterBean.getItemsPerPage()));
			List<Object> vehicleDetailObjList = new LinkedList<Object>();
			for(VehicleDetail vehicleDetail : vehicleDetailList.getContent()) {
				Map<String, Object> params = new LinkedHashMap<String, Object>();
				
				params.put("savedSearchId", 0);
				params.put("isFavorite", false);
				if(userId>0){
					SavedMySearch savedMySearch = savedMySearchRepository.findByVehicleIdAndUserIdAndIsDeleted(vehicleDetail.getVehicleId(), userId, 0);
					if(savedMySearch!=null)
					{
						params.put("savedSearchId", savedMySearch.getSavedSearchId());
						params.put("isFavorite", true);
					}
				}
				params.put("vehicleId", vehicleDetail.getVehicleId());
				params.put("vehicleName", vehicleDetail.getYear()+" "+vehicleDetail.getBrand()+" "+vehicleDetail.getModel()+ " "+vehicleDetail.getModelDetail());
				params.put("vehicleTypeId", vehicleDetail.getVehicleTypeId());
				params.put("bodyStyleType", vehicleDetail.getBodyStyleType());
				params.put("brand", vehicleDetail.getBrand());
				params.put("model", vehicleDetail.getModel());
				params.put("modelDetail", vehicleDetail.getModelDetail());
				params.put("category1", vehicleDetail.getCategory1());
				params.put("category2", vehicleDetail.getCategory2());
				params.put("partsType", vehicleDetail.getPartsType());
				params.put("year", vehicleDetail.getYear());
				params.put("price", vehicleDetail.getPrice());
				params.put("discountedPrice", vehicleDetail.getDiscountedPrice());
				params.put("transmissionType", vehicleDetail.getTransmissionType());
				params.put("loadingWeight", vehicleDetail.getLoadingWeight());
				params.put("seatsType", vehicleDetail.getSeatsType());
				params.put("mileage", vehicleDetail.getMileage());
				params.put("conditionType", vehicleDetail.getConditionType());
				params.put("engineType", vehicleDetail.getEngineType());
				params.put("steeringType", vehicleDetail.getSteeringType());
				params.put("fuelType", vehicleDetail.getFuelType());
				params.put("country", vehicleDetail.getCountry());
				params.put("dealsType", vehicleDetail.getDealsType());
				params.put("membershipType", vehicleDetail.getMembershipType());
				params.put("dealerDetails", vehicleDetail.getDealerDetails());
				params.put("driveTrain", vehicleDetail.getDriveTrain());
				params.put("parentImageUrl", vehicleDetail.getParentPhotoFileName()==null || vehicleDetail.getParentPhotoFileName().isEmpty()?"":commonConfig.getHostBaseUrl()+vehicleDetail.getParentPhotoFileName());
				params.put("parentVideoUrl", vehicleDetail.getParentVideoFileName()==null || vehicleDetail.getParentVideoFileName().isEmpty()?"":commonConfig.getHostBaseUrl()+vehicleDetail.getParentVideoFileName());
				vehicleDetailObjList.add(params);
			}
			rootParams.put("totalRecords", vehicleDetailList.getTotalElements());
			rootParams.put("total", vehicleDetailList.getTotalPages());
			rootParams.put("vehicleDetailList", vehicleDetailObjList);
			return CommonUtil.wrapResultResponse(methodName, 0, "Success", rootParams);
		} catch (Exception e) {
			logger.error("::::Exception(daoImpl)==>getAllProductsByUser::::");
			e.printStackTrace();
			return  CommonUtil.wrapResultResponse(methodName, 99, "Error occured", null);
		}
	}
}
