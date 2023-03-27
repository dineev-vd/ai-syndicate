package com.infosrtategic.aicyndicate.mapper.impl;

import com.infosrtategic.aicyndicate.mapper.StartupMapper;
import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import com.infosrtategic.aicyndicate.model.entity.StartupEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class StartupMapperImpl extends ModelMapper implements StartupMapper {
    @Override
    public StartupDto mapToDto(StartupEntity startupEntity) {
        return this.map(startupEntity, StartupDto.class);
    }

    @Override
    public StartupEntity mapToEntity(StartupDto startupDto) {
        return this.map(startupDto, StartupEntity.class);
    }
}
