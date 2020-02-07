package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.EngineType;

@Repository
public interface EngineTypeRepository extends JpaRepository<EngineType, Long> {

	List<EngineType> findByIsDeletedOrderByEngineTypeAsc(int isDeleted);
	
}