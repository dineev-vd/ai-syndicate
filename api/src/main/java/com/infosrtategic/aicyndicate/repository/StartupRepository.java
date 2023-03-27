package com.infosrtategic.aicyndicate.repository;

import com.infosrtategic.aicyndicate.model.entity.StartupEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface StartupRepository extends PagingAndSortingRepository<StartupEntity, UUID> {
}