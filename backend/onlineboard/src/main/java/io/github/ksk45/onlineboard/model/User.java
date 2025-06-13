package io.github.ksk45.onlineboard.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "created_at")
    private java.time.LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = java.time.LocalDateTime.now();
    }
} 