package ru.project.highload.config;

import io.tarantool.driver.api.TarantoolClient;
import io.tarantool.driver.api.TarantoolClientConfig;
import io.tarantool.driver.api.TarantoolClientFactory;
import io.tarantool.driver.api.TarantoolServerAddress;
import io.tarantool.driver.auth.SimpleTarantoolCredentials;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Collections;

@Configuration
public class TarantoolConfig {

    @Value("${tarantool.host}")
    private String host;

    @Bean
    public TarantoolClient tarantoolClient() {
        TarantoolClientConfig config = TarantoolClientConfig.builder()
                .withConnectTimeout(2000)
                .withReadTimeout(5000)
                .withRequestTimeout(30000)
                .build();
        SimpleTarantoolCredentials credentials = new SimpleTarantoolCredentials("admin", "admin");
        TarantoolServerAddress address = new TarantoolServerAddress(host, 3301);
        return TarantoolClientFactory.createClient()
                .withAddresses(Collections.singletonList(address))
                .withCredentials(credentials)
                .withTarantoolClientConfig(config)
                .withConnections(10)
                .build();
    }
}