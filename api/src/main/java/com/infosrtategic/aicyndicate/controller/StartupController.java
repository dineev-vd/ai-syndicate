package com.infosrtategic.aicyndicate.controller;

import com.github.javafaker.Faker;
import com.infosrtategic.aicyndicate.model.dto.StartupDto;
import com.infosrtategic.aicyndicate.service.StartupService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/startups")
public class StartupController {

    @Autowired
    private StartupService startupService;

    @ApiOperation("Creates startup")
    @PostMapping
    public StartupDto createStartup(@RequestBody StartupDto startupDto) {
        return startupService.saveStartup(startupDto);
    }

    @ApiOperation("Get startup by id")
    @ApiResponse(code = 404, message = "If startup with specified ID doesn't exist")
    @GetMapping("/{id}")
    public StartupDto getStartup(@PathVariable(value = "id") UUID id) {
        return startupService.getStartup(id);
    }

    @ApiOperation("Get all startups")
    @GetMapping
    public List<StartupDto> getAllStartups() {
        return startupService.getAllStartups();
    }

    @ApiOperation("Deletes startup by id")
    @DeleteMapping("/{id}")
    @ApiResponse(code = 404, message = "If startup with specified ID doesn't exist")
    public StartupDto deleteStartup(@PathVariable(value = "id") UUID id) {
        return startupService.deleteStartup(id);
    }

    @ApiOperation("Updates startup")
    @PutMapping
    @ApiResponse(code = 404, message = "If startup with specified ID doesn't exist")
    public StartupDto updateStartup(@RequestBody StartupDto startupDto) {
        return startupService.updateStartup(startupDto);
    }

    @ApiOperation("Creates N random startupssss")
    @PostMapping("/create")
    public List<StartupDto> createNStartups(@RequestParam(name = "amount") Integer amount) {
        Faker faker = new Faker();
        List<StartupDto> result = new ArrayList<>();
        for (int i = 0; i < amount; i++) {
            StartupDto randomStartup = StartupDto.builder()
                    .title(faker.name().title())
                    .description(faker.lebowski().quote())
                    .domain(faker.book().genre())
                    .currentStatus(faker.pokemon().name())
                    .targetBudget(faker.number().numberBetween(1, 10000))
                    .build();
            result.add(startupService.saveStartup(randomStartup));
        }
        return result;
    }
}
