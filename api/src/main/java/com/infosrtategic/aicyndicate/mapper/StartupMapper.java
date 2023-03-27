package com.infosrtategic.aicyndicate.mapper;

import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import com.infosrtategic.aicyndicate.model.entity.StartupEntity;

public interface StartupMapper {
    StartupDto mapToDto(StartupEntity startupEntity);
    StartupEntity mapToEntity(StartupDto startupDto);
}
