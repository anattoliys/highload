package ru.project.highload.config;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TransactionRoutingDataSource {
//        extends AbstractRoutingDataSource {
//
//    @Override
//    protected Object determineCurrentLookupKey() {
//        if (TransactionSynchronizationManager.isActualTransactionActive() &&
//                TransactionSynchronizationManager.isCurrentTransactionReadOnly()) {
//            log.info("=== Sql запрос отправлен на SLAVE ===");
//            return "slave";
//        }
//        log.info("=== Sql запрос отправлен на MASTER ===");
//        return "master";
//    }
//
//    ---

//    private final AtomicInteger counter = new AtomicInteger(0);
//
//    @Override
//    protected Object determineCurrentLookupKey() {
//        boolean isReadOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
//        String datasource;
//
//        if (isReadOnly) {
//            int index = (counter.getAndIncrement() % 2) + 1;
//            datasource = "slave" + index;
//        } else {
//            datasource = "master";
//        }
//
//        log.info("DataSource is: {}; Is read only: {}", datasource, isReadOnly);
//        return datasource;
//    }
}
