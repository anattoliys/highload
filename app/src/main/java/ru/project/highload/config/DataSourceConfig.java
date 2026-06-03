package ru.project.highload.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfig {

//    @Bean
//    @ConfigurationProperties("spring.datasource")
//    public DataSourceProperties masterProperties() {
//        return new DataSourceProperties();
//    }
//
//    @Bean
//    @ConfigurationProperties("spring.datasource.hikari")
//    public HikariDataSource masterDataSource(DataSourceProperties masterProperties) {
//        return masterProperties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
//    }
//
//    @Bean
//    @ConfigurationProperties("spring.datasource.slave")
//    public DataSourceProperties slaveProperties() {
//        return new DataSourceProperties();
//    }
//
//    @Bean
//    @ConfigurationProperties("spring.datasource.slave.hikari")
//    public HikariDataSource slaveDataSource(DataSourceProperties slaveProperties) {
//        return slaveProperties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
//    }
//
//    @Bean
//    @Primary
//    public DataSource dataSource(HikariDataSource masterDataSource, HikariDataSource slaveDataSource) {
//        TransactionRoutingDataSource routingDataSource = new TransactionRoutingDataSource();
//
//        Map<Object, Object> targetDataSources = new HashMap<>();
//        targetDataSources.put("master", masterDataSource);
//        targetDataSources.put("slave", slaveDataSource);
//
//        routingDataSource.setTargetDataSources(targetDataSources);
//        routingDataSource.setDefaultTargetDataSource(masterDataSource);
//        routingDataSource.afterPropertiesSet();
//
//        return new LazyConnectionDataSourceProxy(routingDataSource);
//    }
//
//    ---

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
