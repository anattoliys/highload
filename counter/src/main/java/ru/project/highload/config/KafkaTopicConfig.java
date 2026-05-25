package ru.project.highload.config;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaAdmin;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaTopicConfig {

    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;

    @Value("${spring.kafka.topics.message-create}")
    private String createTopic;

    @Value("${spring.kafka.topics.message-rollback}")
    private String rollbackTopic;

    @Bean
    public KafkaAdmin kafkaAdmin() {
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        return new KafkaAdmin(configs);
    }

    @Bean
    public NewTopic messageCreatedTopic() {
        return TopicBuilder.name(createTopic)
                .partitions(3)
                .replicas(1)
                .build();
    }

    @Bean
    public NewTopic messageRollbackTopic() {
        return TopicBuilder.name(rollbackTopic)
                .partitions(3)
                .replicas(1)
                .build();
    }
}
