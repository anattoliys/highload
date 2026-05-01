package ru.project.highload.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfig {

//    @Bean
//    @ConfigurationProperties("spring.datasource.master")
//    public DataSource masterDataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Bean
//    @ConfigurationProperties("spring.datasource.slave1")
//    public DataSource slave1DataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Bean
//    @ConfigurationProperties("spring.datasource.slave2")
//    public DataSource slave2DataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Bean
//    @Primary
//    public DataSource dataSource() {
//        TransactionRoutingDataSource routingDataSource = new TransactionRoutingDataSource();
//
//        Map<Object, Object> targetDataSources = new HashMap<>();
//        targetDataSources.put("master", masterDataSource());
//        targetDataSources.put("slave1", slave1DataSource());
//        targetDataSources.put("slave2", slave2DataSource());
//
//        routingDataSource.setTargetDataSources(targetDataSources);
//        routingDataSource.setDefaultTargetDataSource(masterDataSource());
//
//        routingDataSource.afterPropertiesSet();
//
//        return new LazyConnectionDataSourceProxy(routingDataSource);
//    }
}
