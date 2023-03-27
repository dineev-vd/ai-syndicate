package com.infosrtategic.aicyndicate.model.dto;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class InvestorDto {
    private String name;
    private String email;
    private String phoneNumber;
    private String country;
    private String city;
}
