
package com.infosrtategic.aicyndicate.model.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class StartupDto {
    private UUID id;
    private String title;
    private String description;
    private String domain;
    private String currentStatus;
    private Integer targetBudget;
}
