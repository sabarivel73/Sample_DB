package com.sample_db.Backend.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer UID;
    @NotNull
    @NotBlank
    @Column(name = "Name")
    String name;
    @NotNull
    @NotBlank
    @Column(name = "Email")
    String email;
    @NotNull
    @NotBlank
    @Column(name = "Location")
    String location;
    @NotNull
    @NotBlank
    @Column(name = "Role")
    String role;
    @NotNull
    @NotBlank
    @Column(name = "Status")
    String status;
}
