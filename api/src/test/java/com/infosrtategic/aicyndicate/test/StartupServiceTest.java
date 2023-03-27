package com.infosrtategic.aicyndicate.test;

import com.infosrtategic.aicyndicate.BaseTest;
import com.infosrtategic.aicyndicate.exception.throwables.StartupException;
import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import com.infosrtategic.aicyndicate.service.StartupService;
import org.assertj.core.api.Assertions;
import org.junit.After;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

public class StartupServiceTest extends BaseTest {

    @Autowired
    private StartupService startupService;

    @Test
    public void getAllStartupsTest() {
        StartupDto startup1 = StartupDto.builder()
                .title("Startup no. 1")
                .description("Description of first startup")
                .domain("LifeScience")
                .currentStatus("Planning")
                .targetBudget(10000)
                .build();
        StartupDto startup2 = StartupDto.builder()
                .title("Startup no. 2")
                .description("Description of second startup")
                .domain("DeFi")
                .currentStatus("Implementing")
                .targetBudget(999)
                .build();
        StartupDto startup3 = StartupDto.builder()
                .title("Startup no. 3")
                .description("Description of third startup")
                .domain("FinTech")
                .currentStatus("Searching")
                .targetBudget(100)
                .build();

        startupService.saveStartup(startup1);
        startupService.saveStartup(startup2);
        startupService.saveStartup(startup3);

        List<StartupDto> savedStartups = startupService.getAllStartups();
        for (StartupDto startupDto : savedStartups) {
            startupDto.setId(null);
        }

        List<StartupDto> actualStartups = List.of(startup1, startup2, startup3);

        assertThat(actualStartups).containsAnyElementsOf(savedStartups);
    }

    @Test
    public void saveAndGetStartupTest() {
        StartupDto startup1 = StartupDto.builder()
                .title("Startup no. 1")
                .description("Description of first startup")
                .domain("LifeScience")
                .currentStatus("Planning")
                .targetBudget(10000)
                .build();

        UUID savedStartupId = startupService.saveStartup(startup1).getId();
        StartupDto savedStartup = startupService.getStartup(savedStartupId);
        savedStartup.setId(null);

        assertThat(savedStartup).isEqualTo(startup1);
    }

    @Test
    public void deleteStartupTest() {
        StartupDto startup1 = StartupDto.builder()
                .title("Startup no. 1")
                .description("Description of first startup")
                .domain("LifeScience")
                .currentStatus("Planning")
                .targetBudget(10000)
                .build();

        UUID savedStartupId = startupService.saveStartup(startup1).getId();
        StartupDto deletedStartup = startupService.deleteStartup(savedStartupId);
        deletedStartup.setId(null);

        assertThat(deletedStartup).isEqualTo(startup1);
        Assertions.assertThatThrownBy(() -> startupService.getStartup(savedStartupId))
                .isInstanceOf(StartupException.class)
                .hasMessage("Startup with this ID doesn't exists");
    }

    @Test
    public void updateStartupTest() {
        StartupDto oldStartup = StartupDto.builder()
                .title("Startup no. 1")
                .description("Description of first startup")
                .domain("LifeScience")
                .currentStatus("Planning")
                .targetBudget(10000)
                .build();
        StartupDto newStartup = StartupDto.builder()
                .title("Startup no. 2")
                .description("Description of second startup")
                .domain("DeFi")
                .currentStatus("Implementing")
                .targetBudget(999)
                .build();

        StartupDto savedStartup = startupService.saveStartup(oldStartup);
        newStartup.setId(savedStartup.getId());
        startupService.updateStartup(newStartup);
        StartupDto updatedStartup = startupService.getStartup(savedStartup.getId());

        assertThat(updatedStartup).isEqualTo(newStartup);
    }
}

