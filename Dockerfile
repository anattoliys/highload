FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /highload
COPY . .
RUN chmod +x gradlew && sed -i 's/\r$//' gradlew
RUN ./gradlew bootJar -x test --no-daemon

FROM eclipse-temurin:17-jre-alpine AS runner
WORKDIR /highload
USER nobody
ARG MODULE_NAME
COPY --from=builder /highload/${MODULE_NAME}/build/libs/*.jar highload.jar
ENTRYPOINT ["java", "-jar", "highload.jar"]
