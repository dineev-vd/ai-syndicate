package com.infosrtategic.aicyndicate.service.impl;

import com.infosrtategic.aicyndicate.exception.throwables.StartupException;
import com.infosrtategic.aicyndicate.mapper.StartupMapper;
import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import com.infosrtategic.aicyndicate.model.entity.StartupEntity;
import com.infosrtategic.aicyndicate.repository.StartupRepository;
import com.infosrtategic.aicyndicate.service.StartupService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class StartupServiceImpl implements StartupService {

    @Autowired
    private StartupRepository startupRepository;
    @Autowired
    private StartupMapper startupMapper;

    private final String STARTUP_WITH_THIS_ID_DOES_NOT_EXIST_MESSAGE = "Startup with this ID doesn't exists";

    @Override
    public Page<StartupDto> getStartupsByPage(Pageable pageable) {
        return null;
    }

    @Override
    public List<StartupDto> getAllStartups() {
        return StreamSupport.stream(startupRepository.findAll().spliterator(), false)
                .map(startupEntity -> startupMapper.mapToDto(startupEntity))
                .collect(Collectors.toList());
    }

    @Override
    @SneakyThrows
    public StartupDto saveStartup(StartupDto startupDto) {
        StartupEntity savedStartup = startupRepository.save(startupMapper.mapToEntity(startupDto));
        return startupMapper.mapToDto(savedStartup);
    }

    @Override
    @SneakyThrows
    public StartupDto getStartup(UUID id) {
        if (isStartupWithSuchIdDoesNotExist(id)) {
            throw new StartupException(STARTUP_WITH_THIS_ID_DOES_NOT_EXIST_MESSAGE);
        }
        return startupMapper.mapToDto(startupRepository.findById(id).get());
    }

    @Override
    @SneakyThrows
    public StartupDto deleteStartup(UUID id) {
        if (isStartupWithSuchIdDoesNotExist(id)) {
            throw new StartupException(STARTUP_WITH_THIS_ID_DOES_NOT_EXIST_MESSAGE);
        }
        StartupEntity startupById = startupRepository.findById(id).get();
        startupRepository.deleteById(id);
        return startupMapper.mapToDto(startupById);
    }

    @Override
    @SneakyThrows
    public StartupDto updateStartup(StartupDto startupDto) {
        if (isStartupWithSuchIdDoesNotExist(startupDto.getId())) {
            throw new StartupException(STARTUP_WITH_THIS_ID_DOES_NOT_EXIST_MESSAGE);
        }
        startupRepository.save(startupMapper.mapToEntity(startupDto));
        return startupDto;
    }

    private boolean isStartupWithSuchIdDoesNotExist(UUID id) {
        return id != null && !startupRepository.existsById(id);
    }
}
