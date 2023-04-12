package com.backend.survey.form.entity;

import com.backend.survey.form.enumeration.Recommend;
import com.backend.survey.form.enumeration.StudentType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private int age;
    private StudentType studentType;
    private Recommend recommend;

    private String languages;
    @Lob
    private String suggestions;
}
