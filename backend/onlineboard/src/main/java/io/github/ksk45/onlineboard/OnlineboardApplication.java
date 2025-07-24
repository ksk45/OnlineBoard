package io.github.ksk45.onlineboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@EnableJpaAuditing
@Slf4j
@RequiredArgsConstructor
public class OnlineboardApplication {

	private final Environment environment;

	@PostConstruct
	public void init() {
		String[] activeProfiles = environment.getActiveProfiles();
		log.info("Active profiles: {}", String.join(", ", activeProfiles));
	}

	public static void main(String[] args) {
		SpringApplication.run(OnlineboardApplication.class, args);
	}

}
