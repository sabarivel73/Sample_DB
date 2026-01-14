package com.sample_db.Backend.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "post_table")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer PID;
    @NotNull
    @Column(name = "User_ID")
    Integer UID;
    @NotNull
    @NotBlank
    @Column(name = "Content")
    String content;
    @NotNull
    @NotBlank
    @Column(name = "Status")
    String status;
    @NotNull
    @Column(name = "Post_Date")
    Date date;
}
