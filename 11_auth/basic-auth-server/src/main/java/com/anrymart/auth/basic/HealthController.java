package com.anrymart.auth.basic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    private enum Health {
        UP
    }

    @GetMapping("/api/health")
    public Health getHealth() {
        return Health.UP;
    }
}
