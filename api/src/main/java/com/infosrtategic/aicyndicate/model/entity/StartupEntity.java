package com.infosrtategic.aicyndicate.model.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Table(name = "startup")
@Entity
@NoArgsConstructor
@Getter
@Setter
public class StartupEntity {
    @Id
    @GeneratedValue()
    private UUID id;
    private String title;
    private String description;
    private String domain;
    @Column(name = "current_status")
    private String currentStatus;
    @Column(name = "target_budget")
    private Integer targetBudget;
}
