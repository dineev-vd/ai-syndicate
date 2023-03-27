package com.infosrtategic.aicyndicate.service;

import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface StartupService {
    Page<StartupDto> getStartupsByPage(Pageable pageable);
    List<StartupDto> getAllStartups();
    StartupDto saveStartup(StartupDto startupDto);
    StartupDto getStartup(UUID id);
    StartupDto deleteStartup(UUID id);
    StartupDto updateStartup(StartupDto startupDto);
}
