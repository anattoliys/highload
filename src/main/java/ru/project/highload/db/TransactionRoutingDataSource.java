package ru.project.highload.db;

import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
public class TransactionRoutingDataSource extends AbstractRoutingDataSource {

    private final AtomicInteger counter = new AtomicInteger(0);

    @Override
    protected Object determineCurrentLookupKey() {
        boolean isReadOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
        String datasource;

        if (isReadOnly) {
            int index = (counter.getAndIncrement() % 2) + 1;
            datasource = "slave" + index;
        } else {
            datasource = "master";
        }

        log.info("DataSource is: {}; Is read only: {}", datasource, isReadOnly);
        return datasource;
    }
}
