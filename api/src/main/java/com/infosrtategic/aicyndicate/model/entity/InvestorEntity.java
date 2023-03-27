package com.infosrtategic.aicyndicate.model.entity;


import javax.persistence.*;
import java.util.UUID;

@Table(name = "investor")
@Entity
public class InvestorEntity {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;
    private String country;
    private String city;
}
